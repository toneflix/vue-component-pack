import { AuthOptions, AuthUser, LoginCredentials, RegisterCredentials } from '../types'

import { Ref } from 'vue'
import { createAuthStore } from '../stores/auth'
import { getAuthConfig } from '../config'
import { storeToRefs } from 'pinia'

export const useAuth = <AU = AuthUser> () => {
  const useAuthStore = createAuthStore()
  const store = useAuthStore()

  /**
   * Attempt to do a login
   *
   * @param credentials
   * @param options
   * @returns
   */
  const login = <U = AuthUser, T = LoginCredentials> (
    credentials: T,
    options: AuthOptions = getAuthConfig()
  ): Promise<{
    user: AuthUser | U;
    token?: string;
    error?: undefined;
    message?: string;
  }> => {
    return store.login<U, T>(credentials, options)
  }

  /**
   * Attempt to create a new user account
   *
   * @param credentials
   * @param options
   * @returns
   */
  const register = <U = AuthUser, T = RegisterCredentials> (
    credentials: T,
    options: AuthOptions = getAuthConfig()
  ): Promise<{
    user: AuthUser | U;
    token?: string;
    error?: undefined;
    message?: string;
  }> => {
    return store.register<U, T>(credentials, options)
  }

  /**
   * Attempt to log the user out
   *
   * @param options
   * @param credentials
   * @returns
   */
  const logout = <T = unknown> (options: AuthOptions = getAuthConfig(), credentials?: T): Promise<{
    error?: undefined;
    message?: string;
  } | undefined> => {
    return store.logout(options, credentials)
  }

  /**
   * Request for a password reset token
   *
   * @param options
   * @param credentials
   * @returns
   */
  const forgot = <T = unknown> (credentials?: T, options: AuthOptions = getAuthConfig()): Promise<{
    countdown: Ref<number>;
    timeout?: number;
    error?: undefined;
    message?: string;
  }> => {
    return store.forgot(credentials, options)
  }

  /**
   * Attempt to reset the user's password
   *
   * @param options
   * @param credentials
   * @returns
   */
  const reset = <T = unknown> (credentials?: T, options: AuthOptions = getAuthConfig()): Promise<{
    user: AuthUser;
    error?: undefined;
    message?: string;
  }> => {
    return store.reset(credentials, options)
  }

  /**
   * Get the token from storage and populate the store
   * If the token is available, also get the user from the API
   *
   * @param options
   * @param credentials
   * @returns
   */
  const loadUserFromStorage = <U = AuthUser, T = unknown> (
    options: AuthOptions = getAuthConfig(),
    credentials?: T
  ): Promise<{
    user: AuthUser | U;
    error?: undefined;
    message?: string;
  }> => {
    return store.loadUserFromStorage<U, T>(options, credentials)
  }


  return {
    user: storeToRefs(store).user as Ref<AU>,
    isAuthenticated: storeToRefs(store).isAuthenticated,

    reset,
    login,
    logout,
    forgot,
    register,
    loadUserFromStorage
  }
}
