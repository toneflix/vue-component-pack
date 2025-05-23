import {
  AuthOptions,
  AuthResponse,
  AuthUser,
  BaseError,
  DefinitelyAuthResponse,
  LoginCredentials,
  RegisterCredentials,
  ResponseError,
  StorageOptions
} from '../types'
import { Ref, ref, computed, toValue } from 'vue'
import { getAuthConfig, buildHeaders, url } from '../utils/config'

import axios from 'axios'
import { defineStore } from 'pinia'
import { createCountdown } from '../utils/plugins'

axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export function createVueAuthStore<UA = unknown>(options?: StorageOptions) {
  const storageOptions = Object.fromEntries(
    Object.entries(options ?? {}).filter(([key]) => !['plugins', 'skipInit'].includes(key))
  )

  return defineStore(
    'vue-auth',
    () => {
      const user = ref<UA>({} as UA)
      const token = ref<string>()
      const sessionExpired = ref<boolean>(false)
      const isAuthenticated = computed(() => !!token.value)

      /**
       * Attempt to do a login
       *
       * @param credentials
       * @param options
       * @returns
       */
      const login = async <U = UA, T = LoginCredentials>(
        credentials: T,
        options: AuthOptions<U> = getAuthConfig()
      ): Promise<DefinitelyAuthResponse<U>> => {
        const endpoint = url('login')
        try {
          const { data } = await axios.post<AuthResponse<U>>(
            endpoint,
            toValue(credentials),
            options.axiosConfig
          )

          const {
            user: usr,
            token: tkn,
            message,
            ...rest
          } = options.transformResponse
            ? options.transformResponse(data)
            : { user: data.user, token: data.token, message: data.message }

          user.value = usr
          token.value = tkn
          globalThis.localStorage.setItem(options.storageKey ?? 'auth_token', data.token)

          return { ...rest, user: usr, token: tkn, message }
        } catch (error) {
          const { response } = <ResponseError>error
          return {
            user: {} as U,
            error: response?.data ?? error ?? {},
            message: response?.data?.message
          }
        }
      }

      /**
       * Attempt to create a new user account
       *
       * @param credentials
       * @param options
       * @returns
       */
      const register = async <U = UA, T = RegisterCredentials>(
        credentials: T,
        options: AuthOptions<U> = getAuthConfig()
      ): Promise<DefinitelyAuthResponse<U>> => {
        const endpoint = url('register')
        try {
          const { data } = await axios.post<AuthResponse<U>>(
            endpoint,
            toValue(credentials),
            options.axiosConfig
          )

          const {
            user: usr,
            token: tkn,
            message,
            ...rest
          } = options.transformResponse
            ? options.transformResponse(data)
            : { user: data.user, token: data.token, message: data.message }

          user.value = usr
          token.value = tkn
          globalThis.localStorage.setItem(options.storageKey ?? 'auth_token', data.token)

          return { ...rest, user: usr, token: tkn, message }
        } catch (error) {
          const { response } = <ResponseError>error
          return {
            user: {} as U,
            error: response?.data ?? error ?? {},
            message: response?.data?.message
          }
        }
      }

      /**
       * Attempt to log the user out
       *
       * @param options
       * @param credentials
       * @returns
       */
      const logout = async <T = unknown>(
        options: AuthOptions = getAuthConfig(),
        credentials?: T
      ): Promise<
        | {
            error?: BaseError
            message?: string
          }
        | undefined
      > => {
        const headers = await buildHeaders(options, user.value, token.value)

        const endpoint = url('logout')
        try {
          await axios.post(endpoint, toValue(credentials), {
            headers: { ...headers },
            ...options.axiosConfig
          })

          clearAuth(options)
        } catch (error) {
          const { response } = <ResponseError>error
          return { error: response?.data ?? error ?? {}, message: response?.data?.message }
        }
      }

      /**
       * Clear the current authentication without making any server request.
       *
       * @param options
       * @returns
       */
      const clearAuth = <U>(options: AuthOptions<U> = getAuthConfig()): void => {
        user.value = {} as AuthUser
        token.value = undefined
        globalThis.localStorage.removeItem(options.storageKey ?? 'auth_token')
      }

      /**
       * Reset the current auth session
       *
       * Will call `clearAuth` and set `sessionExpired` to true
       *
       * @param options
       * @returns
       */
      const resetSession = <U>(options: AuthOptions<U> = getAuthConfig()): void => {
        sessionExpired.value = true
        clearAuth(options)
      }

      type ForgotResponse = { timeout?: number; message?: string }

      /**
       * Request for a password reset token
       *
       * @param options
       * @param credentials
       * @returns
       */
      const forgot = async <T = unknown, M extends ForgotResponse = ForgotResponse>(
        credentials?: T,
        options: AuthOptions = getAuthConfig()
      ): Promise<{
        countdown: Ref<number>
        timeout?: number | undefined
        error?: BaseError | undefined
        message?: string | undefined
      }> => {
        const headers = await buildHeaders(options, user.value, token.value)

        const endpoint = url('forgot')
        try {
          const { data } = await axios.post<M>(endpoint, toValue(credentials), {
            headers: { ...headers },
            ...options.axiosConfig
          })

          const { timeout, message } = options.transformResponse
            ? options.transformResponse(data)
            : { timeout: data.timeout, message: data.message }

          const countdown = createCountdown(timeout)

          return { timeout, countdown, message }
        } catch (error) {
          const { response } = <ResponseError>error
          return {
            error: response?.data ?? error ?? {},
            countdown: ref(0),
            message: response?.data?.message
          }
        }
      }

      /**
       * Attempt to reset the user's password
       *
       * @param credentials
       * @param options
       * @returns
       */
      const reset = async <U = UA, T = unknown>(
        credentials: T,
        options: AuthOptions<U> = getAuthConfig()
      ): Promise<{
        user: U
        error?: BaseError | undefined
        message?: string | undefined
      }> => {
        const endpoint = url('reset')
        try {
          const { data } = await axios.post<AuthResponse<U>>(
            endpoint,
            toValue(credentials),
            options.axiosConfig
          )

          const { user, message } = options.transformResponse
            ? options.transformResponse(data)
            : { user: data.user, message: data.message }

          return { user, message }
        } catch (error) {
          const { response } = <ResponseError>error
          return {
            user: {} as U,
            error: response?.data ?? error ?? {},
            message: response?.data?.message
          }
        }
      }

      /**
       * Get the token from storage and populate the store
       * If the token is available, also get the user from the API
       *
       * @param options
       * @param credentials
       * @returns
       */
      const loadUserFromStorage = async <U = UA, T = unknown>(
        options: AuthOptions<U> = getAuthConfig(),
        credentials?: T,
        auto?: boolean
      ): Promise<{
        user: U
        error?: BaseError | undefined
        message?: string | undefined
      }> => {
        const tkn =
          globalThis.localStorage.getItem(options.storageKey ?? 'auth_token') ?? token.value

        const headers = await buildHeaders(
          options as unknown as AuthOptions,
          user.value,
          token.value
        )

        if (tkn && options.endpoints.profile) {
          token.value = tkn

          if (!auto || !options.disableAutoRefresh) {
            const endpoint = url('profile')
            try {
              const { data } = await axios.get<AuthResponse<U>>(endpoint, {
                headers: { ...headers },
                params: { ...toValue(credentials) },
                ...options.axiosConfig
              })

              const { user: usr, message } = options.transformResponse
                ? options.transformResponse(data)
                : { user: data.user, message: data.message }

              user.value = usr

              return { user: usr, message }
            } catch (error) {
              const { response, status } = <ResponseError>error
              if (status === 401) {
                sessionExpired.value = true
                clearAuth(options)
              }

              return {
                user: {} as U,
                error: response?.data ?? error ?? {},
                message: response?.data?.message
              }
            }
          }
        }

        if (Object.entries(user.value).length > 0) {
          return { user: user.value }
        }

        return { user: {} as U }
      }

      return {
        user,
        token,
        sessionExpired,
        isAuthenticated,

        login,
        reset,
        logout,
        forgot,
        register,
        clearAuth,
        resetSession,
        loadUserFromStorage
      }
    },
    storageOptions as never
  )
}

// export const useAuthStore = createVueAuthStore()
export const useAuthStore = (storageOptions?: StorageOptions) => {
  const authStore = createVueAuthStore(storageOptions)
  return authStore()
}
