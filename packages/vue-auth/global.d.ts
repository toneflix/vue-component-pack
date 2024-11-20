import { AuthUser } from './src/types'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $user: AuthUser | null
    $isAuthenticated: boolean
  }
}

export {}
