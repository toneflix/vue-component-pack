import {
  AuthOptions,
  AuthResponse,
  AuthUser,
  LoginCredentials,
  RegisterCredentials
} from '../types'
import { Ref, ref, toValue } from 'vue'
import { getAuthConfig, url } from '../config'

import axios from 'axios'
import { defineStore } from 'pinia'

axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export function createAuthStore<U = unknown>() {
  return defineStore('vue-auth', () => {
    const user = ref<U>({} as U)
    const token = ref<string>()
    const isAuthenticated = ref(false)

    /**
     * Attempt to do a login
     *
     * @param credentials
     * @param options
     * @returns
     */
    const login = async <U = AuthUser, T = LoginCredentials>(
      credentials: T,
      options: AuthOptions = getAuthConfig()
    ): Promise<{
      user: AuthUser | U
      token?: string
      error?: undefined
      message?: string
    }> => {
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
          message
        } = options.transformResponse
          ? options.transformResponse(data)
          : { user: data.user, token: data.token, message: data.message }

        user.value = usr
        token.value = tkn
        isAuthenticated.value = true
        localStorage.setItem(options.storageKey || 'auth_token', data.token)

        return { user: usr, token: tkn, message }
      } catch ({ response }) {
        return { user: {} as U, error: response?.data || {}, message: response?.data?.message }
      }
    }

    /**
     * Attempt to create a new user account
     *
     * @param credentials
     * @param options
     * @returns
     */
    const register = async <U = AuthUser, T = RegisterCredentials>(
      credentials: T,
      options: AuthOptions = getAuthConfig()
    ): Promise<{
      user: AuthUser | U
      token?: string
      error?: undefined
      message?: string
    }> => {
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
          message
        } = options.transformResponse
          ? options.transformResponse(data)
          : { user: data.user, token: data.token, message: data.message }

        user.value = usr
        token.value = tkn
        isAuthenticated.value = true
        localStorage.setItem(options.storageKey || 'auth_token', data.token)

        return { user: usr, token: tkn, message }
      } catch ({ response }) {
        return { user: {} as U, error: response?.data || {}, message: response?.data?.message }
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
          error?: undefined
          message?: string
        }
      | undefined
    > => {
      const headers = options.getAuthHeaders ? await options.getAuthHeaders() : {}

      const endpoint = url('logout')
      try {
        await axios.post(endpoint, toValue(credentials), {
          headers: { ...headers },
          ...options.axiosConfig
        })

        user.value = {} as AuthUser
        token.value = undefined
        isAuthenticated.value = false
        localStorage.removeItem(options.storageKey || 'auth_token')
      } catch ({ response }) {
        return { error: response?.data || {}, message: response?.data?.message }
      }
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
      timeout?: number
      error?: undefined
      message?: string
    }> => {
      const headers = options.getAuthHeaders ? await options.getAuthHeaders() : {}

      const endpoint = url('forgot')
      try {
        const { data } = await axios.post<M>(endpoint, toValue(credentials), {
          headers: { ...headers },
          ...options.axiosConfig
        })

        const { timeout, message } = options.transformResponse
          ? options.transformResponse(data)
          : { timeout: data.timeout, message: data.message }

        const countdown = ref<number>(0)

        if (timeout && timeout > 0) {
          countdown.value = timeout
          const intval = setInterval(() => {
            countdown.value -= 1000
            if (countdown.value <= 0) {
              clearInterval(intval)
            }
          }, 1000)
        }

        return { timeout, countdown, message }
      } catch ({ response }) {
        return { error: response?.data || {}, countdown: ref(0), message: response?.data?.message }
      }
    }

    /**
     * Attempt to reset the user's password
     *
     * @param credentials
     * @param options
     * @returns
     */
    const reset = async <U = AuthUser, T = RegisterCredentials>(
      credentials: T,
      options: AuthOptions = getAuthConfig()
    ): Promise<{
      user: AuthUser | U
      error?: undefined
      message?: string
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
      } catch ({ response }) {
        return { user: {} as U, error: response?.data || {}, message: response?.data?.message }
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
    const loadUserFromStorage = async <U = AuthUser, T = unknown>(
      options: AuthOptions = getAuthConfig(),
      credentials?: T
    ): Promise<{
      user: AuthUser | U
      error?: undefined
      message?: string
    }> => {
      const tkn = localStorage.getItem(options.storageKey || 'auth_token')
      const headers = options.getAuthHeaders ? await options.getAuthHeaders() : {}

      if (tkn) {
        token.value = tkn
        isAuthenticated.value = true

        if (options.endpoints.profile) {
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
          } catch ({ response }) {
            return { user: {} as U, error: response?.data || {}, message: response?.data?.message }
          }
        }
      }

      return { user: {} as U }
    }

    return {
      user,
      token,
      isAuthenticated,

      login,
      reset,
      logout,
      forgot,
      register,
      loadUserFromStorage
    }
  })
}

export const useAuthStore = createAuthStore()
