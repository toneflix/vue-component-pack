import { AuthOptions, AuthResponse, AuthUser, LoginCredentials, RegisterCredentials } from '../types';
import { getAuthConfig, url } from '../config';

import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export function createAuthStore<U = unknown> () {
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
        const login = async <U = AuthUser, T = LoginCredentials> (
            credentials: T,
            options: AuthOptions = getAuthConfig()
        ): Promise<{
            user: AuthUser | U;
            token?: string;
            error?: undefined;
        }> => {
            try {
                const { data } = await axios.post<AuthResponse<U>>(url('login'), credentials, options.axiosConfig);

                const { user: usr, token: tkn } = options.transformResponse
                    ? options.transformResponse(data)
                    : { user: data.user, token: data.token };

                user.value = usr;
                token.value = tkn;
                isAuthenticated.value = true;
                localStorage.setItem(options.storageKey || 'auth_token', data.token);

                return { user: usr, token: tkn };
            } catch ({ response }) {
                return { user: {} as AuthUser, error: response?.data || {} };
            }
        }

        /**
         * Attempt to create a new user account
         * 
         * @param credentials 
         * @param options 
         * @returns 
         */
        const register = async <U = AuthUser, T = RegisterCredentials> (
            credentials: T,
            options: AuthOptions = getAuthConfig()
        ): Promise<{
            user: AuthUser | U;
            token?: string;
            error?: undefined;
        }> => {
            try {
                const { data } = await axios.post<AuthResponse<U>>(
                    url('register'),
                    credentials,
                    options.axiosConfig
                );

                const { user: usr, token: tkn } = options.transformResponse
                    ? options.transformResponse(data)
                    : { user: data.user, token: data.token };

                user.value = usr;
                token.value = tkn;
                isAuthenticated.value = true;
                localStorage.setItem(options.storageKey || 'auth_token', data.token);

                return { user: usr, token: tkn };
            } catch ({ response }) {
                return { user: {} as AuthUser, error: response?.data || {} };
            }
        }

        /**
         * Attempt to log the user out
         * 
         * @param options 
         * @param credentials 
         * @returns 
         */
        const logout = async <T = unknown> (
            options: AuthOptions = getAuthConfig(),
            credentials?: T,
        ): Promise<{
            error?: undefined;
        } | undefined> => {
            const headers = options.getAuthHeaders ? await options.getAuthHeaders() : {};

            try {
                await axios.post(
                    url('logout'),
                    credentials,
                    {
                        headers: {
                            ...headers
                        },
                        ...options.axiosConfig
                    }
                );

                user.value = {} as AuthUser;
                token.value = undefined;
                isAuthenticated.value = false;
                localStorage.removeItem(options.storageKey || 'auth_token');
            } catch ({ response }) {
                return { error: response?.data || {} };
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
        const loadUserFromStorage = async <U = AuthUser, T = unknown> (
            options: AuthOptions = getAuthConfig(),
            credentials?: T,
        ): Promise<{
            user: AuthUser | U;
            error?: undefined;
        }> => {
            const tkn = localStorage.getItem(options.storageKey || 'auth_token');
            const headers = options.getAuthHeaders ? await options.getAuthHeaders() : {};

            if (tkn) {
                token.value = tkn;
                isAuthenticated.value = true;

                if (options.endpoints.profile) {
                    try {
                        const { data } = await axios.get<AuthResponse<U>>(
                            url('profile'),
                            {
                                headers: {
                                    ...headers
                                },
                                params: {
                                    ...credentials
                                },
                                ...options.axiosConfig
                            }
                        );

                        const { user: usr } = options.transformResponse
                            ? options.transformResponse(data)
                            : { user: data.user };

                        user.value = usr

                        return { user: usr };
                    } catch ({ response }) {
                        return { user: {} as AuthUser, error: response?.data || {} };
                    }
                }
            }

            return { user: {} as AuthUser };
        }

        return {
            user,
            token,
            isAuthenticated,

            login,
            logout,
            register,
            loadUserFromStorage,
        }
    });
}

export const useAuthStore = createAuthStore()
