import { AuthOptions, AuthUser, LoginCredentials, RegisterCredentials } from '../types';

import { createAuthStore } from '../stores/auth';
import { getAuthConfig } from '../config';

export const useAuth = () => {
    const useAuthStore = createAuthStore()
    const store = useAuthStore();

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
    ) => {
        return store.login<U, T>(credentials, options);
    };

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
    ) => {
        return store.register<U, T>(credentials, options);
    };

    /**
     * Attempt to log the user out
     * 
     * @param options 
     * @param credentials 
     * @returns 
     */
    const logout = <T = unknown> (
        options: AuthOptions = getAuthConfig(),
        credentials?: T,
    ) => {
        return store.logout(options, credentials);
    };

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
        credentials?: T,
    ) => {
        return store.loadUserFromStorage<U, T>(options, credentials);
    };

    return {
        user: store.user,
        isAuthenticated: store.isAuthenticated,
        login,
        register,
        logout,
        loadUserFromStorage
    };
}
