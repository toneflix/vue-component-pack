import {
  AuthOptions,
  AuthUser,
  BaseError,
  DefinitelyAuthResponse,
  LoginCredentials,
  RegisterCredentials,
  StorageOptions
} from '../types'

import { Ref } from 'vue'
import { createVueAuthStore } from '../stores/vue-auth'
import { getAuthConfig } from '../utils/config'
import { storeToRefs } from 'pinia'

export const useAuth = <AU = AuthUser>(storageOptions?: StorageOptions) => {
  const useAuthStore = createVueAuthStore(storageOptions)
  const store = useAuthStore()

  /**
   * Attempt to do a login
   *
   * @param credentials
   * @param options
   * @returns
   */
  const login = <U = AU, T = LoginCredentials>(
    credentials: T,
    options: AuthOptions<U> = getAuthConfig()
  ): Promise<DefinitelyAuthResponse<U>> => {
    return store.login<U, T>(credentials, options)
  }

  /**
   * Attempt to create a new user account
   *
   * @param credentials
   * @param options
   * @returns
   */
  const register = <U = AU, T = RegisterCredentials>(
    credentials: T,
    options: AuthOptions<U> = getAuthConfig()
  ): Promise<DefinitelyAuthResponse<U>> => {
    return store.register<U, T>(credentials, options)
  }

  /**
   * Attempt to log the user out
   *
   * @param options
   * @param credentials
   * @returns
   */
  const logout = <T = unknown>(
    options: AuthOptions = getAuthConfig(),
    credentials?: T
  ): Promise<
    | {
        error?: BaseError
        message?: string
      }
    | undefined
  > => {
    return store.logout(options, credentials)
  }

  /**
   * Clear the current authentication without making any server request.
   *
   * @param options
   * @returns
   */
  const clearAuth = (options: AuthOptions = getAuthConfig()): void => {
    return store.clearAuth(options)
  }

  /**
   * Reset the current auth session
   *
   * Will call `clearAuth` and set `sessionExpired` to true
   *
   * @param options
   * @returns
   */
  const resetSession = (options: AuthOptions = getAuthConfig()) => {
    return store.resetSession(options)
  }

  /**
   * Request for a password reset token
   *
   * @param options
   * @param credentials
   * @returns
   */
  const forgot = <T = unknown>(
    credentials?: T,
    options: AuthOptions = getAuthConfig()
  ): Promise<{
    countdown: Ref<number>
    timeout?: number | undefined
    error?: BaseError | undefined
    message?: string | undefined
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
  const reset = <U = AU, T = unknown>(
    credentials: T,
    options: AuthOptions<U> = getAuthConfig()
  ): Promise<{
    user: U
    error?: BaseError | undefined
    message?: string | undefined
  }> => {
    return store.reset<U>(credentials, options)
  }

  /**
   * Get the token from storage and populate the store
   * If the token is available, also get the user from the API
   *
   * @param options
   * @param credentials
   * @returns
   */
  const loadUserFromStorage = <U = AU, T = unknown>(
    options: AuthOptions<U> = getAuthConfig(),
    credentials?: T,
    auto?: boolean
  ): Promise<{
    user: U
    error?: BaseError | undefined
    message?: string | undefined
  }> => {
    return store.loadUserFromStorage<U, T>(options, credentials, auto)
  }

  const { user, token, sessionExpired, isAuthenticated } = storeToRefs(store)

  return {
    user: user as Ref<AU>,
    token,
    sessionExpired,
    isAuthenticated,

    reset,
    login,
    logout,
    forgot,
    register,
    clearAuth,
    resetSession,
    loadUserFromStorage
  }
}
