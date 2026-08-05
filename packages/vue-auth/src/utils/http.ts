import axios from 'axios'

/**
 * The axios instance every vue-auth request goes through.
 *
 * Deliberately an instance rather than `axios.defaults` — mutating the global
 * defaults from a library leaks our headers onto every unrelated request the
 * host application makes.
 *
 * Exported so you can attach your own interceptors (refresh-token retries,
 * logging, etc.) without touching global axios:
 *
 * ```ts
 * import { http } from '@toneflix/vue-auth'
 *
 * http.interceptors.response.use(undefined, async (error) => { ... })
 * ```
 */
export const http = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
