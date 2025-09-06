import { AuthOptions, AuthUser } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let authConfig: AuthOptions<any>

export const url = (endpoint?: keyof typeof authConfig.endpoints) => {
  if (!endpoint || !authConfig.endpoints[endpoint]) {
    throw new Error(`You have not defined a ${String(endpoint)} endpoint.`)
  }

  const path = authConfig.endpoints[endpoint]

  if (authConfig && path) {
    return (authConfig.baseUrl + path).replace(/([^:]\/)\/+/g, '$1')
  }

  return ''
}

export const setAuthConfig = <U = AuthUser>(options: AuthOptions<U>) => {
  authConfig = options
}

export const getAuthConfig = <U = AuthUser>(): AuthOptions<U> => {
  if (!authConfig) {
    throw new Error('Auth plugin not initialized properly.')
  }
  return authConfig
}

/**
 * Build the headers for the request, using either the old and new method.
 *
 * @param options
 * @param user
 * @param token
 * @returns
 */
export const buildHeaders = async <U extends AuthUser = AuthUser>(
  options: AuthOptions,
  user: U,
  token?: string
) => {
  return options.setAuthHeaders
    ? await options.setAuthHeaders({ user, token: token })
    : options.getAuthHeaders
    ? await options.getAuthHeaders({ user, token: token })
    : {}
}
