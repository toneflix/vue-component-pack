# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.20.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.20.0...@toneflix/vue-auth@1.20.1) (2026-08-05)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.20.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.19.2...@toneflix/vue-auth@1.20.0) (2026-08-05)

### Bug Fixes

- dedupe vue across the workspace to fix cypress component tests ([4756c7d](https://github.com/toneflix/vue-component-pack/commit/4756c7d693943ea4fbc5b7fed5ed2788831d4735))

### Features

- **vue-auth:** support async middlewares and fix guard lifecycle ([3b7f695](https://github.com/toneflix/vue-component-pack/commit/3b7f6958ffed0fb28556fa7c8130cac65714c21d))

## [1.20.0] - Unreleased

### Features

- Middlewares now follow vue-router's navigation guard contract. A middleware may call `next(...)` **or** return the equivalent value (`undefined` to allow, `false` to abort, a route location to redirect, an `Error` to fail), and may do either asynchronously. `runMiddlewares` waits for a returned promise to settle before continuing the chain.
- `Middleware` gained a proper return type (`MiddlewareResult | Promise<MiddlewareResult>`), so async middlewares are visible to the type system instead of silently type-checking against `void`.
- Added the exported `MiddlewareContext<U>` type, replacing the context shape that was duplicated inline between `types.ts` and `plugins.ts`.
- Added `restoreToken()` to the auth store — a synchronous token restore used at install time.
- Requests now go through an exported `http` axios instance, so consumers can attach interceptors without touching global axios.
- Added `createStoppableCountdown()`, which returns the countdown ref plus a `stop` handle and disposes with the surrounding effect scope.

### Bug Fixes

- **Fixed `Error: Middleware at index N did not call next()`.** The runner checked `nextCalled` synchronously, immediately after invoking the middleware, so any middleware resolving on a later tick (an `await`, a `.then()`, a callback) threw even though it did call `next()`. The error no longer exists.
- **`next(false)` no longer allows the navigation it was meant to abort.** The runner tested `nextArg` for truthiness, so `false` was read as "continue" and the chain ran on to allow the navigation.
- vue-router's `next` is now invoked exactly once per navigation. Calling `next()` twice no longer re-runs the rest of the chain, and a late `next()` from a middleware that already redirected is dropped.
- Errors thrown by a middleware (or rejections from an async one) are forwarded to `router.onError` instead of escaping the guard and leaving the navigation hung.
- **Fixed a subscription leak in the router guard.** `store.$subscribe` was called inside `beforeResolve`, adding one permanent subscriber per navigation, each holding a `next` from a navigation that had already finished. A single session reset fired `resetHandler` once for every route the user had ever visited.
- **Fixed spurious logouts on cold load.** `buildHeaders` ran before `token.value` was assigned, so the profile request went out unauthenticated, returned 401, and cleared a valid session.
- **Fixed the auth state race at startup.** The token is now restored synchronously before the navigation guard is registered, so the first navigation no longer bounces a signed-in user to the login page.
- 401 detection now reads `response.status` as well as `error.status`; the latter only exists on axios >= 1.8.
- `login`/`register` persist the transformed token rather than the raw `data.token`, which stored the string `"undefined"` for anyone using `transformResponse`.
- `logout` clears local auth even when the request fails, instead of stranding the user in a logged-in UI with a token the server no longer honours.
- **`roleMiddleware` no longer fails open** — a user with no roles at all previously passed every route gated by `metaKey`. It also now splits comma-delimited role strings, which never matched before.
- `isCurrent` compares route queries by content instead of `JSON.stringify`, which was key-order sensitive.
- All `localStorage` access is SSR-safe and degrades to "no token" when storage is unavailable.
- `deepMerge` iterates own keys only and skips `__proto__`/`constructor`/`prototype`.
- The auth store definition is memoized instead of being rebuilt on every `useAuth()` / `useInlineAuth()` call.
- `useInlineAuth().forgot` cancels the previous countdown before starting a new one; repeated sends used to stack intervals and tick down several seconds per second.
- Removed a duplicate `AuthData` interface declaration.

### BREAKING CHANGES

- `next(false)` now aborts a navigation. Code that (unknowingly) relied on the previous behaviour to proceed will see navigations stop.
- `roleMiddleware` denies users whose role key is empty, `null`, or missing on a route gated by `metaKey`. Give such users an explicit role if they should pass.
- vue-auth no longer mutates `axios.defaults.headers.common`. If you relied on that side effect for your own requests, set those headers yourself or use the exported `http` instance.
- Failed logout requests now clear local authentication.
- Route guards run on `beforeEach` rather than `beforeResolve`, so auth redirects fire before lazy route components are fetched.

## [1.19.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.19.1...@toneflix/vue-auth@1.19.2) (2025-09-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.19.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.19.0...@toneflix/vue-auth@1.19.1) (2025-09-08)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.19.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.18.2...@toneflix/vue-auth@1.19.0) (2025-09-06)

### Features

- add router instance to plugins. ([9d86ddd](https://github.com/toneflix/vue-component-pack/commit/9d86dddbd60d5146bb0862b60b1da2b8effa012f))

## [1.18.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.18.1...@toneflix/vue-auth@1.18.2) (2025-09-06)

### Bug Fixes

- Provide missing types for $patch ([bd10998](https://github.com/toneflix/vue-component-pack/commit/bd1099857a3b75fffd5f97339f807adcb5530931))

## [1.18.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.18.0...@toneflix/vue-auth@1.18.1) (2025-09-06)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.18.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.17.2...@toneflix/vue-auth@1.18.0) (2025-09-06)

### Features

- copy global d.ts files to dist during build ([5e739b4](https://github.com/toneflix/vue-component-pack/commit/5e739b4d143693dfa7e5eb85fa13ba222bf1c3c6))
- expose $patch to middlewares. ([f689e47](https://github.com/toneflix/vue-component-pack/commit/f689e47e10af981a94fb2618ed66e2bd511bfe36))

## [1.17.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.17.1...@toneflix/vue-auth@1.17.2) (2025-09-06)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.17.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.17.0...@toneflix/vue-auth@1.17.1) (2025-09-06)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.17.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.16.0...@toneflix/vue-auth@1.17.0) (2025-09-06)

### Features

- add ([38e47f4](https://github.com/toneflix/vue-component-pack/commit/38e47f405c4efc076a6cc8f4aaf618ebe2e53f9b))

# [1.16.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.15.2...@toneflix/vue-auth@1.16.0) (2025-09-06)

### Features

- allow subscribing to action in plugins ([a52fba2](https://github.com/toneflix/vue-component-pack/commit/a52fba291d63fb336f1192a34abc28f518f48e93))
- pass onAction to the runMiddlewareHandler ([ebc9bb8](https://github.com/toneflix/vue-component-pack/commit/ebc9bb83321e78b8b16b8ec65aa1cf7b910a6f0c))

## [1.15.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.15.1...@toneflix/vue-auth@1.15.2) (2025-08-12)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.15.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.15.0...@toneflix/vue-auth@1.15.1) (2025-05-10)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.15.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.14.0...@toneflix/vue-auth@1.15.0) (2025-05-10)

### Features

- Pass full response data to useInlineAuth register and login endpoints. ([92ecd0c](https://github.com/toneflix/vue-component-pack/commit/92ecd0c3b51aaf398b69f15970067aea4cfbae25))

# [1.14.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.6...@toneflix/vue-auth@1.14.0) (2025-05-09)

### Features

- Allow adding extra returning extra response data from login and registration methods. ([d5c7b33](https://github.com/toneflix/vue-component-pack/commit/d5c7b3373dd57896d61e8380002444e8c0fa9646))

### ⚠ BREAKING CHANGES

- We now require pinia ^3.0.0. ([a46d6b7](https://github.com/toneflix/vue-component-pack/commit/a46d6b7c5302316418a1e9a778a0f4a0990c2dc8))

## [1.13.6](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.5...@toneflix/vue-auth@1.13.6) (2025-05-06)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.13.5](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.4...@toneflix/vue-auth@1.13.5) (2025-05-05)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.13.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.3...@toneflix/vue-auth@1.13.4) (2025-04-22)

### Features

- (vue-auth) renamed `refreshed` vue-auth store property to sessionExpired.
- (vue-auth) Now using router.beforeResolve in place of router.beforeEach.
- (vue-auth) Add $subscribe to Middleware context property signature.
- (vue-auth) Improve inline comments.
- (vue-auth) Add `to`, `from`, `next()` to resetHandler parameters.
- (vue-auth) Add the reset sessionMethod and add `sessionExpired` property to composable signatures.

**Note:** Version bump only for package @toneflix/vue-auth

## [1.13.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.2...@toneflix/vue-auth@1.13.3) (2025-04-18)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.13.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.1...@toneflix/vue-auth@1.13.2) (2025-04-18)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.13.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.13.0...@toneflix/vue-auth@1.13.1) (2025-04-18)

### Bug Fixes

- (vue-auth) temporarily remove pinia installation block. ([54b7ba2](https://github.com/toneflix/vue-component-pack/commit/54b7ba26ee46346a2346cee89e160aa9f26c5a19))

# [1.13.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.12.0...@toneflix/vue-auth@1.13.0) (2025-03-03)

### Features

- (vue-auth) Add a clearAuth method to clear user auth without making any server requests. ([4ef3220](https://github.com/toneflix/vue-component-pack/commit/4ef322062de75bab163c56ed28ea61d142c09e2d))

# [1.12.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.11.0...@toneflix/vue-auth@1.12.0) (2025-03-03)

### Bug Fixes

- (vue-auth) Assert that plugin is defined. ([bb3d9f2](https://github.com/toneflix/vue-component-pack/commit/bb3d9f20b999f46cfa5f49d23162021d28b281d9))

### Features

- Remove plugins and skipInit from storage options when passing to the authstore. ([daf1b62](https://github.com/toneflix/vue-component-pack/commit/daf1b6205120105e0e5b8325bf147715977501d1))

# [1.11.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.10.0...@toneflix/vue-auth@1.11.0) (2025-03-02)

### Features

- Add options.storageOptions.plugins config to allow installing pinia plugins directly. ([0260a94](https://github.com/toneflix/vue-component-pack/commit/0260a943f1673724c9fabf38863446c87716c7f0))

# [1.10.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.9.2...@toneflix/vue-auth@1.10.0) (2025-03-01)

### Features

- Add skipInit option to skip pinia re-initialization is needed. ([c41e8a0](https://github.com/toneflix/vue-component-pack/commit/c41e8a054cb96d0f28136ea00e4b830958912633))

## [1.9.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.9.1...@toneflix/vue-auth@1.9.2) (2025-03-01)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.9.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.9.0...@toneflix/vue-auth@1.9.1) (2025-03-01)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.9.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.8.4...@toneflix/vue-auth@1.9.0) (2025-02-21)

### Bug Fixes

- (vue-auth) Fix import error ([dad82ae](https://github.com/toneflix/vue-component-pack/commit/dad82ae33888fb9584aa60fd225224816d19d9f4))

### Features

- (vue-auth) Allow configuration to be set in a config.vue-auth.[js|ts] file and fix isAuthentication bug. ([d853d6d](https://github.com/toneflix/vue-component-pack/commit/d853d6de8fc68854b536455cee2d6d912e151fe0))

## [1.8.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.8.3...@toneflix/vue-auth@1.8.4) (2025-02-08)

### Bug Fixes

- (vue-auth) Fix minor typscript bug. ([53a3924](https://github.com/toneflix/vue-component-pack/commit/53a392409b8966601cf8433c1fd7291e4c9a428a))

## [1.8.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.8.2...@toneflix/vue-auth@1.8.3) (2024-12-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.8.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.8.1...@toneflix/vue-auth@1.8.2) (2024-11-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.8.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.8.0...@toneflix/vue-auth@1.8.1) (2024-11-23)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.8.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.7.0...@toneflix/vue-auth@1.8.0) (2024-11-23)

### Features

- Add `resetHandler` to handle system resets and 401 errors. ([0d3841a](https://github.com/toneflix/vue-component-pack/commit/0d3841a7f74af0ba15539e76baea86a0885fd393))

# [1.7.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.6.0...@toneflix/vue-auth@1.7.0) (2024-11-23)

### Bug Fixes

- Add styles to exports ([c6bcba0](https://github.com/toneflix/vue-component-pack/commit/c6bcba0363ac7de216dd4bfd808894427d8626ca))
- Export, type return and already return false in `isCurrent` route checker if we cant resolve the route. ([d87ced1](https://github.com/toneflix/vue-component-pack/commit/d87ced141207c1d20ae13931c01d5fb9cd15ceea))
- Improve `loadUserFromStorage` method signature. ([4c055c9](https://github.com/toneflix/vue-component-pack/commit/4c055c9ddf435d64f4eaac836c21289773192643))
- Make `hasSlots` feature work as intended. ([ce1d40a](https://github.com/toneflix/vue-component-pack/commit/ce1d40a094cdb4e162a1b9a83d2df544b5d7b81d))
- Wrap `isCurrent` route checker logig in try catch. ([4085a8e](https://github.com/toneflix/vue-component-pack/commit/4085a8ef9e784097386310bdb8bb4e3a681f4cfa))

### Features

- Return user in `loadUserFromStorage` if user exist even if token does not. ([eb0a242](https://github.com/toneflix/vue-component-pack/commit/eb0a2422aaa3cfdf4ad0876ac1b28090083fa3a9))

# [1.6.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.5.0...@toneflix/vue-auth@1.6.0) (2024-11-19)

### Features

- Bring back the `storageOptions` authPlugin config option. ([fdc14cf](https://github.com/toneflix/vue-component-pack/commit/fdc14cf1aaf80ef6c0be7c69426fbd2e0bc39b06))

# [1.5.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.4.3...@toneflix/vue-auth@1.5.0) (2024-11-19)

### Bug Fixes

- Call the underlying `createVueAuthStore` method when calling `useAuthStore`. ([cf1a41d](https://github.com/toneflix/vue-component-pack/commit/cf1a41dd905f9fa0ffd222ccb503ad8138d9a8fb))

### Features

- Remove storage option from initialization options and add as function param where it is required. ([fceffd7](https://github.com/toneflix/vue-component-pack/commit/fceffd744eb59f93b9b296d9d9c3ff4d33bca7f0))

## [1.4.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.4.2...@toneflix/vue-auth@1.4.3) (2024-11-19)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.4.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.4.1...@toneflix/vue-auth@1.4.2) (2024-11-19)

### Bug Fixes

- only call middleware in `runMiddlewares()` if it is defined. ([e2b10db](https://github.com/toneflix/vue-component-pack/commit/e2b10dba4fec719382c062566f5af30b1bb6c307))
- only call middleware in `runMiddlewares()` if it is defined. ([b530353](https://github.com/toneflix/vue-component-pack/commit/b53035339d0424668cfef6a65a4a49a07557b2c4))

## [1.4.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.4.0...@toneflix/vue-auth@1.4.1) (2024-11-18)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.4.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.8...@toneflix/vue-auth@1.4.0) (2024-11-18)

### Features

- Add `storageOptions` config to enable passing custom options to store instance. ([6e8698e](https://github.com/toneflix/vue-component-pack/commit/6e8698e534ab44433643600efde17370631fc935))

## [1.3.8](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.7...@toneflix/vue-auth@1.3.8) (2024-11-13)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.7](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.6...@toneflix/vue-auth@1.3.7) (2024-11-11)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.6](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.5...@toneflix/vue-auth@1.3.6) (2024-11-11)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.5](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.4...@toneflix/vue-auth@1.3.5) (2024-11-10)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.3...@toneflix/vue-auth@1.3.4) (2024-11-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.2...@toneflix/vue-auth@1.3.3) (2024-11-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.1...@toneflix/vue-auth@1.3.2) (2024-11-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.3.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.3.0...@toneflix/vue-auth@1.3.1) (2024-11-08)

**Note:** Version bump only for package @toneflix/vue-auth

# [1.3.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.5...@toneflix/vue-auth@1.3.0) (2024-10-31)

### Features

- Make the main entry build cjs extenstion. ([d33af34](https://github.com/toneflix/vue-component-pack/commit/d33af34019baa934b60a84e442bf6a507492c0b8))

## [1.2.5](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.4...@toneflix/vue-auth@1.2.5) (2024-10-29)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.2.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.3...@toneflix/vue-auth@1.2.4) (2024-10-29)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.2.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.2...@toneflix/vue-auth@1.2.3) (2024-10-28)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.2.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.1...@toneflix/vue-auth@1.2.2) (2024-10-28)

### Bug Fixes

- Set generic user type in middlewares to unknown default. ([bb6fb8c](https://github.com/toneflix/vue-component-pack/commit/bb6fb8cb6eab5ed31251b2b7b9ecefebd6943b5f))

## [1.2.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.2.0...@toneflix/vue-auth@1.2.1) (2024-10-28)

### Bug Fixes

- Update generic type asertion for roleMiddleware ([28dfc58](https://github.com/toneflix/vue-component-pack/commit/28dfc58407d78f27d623f5948f26070f123311f9))

# [1.2.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.1.0...@toneflix/vue-auth@1.2.0) (2024-10-28)

### Bug Fixes

- Add a Generic type to the roleMiddeware to help validate the roleKey param ([6fcfd9c](https://github.com/toneflix/vue-component-pack/commit/6fcfd9cc4781d7691265302cd6392483f4072cb5))

### Features

- Create a guestMiddleware ([3178745](https://github.com/toneflix/vue-component-pack/commit/3178745d69d77f5dbbae22a22dfeec41b71bfabe))

# [1.1.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.38...@toneflix/vue-auth@1.1.0) (2024-10-28)

### Features

- Export plugins and middleware from main index.tx ([26dbebb](https://github.com/toneflix/vue-component-pack/commit/26dbebb952841b8d6952a15b1b7ebba3f0dc326f))

## [1.0.38](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.37...@toneflix/vue-auth@1.0.38) (2024-10-28)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.37](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.36...@toneflix/vue-auth@1.0.37) (2024-10-27)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.36](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.35...@toneflix/vue-auth@1.0.36) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.35](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.34...@toneflix/vue-auth@1.0.35) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.34](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.33...@toneflix/vue-auth@1.0.34) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.33](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.32...@toneflix/vue-auth@1.0.33) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.32](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.31...@toneflix/vue-auth@1.0.32) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.31](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.30...@toneflix/vue-auth@1.0.31) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.30](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.9...@toneflix/vue-auth@1.0.30) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.9](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.8...@toneflix/vue-auth@1.0.9) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.8](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.7...@toneflix/vue-auth@1.0.8) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.7](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.6...@toneflix/vue-auth@1.0.7) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.6](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.5...@toneflix/vue-auth@1.0.6) (2024-10-26)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.5](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.4...@toneflix/vue-auth@1.0.5) (2024-10-25)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-auth@1.0.3...@toneflix/vue-auth@1.0.4) (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## 1.0.3 (2024-10-24)

## 1.0.21 (2024-10-24)

## 1.0.20 (2024-10-24)

## 1.0.19 (2024-10-24)

## 1.0.18 (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.21](https://github.com/toneflix/vue-component-pack/compare/1.0.20...1.0.21) (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.20](https://github.com/toneflix/vue-component-pack/compare/1.0.19...1.0.20) (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.19](https://github.com/toneflix/vue-component-pack/compare/1.0.18...1.0.19) (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.18](https://github.com/toneflix/vue-component-pack/compare/1.0.17...1.0.18) (2024-10-24)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.15](https://github.com/toneflix/vue-component-pack/compare/1.0.14...1.0.15) (2024-10-08)

**Note:** Version bump only for package @toneflix/vue-auth

## [1.0.14](https://github.com/toneflix/vue-component-pack/compare/1.0.13...1.0.14) (2024-10-08)

**Note:** Version bump only for package @toneflix/vue-auth
