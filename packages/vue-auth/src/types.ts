import 'pinia'

import { AxiosHeaders, RawAxiosRequestHeaders } from 'axios'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'

export interface AuthUser {
  id: number
  email: string
  token?: string
  roles?: string
}

export interface AuthResponse<U = AuthUser> {
  user: U
  token: string
  message?: string
}

export interface DefinitelyAuthResponse<U = AuthUser> {
  user: U
  error?: BaseError
  token?: string | undefined
  message?: string | undefined
}

export interface BaseError extends Error {
  status?: string
  errors?: Record<string, string | string[]>
  [key: string]: unknown
}

export interface ResponseError {
  response: {
    data: BaseError
    [key: string]: unknown
  }
}

export interface Middleware<U = unknown & AuthUser> {
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
    context: { user: U; token?: string | undefined; isAuthenticated: boolean },
    router?: Router
  ): void
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  [key: string]: unknown
}

export interface AuthEndpoints {
  /**
   * Login requests will be sent to this endpoint
   */
  login: string
  /**
   * Logout requests will be sent to this endpoint
   */
  logout: string
  /**
   * Profile requests will be sent to this endpoint
   */
  profile?: string
  /**
   * Registration requests will be sent to this endpoint
   */
  register: string
  /**
   * When a user request a password token, we will send a request to this endpoint to send the token
   */
  forgot?: string
  /**
   * When a user is reseting thier password, we will send a request to this endpoint to complete the request
   */
  reset?: string
  /**
   * Refresh Token requests will be sent to this endpoint
   */
  refreshToken?: string
}

interface CustomHeaders {
  [key: string]: string
}

/**
 * Extra options to be passed into the auth store instance
 * Usefull if you need to pass {persist: true} when using pinia-plugin-persists
 */
export interface StorageOptions {
  /**
   * Options for pinia-plugin-persists
   */
  persist?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type CustomAxiosHeaders = (RawAxiosRequestHeaders | AxiosHeaders) & CustomHeaders

export interface AuthOptions<U = AuthUser> {
  /**
   * Provide your router instance
   */
  router?: Router
  /**
   * The base url for all authentication requests
   */
  baseUrl: string
  /**
   * Authentication endpoint map
   */
  endpoints: AuthEndpoints
  /**
   * The key with which your authentication token will be saved to local storage
   */
  storageKey?: string
  /**
   * Extra options to be passed into the auth store instance
   * Usefull if you need to pass {persist: true} when using pinia-plugin-persists
   */
  storageOptions?: StorageOptions
  /**
   * Extra config to pass to the axios instance
   */
  axiosConfig?: object
  /**
   * The route name to your app's login page, if provided none authenticated users will be redirected here
   *  when they try to access a protected route
   */
  loginRouteName?: string
  /**
   * Headers that will be sent along requests for authenticated users, used by logout and profile endpoints
   * @deprecated 1.3.8 Will be removed in the future, use `setAuthHeaders()` instead
   * @returns
   */
  getAuthHeaders?: (context: {
    user: U
    token?: string | undefined
  }) => Promise<CustomAxiosHeaders> | CustomAxiosHeaders
  /**
   * Headers that will be sent along requests for authenticated users, used by logout and profile endpoints
   * @returns
   */
  setAuthHeaders?: (context: {
    user: U
    token?: string | undefined
  }) => Promise<CustomAxiosHeaders> | CustomAxiosHeaders
  /**
   * Transforms the user object returned from the auth endpoint
   * @param response
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformResponse?: (response: any) => {
    user: U
    token?: string | undefined
    timeout?: number | undefined
    message?: string | undefined
  }
  /**
   * The route name to your app's post login page, if provided users will be redirected here
   *  as soon as they do a successfull login attempt.
   */
  defaultAuthRouteName?: string
  /**
   * Middleware functions to control route access based on user state.
   *
   * @param response
   * @returns
   */
  middlewares?: Array<Middleware<U>>
}
