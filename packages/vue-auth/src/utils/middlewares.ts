/**
 * This file contains basic reuseable middleware that I find
 * usefull for myself, they may be usefull to you too
 *
 * © copyright 2024 3m1n3nc3
 */

import { RouteLocationNormalizedGeneric, RouteLocationRaw, Router } from 'vue-router'

import { Middleware } from '../types'

const sameObj = (obj1: unknown, obj2: unknown) => JSON.stringify(obj1) === JSON.stringify(obj2)

const isCurrent = (
  to: RouteLocationNormalizedGeneric,
  redirectRoute: RouteLocationRaw,
  router?: Router
) => {
  try {
    const route = router ? router.resolve(redirectRoute) : redirectRoute

    return typeof route === 'string'
      ? to.path === route
      : to.path === route.path && sameObj(to.query, route.query)
  } catch {
    return false
  }
}

/**
 * Simple middleware that checkes if the user is authenticated
 *
 * Checks if the target route requires authentication
 *
 * Redirects user to specified route if user is not authenticated.
 *
 * @param redirectRoute If the user fails the check, they will be redirected here.
 * @returns
 */
export const authMiddleware = <U = unknown> (redirectRoute: RouteLocationRaw): Middleware<U> => {
  return (to, _, next, state, router) => {
    if (!state.isAuthenticated && !isCurrent(to, redirectRoute, router) && to.meta.requiresAuth) {
      return next(redirectRoute)
    }

    next()
  }
}

/**
 * Simple middleware that checkes if the user is a guest
 *
 * Checks if the target route is a guest only route
 *
 * Redirects user to specified route if user is not guest.
 *
 * Requires guest routes to have the `meta.requiresGuest` property
 *
 * @param redirectRoute If the user is not a guest, they will be redirected here.
 * @returns
 */
export const guestMiddleware = <U = unknown> (redirectRoute: RouteLocationRaw): Middleware<U> => {
  return (to, _, next, state, router) => {
    if (state.isAuthenticated && !isCurrent(to, redirectRoute, router) && to.meta.requiresGuest) {
      return next(redirectRoute)
    }

    next()
  }
}

/**
 * Simple middleware that checkes if the user has any or all of the specified roles
 *
 * Redirects user to specified route if user fails role check.
 *
 * @param redirectRoute If the user fails the check, they will be redirected here.
 * @param roles The roles required to pass this check
 * @param roleKey The key in the user object the holds the user's current role
 * @param metaKey The meta key on the target route to check if it's constrained to the rules
 * @returns
 */
export const roleMiddleware = <U = unknown> (
  redirectRoute: RouteLocationRaw,
  roles: string | string[],
  roleKey: keyof U = 'roles' as keyof U,
  metaKey: string = 'requiresAdmin'
): Middleware<U> => {
  return (to, from, next, context, router) => {
    if (!context.user[roleKey]) {
      return next()
    }

    const userRoles = Array.isArray(context.user[roleKey])
      ? context.user[roleKey]
      : [String(context.user[roleKey])]
    const reqRoles = typeof roles === 'string' ? [roles] : roles
    const hasRoles = userRoles.some((e) => reqRoles.includes(e))

    if (!hasRoles && !isCurrent(to, redirectRoute, router) && to.meta[metaKey]) {
      return next(redirectRoute)
    }

    next()
  }
}
