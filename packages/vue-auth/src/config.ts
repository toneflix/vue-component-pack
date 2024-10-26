import { AuthOptions, AuthUser } from './types'
import { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedGeneric } from 'vue-router'
// src/config.ts
import { Ref, ref, toValue } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let authConfig: AuthOptions<any>

export const url = (endpoint?: string) => {
  if (!endpoint || !authConfig.endpoints[endpoint]) {
    throw new Error(`You have not defined a ${endpoint} endpoint.`)
  }

  const path = authConfig.endpoints[endpoint]

  if (authConfig && path) {
    return (authConfig.baseUrl + path).replace(/([^:]\/)\/+/g, '$1')
  }

  return ''
}

export const setAuthConfig = <U = AuthUser> (options: AuthOptions<U>) => {
  authConfig = options
}

export const getAuthConfig = <U = AuthUser> (): AuthOptions<U> => {
  if (!authConfig) {
    throw new Error('Auth plugin not initialized properly.')
  }
  return authConfig
}

export const createCountdown = (
  timeout?: number | Ref<number | undefined>,
  callback?: (val: number) => void
) => {
  const countdown = ref<number>(0)
  const timeoutValue = toValue(timeout)

  if (timeoutValue && timeoutValue > 0) {
    countdown.value = timeoutValue
    const intval = setInterval(() => {
      countdown.value -= 1000
      if (callback) {
        callback(countdown.value)
      }
      if (countdown.value <= 0) {
        clearInterval(intval)
      }
    }, 1000)
  }

  return countdown
}

/**
 * Runs all the define middlewares for the application
 * 
 * @param middlewares 
 * @param to 
 * @param from 
 * @param next 
 * @param context 
 */
export function runMiddlewares<U = AuthUser> (
  middlewares: AuthOptions['routeMiddlewares'],
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  context: { user: U, token?: string, isAuthenticated: boolean },
) {
  // Flag to track if next() has been called
  const nextCalled = ref(false);

  const executeMiddleware = (index: number) => {
    if (!middlewares) {
      return;
    }

    if (index < middlewares.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const callNext: any = (nextArg: RouteLocationNormalized) => {
        // Mark as true as next() has been called
        nextCalled.value = index + 1 === middlewares.length;

        if (nextArg) {
          // If a middleware calls next with an argument (e.g., redirect), stop the chain.
          return next(nextArg);
        }
        // Otherwise, continue to the next middleware.
        executeMiddleware(index + 1);
      }

      middlewares[index](to, from, callNext, context);
    } else {
      // If we've reached the end of the middlewares, call the final next() to proceed with navigation.
      next();
    }

    if (!nextCalled.value) {
      throw new Error("next() was not called on some middleware. You must call next() on every middleware you define.");
    }
  };

  // Start running middlewares from the first one in the array.
  executeMiddleware(0);
}
