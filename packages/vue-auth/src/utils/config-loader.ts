/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthOptions } from "../types";

export const loadAuthConfig = async (): Promise<AuthOptions<any>> => {
    const files = import.meta.glob(['/config.vue-auth.ts', '/config.vue-auth.js']);

    if (files['/config.vue-auth.ts']) {
        return (await files['/config.vue-auth.ts']() as { default: AuthOptions<any> }).default;
    } else if (files['/config.vue-auth.js']) {
        return (await files['/config.vue-auth.js']() as { default: AuthOptions<any> }).default;
    }

    return new Promise(() => ({}));
}
