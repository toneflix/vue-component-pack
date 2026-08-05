/**
 * SSR-safe access to `localStorage`.
 *
 * `globalThis.localStorage` is undefined during server-side rendering, and
 * throws outright in browsers where storage is disabled (Safari private mode,
 * blocked third-party cookies in an iframe). Every access goes through here so
 * a missing or hostile storage backend degrades to "no token" instead of
 * taking the whole app down.
 */
export const storage = {
  get(key: string): string | undefined {
    try {
      return globalThis.localStorage?.getItem(key) ?? undefined
    } catch {
      return undefined
    }
  },

  set(key: string, value: string): void {
    try {
      globalThis.localStorage?.setItem(key, value)
    } catch {
      /* storage unavailable — nothing to persist to */
    }
  },

  remove(key: string): void {
    try {
      globalThis.localStorage?.removeItem(key)
    } catch {
      /* storage unavailable — nothing to clear */
    }
  }
}
