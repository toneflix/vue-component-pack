import { App, Ref, getCurrentScope, onScopeDispose, ref, toValue } from 'vue'
import type {
  AuthOptions,
  AuthUser,
  BaseError,
  MiddlewareContext,
  MiddlewareResult,
  StorageOptions
} from '../types'
import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import { createPinia, getActivePinia } from 'pinia'

/**
 * A simple errors reshaper, usefull for when your errors look like:
 *
 * const errors = {
 *   email: ["The Email Address has already been taken."],
 *   phone: ["Invalid Phone Number"]
 * };
 *
 * But you want them to look like this instead:
 *
 * const errors = {
 *   email: "The Email Address has already been taken.",
 *   phone: "Invalid Phone Number"
 * };
 *
 * This becomes very usefull if your errors are formated from Laravel's default validator.
 *
 * @param errors
 * @returns
 */
export const reshapeError = (errors: BaseError['errors']) => {
  return Object.fromEntries(Object.entries(errors || {}).map(([key, value]) => [key, value[0]]))
}

/**
 * Create a countdown from a simple timeout value, returning both the countdown
 * ref and a handle to cancel the underlying interval.
 *
 * Prefer this over {@link createCountdown} whenever a countdown can be started
 * more than once from the same place — without cancelling the previous one, the
 * intervals stack and the ref ticks down two, three, N seconds at a time.
 *
 * @param timeout
 * @param callback
 * @returns
 */
export const createStoppableCountdown = (
  timeout?: number | Ref<number | undefined>,
  callback?: (val: number) => void
) => {
  const countdown = ref<number>(0)
  const timeoutValue = toValue(timeout)

  let intval: ReturnType<typeof setInterval> | undefined

  const stop = () => {
    if (intval !== undefined) {
      clearInterval(intval)
      intval = undefined
    }
  }

  if (timeoutValue && timeoutValue > 0) {
    countdown.value = timeoutValue
    intval = setInterval(() => {
      countdown.value -= 1000
      if (callback) {
        callback(countdown.value)
      }
      if (countdown.value <= 0) {
        stop()
      }
    }, 1000)
  }

  // Tear the interval down with the surrounding component/effect scope, so a
  // countdown that is still running at unmount does not keep a timer (and the
  // closure around it) alive for the rest of the session.
  if (getCurrentScope()) {
    onScopeDispose(stop)
  }

  return { countdown, stop }
}

/**
 * Create a countdown from a simple timeout value
 * @param timeout
 * @param callback
 * @returns
 */
export const createCountdown = (
  timeout?: number | Ref<number | undefined>,
  callback?: (val: number) => void
) => {
  return createStoppableCountdown(timeout, callback).countdown
}

const isThenable = (value: unknown): value is PromiseLike<MiddlewareResult> =>
  !!value && typeof (value as PromiseLike<MiddlewareResult>).then === 'function'

/**
 * Runs all the defined middlewares for the application, in order.
 *
 * Each middleware follows vue-router's own navigation guard contract, so it may
 * either call `next(...)` or return the equivalent value — and it may do either
 * one asynchronously:
 *
 * - `next()` / returning `undefined` — allow, continue to the next middleware
 * - `next(false)` / returning `false` — abort the navigation
 * - `next(location)` / returning a location — redirect, skipping the remaining
 *   middlewares
 * - `next(error)` / returning or throwing an `Error` — abort and forward to
 *   `router.onError`
 *
 * vue-router's `next` is guaranteed to be invoked exactly once, no matter how
 * many times (or how late) a middleware calls its own `next`.
 *
 * @param middlewares
 * @param to
 * @param from
 * @param next
 * @param router
 * @param context
 */
export function runMiddlewares<U = AuthUser>(
  middlewares: AuthOptions<U>['middlewares'],
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router,
  context: MiddlewareContext<U>
) {
  if (!middlewares || middlewares.length === 0) {
    next()
    return
  }

  // The chain resolves to vue-router exactly once. Anything that arrives after
  // that — a late `next()` from an async middleware that already redirected, a
  // middleware calling `next()` twice — is dropped rather than handed to
  // vue-router, which would treat it as a duplicate guard resolution.
  let settled = false

  const finish = (result?: MiddlewareResult) => {
    if (settled) {
      return
    }
    settled = true
    next(result as never)
  }

  const executeMiddleware = (index: number) => {
    if (settled) {
      return
    }

    if (index >= middlewares.length) {
      finish()
      return
    }

    const middleware = middlewares[index]

    if (!middleware) {
      executeMiddleware(index + 1)
      return
    }

    let called = false

    const wrappedNext = (result?: MiddlewareResult) => {
      if (called) {
        return
      }
      called = true

      // `undefined` and `true` mean "carry on". Everything else — including
      // `false`, which is falsy but means *abort* — is a directive for
      // vue-router and has to be forwarded verbatim.
      if (result === undefined || result === true) {
        executeMiddleware(index + 1)
      } else {
        finish(result)
      }
    }

    try {
      const result = middleware(to, from, wrappedNext as NavigationGuardNext, context, router)

      if (isThenable(result)) {
        // Async middleware: its `next()` (or its resolved value) lands on a later
        // tick, so the outcome can only be settled once the promise does.
        Promise.resolve(result).then(
          (value) => {
            if (!called) {
              wrappedNext(value)
            }
          },
          (error) => finish(error instanceof Error ? error : new Error(String(error)))
        )
      } else if (!called) {
        // Sync return-style guard, e.g. `(to) => to.meta.requiresAuth && '/login'`.
        wrappedNext(result)
      }
    } catch (error) {
      finish(error instanceof Error ? error : new Error(String(error)))
    }
  }

  executeMiddleware(0)
}

/**
 * Initialize Pinia
 *
 * Will check if Pinia is already installed, if it is not, it
 * will install it.
 *
 * @param app
 * @param storageOptions
 */
export const initPinia = (app: App, storageOptions?: StorageOptions) => {
  let hasPinia = false

  try {
    const pinia = getActivePinia()
    if (pinia) {
      hasPinia = true
    }
  } catch {
    hasPinia = false
  }

  // TODO: Document the options.storageOptions.skipInit option
  // Install Pinia if not already installed
  if (!hasPinia || storageOptions?.skipInit) {
    const pinia = createPinia()

    // TODO: Document the plugins option
    // Install pinia options.storageOptions.plugins if any is provided
    if (storageOptions?.plugins) {
      for (let i = 0; i < storageOptions.plugins.length; i++) {
        const plugin = storageOptions.plugins[i]!
        pinia.use(plugin)
      }
    }

    app.use(pinia)
  }
}
