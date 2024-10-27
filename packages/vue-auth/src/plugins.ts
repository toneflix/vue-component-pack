import { AuthOptions, AuthUser, BaseError } from "./types"
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { Ref, ref, toValue } from "vue"

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
 * @param errors 
 * @returns 
 */
export const reshapeError = (errors: BaseError['errors']) => {
    return Object.fromEntries(
        Object.entries(errors || {}).map(([key, value]) => [
            key,
            value[0],
        ]),
    )
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
    middlewares: AuthOptions<U>['middlewares'],
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
    context: { user: U; token?: string; isAuthenticated: boolean }
) {
    const executeMiddleware = (index: number) => {
        if (!middlewares || index >= middlewares.length) {
            next()
            return
        }

        const middleware = middlewares[index]
        let nextCalled = false

        const wrappedNext = (nextArg?: unknown) => {
            nextCalled = true
            if (nextArg) {
                next(nextArg)
            } else {
                executeMiddleware(index + 1)
            }
        }

        // Invoke the middleware function with wrapped next
        middleware(to, from, wrappedNext, context)

        if (!nextCalled) {
            throw new Error(
                `Middleware at index ${index} did not call next(). All middlewares must call next() to proceed.`
            )
        }
    }

    executeMiddleware(0)
}
