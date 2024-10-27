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
  const route = router ? router.resolve(redirectRoute) : redirectRoute

  return typeof route === 'string'
    ? to.path === route
    : to.path === route.path && sameObj(to.query, route.query)
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
export const authMiddleware = (redirectRoute: RouteLocationRaw): Middleware => {
  return (to, from, next, state, router) => {
    if (!state.isAuthenticated && !isCurrent(to, redirectRoute, router) && to.meta.requiresAuth) {
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
 * @param roles
 * @param roleKey
 * @returns
 */
export const roleMiddleware = (
  redirectRoute: RouteLocationRaw,
  roles: string | string[],
  roleKey: string = 'roles',
  metaKey: string = 'requiresAdmin'
): Middleware => {
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
