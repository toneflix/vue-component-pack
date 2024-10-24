// src/config.ts
import { AuthOptions } from './types';

export let authConfig: AuthOptions;

export const url = (endpoint?: string) => {
    if (!endpoint || !authConfig.endpoints[endpoint]) {
        throw new Error(`You have not defined a ${endpoint} endpoint.`);
    }

    const path = authConfig.endpoints[endpoint]

    if (authConfig && path) {
        return (authConfig.baseUrl + path).replace(/([^:]\/)\/+/g, "$1")
    }

    return ''
}

export function setAuthConfig (options: AuthOptions) {
    authConfig = options;
}

export function getAuthConfig (): AuthOptions {
    if (!authConfig) {
        throw new Error('Auth plugin not initialized properly.');
    }
    return authConfig;
}
