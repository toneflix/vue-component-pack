/**
 * This file contains basic reuseable middleware that I find
 * usefull for myself, they may be usefull to you too
 *
 * © copyright 2024 3m1n3nc3
 */

import { AuthUser, Middleware } from '../types'

import { RouteLocationRaw } from 'vue-router'

const sameObj = (obj1: unknown, obj2: unknown) => JSON.stringify(obj1) === JSON.stringify(obj2);

/**
 * Simple middleware that checkes if the user is authenticated
 * 
 * Checks if the target route requires authentication
 * 
 * Redirects user to specified route if user is not authenticated.
 *
 * @param redirectRoute
 * @returns
 */
export const authMiddleware = (redirectRoute: RouteLocationRaw): Middleware => {
    return (to, from, next, state, router) => {
        const route = router ? router.resolve(redirectRoute) : redirectRoute

        const isCurrent =
            typeof route === 'string'
                ? to.path === route
                : to.path === route.path && sameObj(to.query, route.query)

        if (!state.isAuthenticated && !isCurrent && to.meta.requiresAuth) {
            return next(redirectRoute)
        }

        next()
    }
}
