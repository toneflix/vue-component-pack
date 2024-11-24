# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
