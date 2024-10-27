import { AuthOptions, AuthUser } from './types'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let authConfig: AuthOptions<any>

export const url = (endpoint?: keyof typeof authConfig.endpoints) => {
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
