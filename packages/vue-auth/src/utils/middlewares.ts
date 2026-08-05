/**
 * This file contains basic reuseable middleware that I find
 * usefull for myself, they may be usefull to you too
 *
 * © copyright 2024 3m1n3nc3
 */

import { RouteLocationNormalizedGeneric, RouteLocationRaw, Router } from 'vue-router'

import { Middleware } from '../types'

type QueryLike = Record<string, unknown> | undefined

/**
 * Compare two route queries by content rather than by serialization.
 *
 * `JSON.stringify` is key-order sensitive, so `?a=1&b=2` and `?b=2&a=1` — the
 * same query as far as the router is concerned — used to compare as different.
 */
const sameQuery = (a: QueryLike, b: QueryLike) => {
  const keysA = Object.keys(a ?? {})
  const keysB = Object.keys(b ?? {})

  if (keysA.length !== keysB.length) {
    return false
  }

  return keysA.every((key) => {
    const valueA = a?.[key]
    const valueB = b?.[key]

    if (Array.isArray(valueA) || Array.isArray(valueB)) {
      const arrayA = Array.isArray(valueA) ? valueA : [valueA]
      const arrayB = Array.isArray(valueB) ? valueB : [valueB]

      return (
        arrayA.length === arrayB.length &&
        arrayA.every((item, i) => String(item) === String(arrayB[i]))
      )
    }

    return String(valueA) === String(valueB)
  })
}

export const isCurrent = (
  to: RouteLocationNormalizedGeneric,
  currentRoute: RouteLocationRaw,
  router?: Router
): boolean => {
  try {
    const route = router ? router.resolve(currentRoute) : currentRoute
    if (!route) {
      return false
    }

    return typeof route === 'string'
      ? to.path === route
      : to.path === route.path && sameQuery(to.query, route.query)
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
export const authMiddleware = <U = unknown>(redirectRoute: RouteLocationRaw): Middleware<U> => {
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
export const guestMiddleware = <U = unknown>(redirectRoute: RouteLocationRaw): Middleware<U> => {
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
 * A user carrying no roles at all fails the check: on a route gated by
 * `metaKey`, having nothing is not the same as having permission.
 *
 * @param redirectRoute If the user fails the check, they will be redirected here.
 * @param roles The roles required to pass this check
 * @param roleKey The key in the user object the holds the user's current role
 * @param metaKey The meta key on the target route to check if it's constrained to the rules
 * @returns
 */
export const roleMiddleware = <U = unknown>(
  redirectRoute: RouteLocationRaw,
  roles: string | string[],
  roleKey: keyof U = 'roles' as keyof U,
  metaKey: string = 'requiresAdmin'
): Middleware<U> => {
  return (to, _, next, context, router) => {
    // Not a gated route — nothing to enforce.
    if (!to.meta[metaKey]) {
      return next()
    }

    const rawRoles = context.user?.[roleKey]

    // Accept an array, a single role, or a delimited string ("admin, editor"),
    // which previously compared as one unsplittable role and never matched.
    const userRoles = Array.isArray(rawRoles)
      ? rawRoles.map((role) => String(role).trim())
      : String(rawRoles ?? '')
          .split(',')
          .map((role) => role.trim())
          .filter(Boolean)

    const reqRoles = typeof roles === 'string' ? [roles] : roles
    const hasRoles = userRoles.some((e) => reqRoles.includes(e))

    if (!hasRoles && !isCurrent(to, redirectRoute, router)) {
      return next(redirectRoute)
    }

    next()
  }
}
