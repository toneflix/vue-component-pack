import {
  AuthOptions,
  AuthUser,
  BaseError,
  LoginCredentials,
  RegisterCredentials,
  StorageOptions
} from '../types'
import { Ref, UnwrapRef, ref } from 'vue'

import { createCountdown } from '../utils/plugins'
import { createVueAuthStore } from '../stores/vue-auth'
import { getAuthConfig } from '../utils/config'
import { storeToRefs } from 'pinia'

export const useInlineAuth = <AU = AuthUser>(storageOptions?: StorageOptions) => {
  const useAuthStore = createVueAuthStore(storageOptions)
  const store = useAuthStore()

  type UnrefData<X> = {
    [K in keyof X]: UnwrapRef<X[K]>
  }

  interface BaseData {
    [key: string | symbol]: any // eslint-disable-line
    error?: Ref<BaseError | undefined>
    loading: Ref<boolean>
    message: Ref<string | undefined>
  }

  interface UserData<U> extends BaseData {
    user: Ref<U | undefined>
  }

  interface AuthData<U = AU> extends UserData<U> {
    token: Ref<string | undefined>
  }

  interface ForgotData extends BaseData {
    countdown: Ref<number>
    timeout: Ref<number | undefined>
  }

  interface MethodActions<X> {
    send: () => Promise<X>
    onError: (callback: (error: BaseError) => void) => void
    onSuccess: (callback: (data: X) => void) => void
  }

  /**
   * Reusable helper for handling asynchronous actions with success and error callbacks.
   *
   * @param action
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useActionWithCallbacks = <R = any>(action: () => Promise<any>) => {
    const errorCallback = ref<(error: BaseError) => void>()
    const successCallback = ref<(data: R) => void>()

    // Method to set the success callback
    const onSuccess = (callback: (data: R) => void) => {
      successCallback.value = callback
    }

    // Method to set the error callback
    const onError = (callback: (error: BaseError) => void) => {
      errorCallback.value = callback
    }

    const send = async (): Promise<R> => {
      const data = await action()

      if (data.error && errorCallback.value) {
        // Call the error callback if there’s an error
        errorCallback.value(data.error)
      } else if (!data.error && successCallback.value) {
        // Call the success callback if set
        successCallback.value(data)
      }

      return data
    }

    return {
      send,
      onError,
      onSuccess
    }
  }

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
  ): AuthData<U> & MethodActions<UnrefData<AuthData<U>>> => {
    const user = ref<U>()
    const error = ref<BaseError>()
    const token = ref<string>()
    const loading = ref<boolean>(false)
    const message = ref<string>()

    const action = async (): Promise<UnrefData<AuthData<U>>> => {
      loading.value = true

      const data = await store.login<U, T>(credentials, options)
      user.value = data.user
      error.value = data.error
      token.value = data.token
      message.value = data.message
      loading.value = false

      const res: UnrefData<AuthData<U>> = {
        ...data,
        user: data.user,
        message: data.message,
        token: data.token,
        loading: false
      }

      if (data.error) {
        res.error = data.error
      }
      return res
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      token,
      error,
      loading,
      message,
      onError,
      onSuccess
    }
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
  ): AuthData<U> & MethodActions<UnrefData<AuthData<U>>> => {
    const user = ref<U>()
    const error = ref<BaseError>()
    const token = ref<string>()
    const loading = ref<boolean>(false)
    const message = ref<string>()

    const action = async (): Promise<UnrefData<AuthData<U>>> => {
      loading.value = true

      const data = await store.register<U, T>(credentials, options)
      user.value = data.user
      error.value = data.error
      token.value = data.token
      message.value = data.message
      loading.value = false

      return {
        ...data,
        user: data.user,
        error: data.error,
        token: data.token,
        message: data.message,
        loading: loading.value
      }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      token,
      error,
      loading,
      message,
      onError,
      onSuccess
    }
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
  ): BaseData & MethodActions<UnrefData<BaseData>> => {
    const error = ref<BaseError>()
    const loading = ref<boolean>(false)
    const message = ref<string>()

    const action = async (): Promise<UnrefData<BaseData>> => {
      loading.value = true

      const data = await store.logout(options, credentials)
      error.value = data?.error
      message.value = data?.message
      loading.value = false

      return { error: data?.error, message: data?.message, loading: loading.value }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      error,
      loading,
      message,
      onError,
      onSuccess
    }
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
  ): ForgotData & MethodActions<UnrefData<ForgotData>> => {
    const error = ref<BaseError>()
    const loading = ref<boolean>(false)
    const message = ref<string>()
    const timeout = ref<number>()
    const countdown = ref<number>(0)

    const action = async (): Promise<UnrefData<ForgotData>> => {
      loading.value = true

      const data = await store.forgot(credentials, options)
      error.value = data?.error
      message.value = data?.message
      timeout.value = data.timeout
      loading.value = false

      createCountdown(timeout, (val) => {
        countdown.value = val
      })

      return {
        error: data.error,
        loading: loading.value,
        message: data.message,
        timeout: data.timeout,
        countdown: countdown.value
      }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      error,
      loading,
      message,
      timeout,
      onError,
      onSuccess,
      countdown
    }
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
  ): UserData<U> & MethodActions<UnrefData<UserData<U>>> => {
    const user = ref<U>()
    const error = ref<BaseError>()
    const loading = ref<boolean>(false)
    const message = ref<string>()

    const action = async (): Promise<UnrefData<UserData<U>>> => {
      loading.value = true

      const data = await store.reset<U>(credentials, options)
      user.value = data.user
      error.value = data?.error
      message.value = data?.message
      loading.value = false

      return { error: data.error, message: data.message, user: user.value, loading: loading.value }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      error,
      loading,
      message,
      onError,
      onSuccess
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
  const loadUserFromStorage = <U = AU, T = unknown>(
    options: AuthOptions<U> = getAuthConfig(),
    credentials?: T,
    auto?: boolean
  ): UserData<U> & MethodActions<UnrefData<UserData<U>>> => {
    const user = ref<U>()
    const error = ref<BaseError>()
    const loading = ref<boolean>(false)
    const message = ref<string>()

    const action = async (): Promise<UnrefData<UserData<U>>> => {
      loading.value = true

      const data = await store.loadUserFromStorage<U, T>(options, credentials, auto)
      user.value = data.user
      error.value = data?.error
      message.value = data?.message
      loading.value = false

      return { error: data.error, message: data.message, user: user.value, loading: loading.value }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      error,
      loading,
      message,
      onError,
      onSuccess
    }
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
