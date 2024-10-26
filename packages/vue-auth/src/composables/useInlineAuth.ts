import { AuthOptions, AuthUser, BaseError, LoginCredentials, RegisterCredentials } from '../types'
import { Ref, UnwrapRef, ref } from 'vue'
import { createCountdown, getAuthConfig } from '../config'

import { createAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

export const useInlineAuth = <AU = AuthUser>() => {
  const useAuthStore = createAuthStore()
  const store = useAuthStore()

  type UnrefData<X> = {
    [K in keyof X]: UnwrapRef<X[K]>
  }

  interface BaseData {
    error?: Ref<BaseError | undefined>
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
  const useActionWithCallbacks = <R extends { error?: BaseError }>(action: () => Promise<R>) => {
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
    const message = ref<string>()

    const action = async (): Promise<UnrefData<AuthData<U>>> => {
      const data = await store.login<U, T>(credentials, options)
      user.value = data.user
      error.value = data.error
      token.value = data.token
      message.value = data.message

      const res: UnrefData<AuthData<U>> = {
        user: data.user,
        message: data.message,
        token: data.token
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
    const message = ref<string>()

    const action = async (): Promise<UnrefData<AuthData<U>>> => {
      const data = await store.register<U, T>(credentials, options)
      user.value = data.user
      error.value = data.error
      token.value = data.token
      message.value = data.message

      return { user: data.user, error: data.error, token: data.token, message: data.message }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      token,
      error,
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
    const message = ref<string>()

    const action = async (): Promise<UnrefData<BaseData>> => {
      const data = await store.logout(options, credentials)
      error.value = data?.error
      message.value = data?.message

      return { error: data?.error, message: data?.message }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      error,
      message,
      onError,
      onSuccess
    }
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
    const message = ref<string>()
    const timeout = ref<number>()
    const countdown = ref<number>(0)

    const action = async (): Promise<UnrefData<ForgotData>> => {
      const data = await store.forgot(credentials, options)
      error.value = data?.error
      message.value = data?.message
      timeout.value = data.timeout
      createCountdown(timeout, (val) => {
        countdown.value = val
      })

      return {
        error: data.error,
        message: data.message,
        timeout: data.timeout,
        countdown: countdown.value
      }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      error,
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
    const message = ref<string>()

    const action = async (): Promise<UnrefData<UserData<U>>> => {
      const data = await store.reset<U>(credentials, options)
      user.value = data.user
      error.value = data?.error
      message.value = data?.message

      return { error: data.error, message: data.message, user: user.value }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      error,
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
    credentials?: T
  ): UserData<U> & MethodActions<UnrefData<UserData<U>>> => {
    const user = ref<U>()
    const error = ref<BaseError>()
    const message = ref<string>()

    const action = async (): Promise<UnrefData<UserData<U>>> => {
      const data = await store.loadUserFromStorage<U, T>(options, credentials)
      user.value = data.user
      error.value = data?.error
      message.value = data?.message

      return { error: data.error, message: data.message, user: user.value }
    }

    const { send, onError, onSuccess } = useActionWithCallbacks(action)

    return {
      send,
      user,
      error,
      message,
      onError,
      onSuccess
    }
  }

  const { user, token, isAuthenticated } = storeToRefs(store)

  return {
    user: user as Ref<AU>,
    token: token,
    isAuthenticated,

    reset,
    login,
    logout,
    forgot,
    register,
    loadUserFromStorage
  }
}
