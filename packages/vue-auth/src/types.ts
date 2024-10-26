import { AxiosHeaders, RawAxiosRequestHeaders } from 'axios'
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'

export interface AuthUser {
  id: string
  email: string
  token: string
}

export interface AuthResponse<U = AuthUser> {
  user: U
  token: string
  message?: string
}

export interface DefinitelyAuthResponse<U = AuthUser> {
  user: U
  error?: BaseError
  token?: string
  message?: string
}

export interface BaseError extends Error {
  status?: string
  errors?: Record<string, string | string[]>
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
   * Extra config to pass to the axios instance
   */
  axiosConfig?: object
  /**
   * The route name to your app's login page, if provided none authenticated users will be redirected here
   *  when they try to access a protected route
   */
  loginRouteName?: string
  /**
   *  Headers that will be sent along requests for authenticated users, used by logout and profile endpoints
   * @returns
   */
  getAuthHeaders?: () => Promise<CustomAxiosHeaders> | CustomAxiosHeaders
  /**
   * Transforms the user object returned from the auth endpoint
   * @param response
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformResponse?: (response: any) => {
    user: U
    token?: string
    timeout?: number
    message?: string
  }
  /**
   * The route name to your app's post login page, if provided users will be redirected here
   *  as soon as they do a successfull login attempt.
   */
  defaultAuthRouteName?: string;
  /**
   * Middleware functions to control route access based on user state.
   * 
   * @param response 
   * @returns 
   */
  middlewares?: Array<(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
    context: { user: U; token?: string; isAuthenticated: boolean },
  ) => void>;
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
