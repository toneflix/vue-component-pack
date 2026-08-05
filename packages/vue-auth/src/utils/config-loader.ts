/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AuthOptions, AuthUser } from '../types'

import { existsSync } from 'fs'
import { resolve } from 'path'

const CONFIG_FILENAMES = ['vue-auth.config.ts', 'vue-auth.config.js', 'vue-auth.config.cjs']

export const loadAuthConfig = async (): Promise<AuthOptions<any>> => {
  for (const filename of CONFIG_FILENAMES) {
    const fullPath = resolve(process.cwd(), filename)
    if (existsSync(fullPath)) {
      const config = await import(fullPath)
      return (config?.default || config) as AuthOptions<any>
    }
  }

  return new Promise((resolve) => resolve({} as AuthOptions<any>))
}

/**
 * Deep Merge Helper
 *
 * @param a
 * @param b
 */
export function deepMerge<T extends AuthOptions<AuthUser>>(a: T, b: Partial<T>): T {
  const out = { ...a } as any

  for (const key of Object.keys(b ?? {}) as Array<keyof T & string>) {
    // Own keys only, and never a prototype-bearing one — a config file (or any
    // JSON that reaches here) carrying `__proto__` would otherwise write straight
    // onto Object.prototype.
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue
    }

    if (
      typeof b[key] === 'object' &&
      b[key] !== null &&
      !Array.isArray(b[key]) &&
      typeof out[key] === 'object' &&
      out[key] !== null &&
      !Array.isArray(out[key])
    ) {
      out[key] = deepMerge(out[key], b[key] as any)
    } else {
      out[key] = b[key]
    }
  }

  return out
}
