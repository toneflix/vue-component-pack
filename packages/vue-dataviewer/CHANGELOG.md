# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.21.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.20.0...@toneflix/vue-dataviewer@1.21.0) (2024-11-26)

### Features

- Add submit to exposed data-viewer properties. ([2bf07d3](https://github.com/toneflix/vue-component-pack/commit/2bf07d39c34fafd6dc9256f37f2b6fafc3f46b3f))

# [1.20.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.19.0...@toneflix/vue-dataviewer@1.20.0) (2024-11-26)

### Features

- Expose form actions slot to data-viewer via form-actions slot. ([2f7e28f](https://github.com/toneflix/vue-component-pack/commit/2f7e28f7f1a66cebd3e29d322f3b462de28727c2))

# [1.19.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.18.0...@toneflix/vue-dataviewer@1.19.0) (2024-11-25)

### Features

- Sanitize form content only when initializing and when saving. Also expose the sanitize function. ([11344f1](https://github.com/toneflix/vue-component-pack/commit/11344f19e4e116afd59838af32dba85346ae4d03))

# [1.18.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.17.1...@toneflix/vue-dataviewer@1.18.0) (2024-11-25)

### Features

- Exclude excluded from props from actual form data and add the `slugifyFormKeys` to determine wether to convert form keys to slugs. ([3a704e0](https://github.com/toneflix/vue-component-pack/commit/3a704e0c7fbff97aa9e1fb35d5313e087889aad9))

## [1.17.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.17.0...@toneflix/vue-dataviewer@1.17.1) (2024-11-25)

### Bug Fixes

- Fix dialog close button. ([130d1f4](https://github.com/toneflix/vue-component-pack/commit/130d1f49ba05de1af0c7b4ae5cd6b0bdc77b1754))
- Fix the dialog close button ([235f4af](https://github.com/toneflix/vue-component-pack/commit/235f4af1b30028f088cd719e3fc5ddba2492ccbd))

# [1.17.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.16.0...@toneflix/vue-dataviewer@1.17.0) (2024-11-25)

### Bug Fixes

- Check if slot is not empty for hasSlots logic ([2e840ad](https://github.com/toneflix/vue-component-pack/commit/2e840adc5406d6de264d94764fd93fb238561037))
- Make `hasSlots` feature work as intended. ([ce1d40a](https://github.com/toneflix/vue-component-pack/commit/ce1d40a094cdb4e162a1b9a83d2df544b5d7b81d))

### Features

- Add `resetHandler` to handle system resets and 401 errors. ([0d3841a](https://github.com/toneflix/vue-component-pack/commit/0d3841a7f74af0ba15539e76baea86a0885fd393))
- add the hasSlots class to help customize when custom slots are in use. ([14ca62a](https://github.com/toneflix/vue-component-pack/commit/14ca62a52db60a3d10e3b1d5ed54cc817da044d3))
- Prevent applying styles to unsloted element. ([73ebece](https://github.com/toneflix/vue-component-pack/commit/73ebece10fe19352c441b49be9dd7d6df4c2deb2))

# [1.16.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.15.1...@toneflix/vue-dataviewer@1.16.0) (2024-11-21)

### Features

- Add `toggle()` to `form-*` slots. ([770433d](https://github.com/toneflix/vue-component-pack/commit/770433d3fe6a51629e507607b1633e3c8123c130))

## [1.15.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.15.0...@toneflix/vue-dataviewer@1.15.1) (2024-11-21)

### Bug Fixes

- Change t-dialog class position form absolute to fixed. ([2c00f61](https://github.com/toneflix/vue-component-pack/commit/2c00f619e626aeb7189351e44bd9e1fa1f7590fd))
- Fix programatic dialog toggling. ([310fbee](https://github.com/toneflix/vue-component-pack/commit/310fbeebba4ce0caa372fbe4fa7792fe0753ea24))

# [1.15.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.14.1...@toneflix/vue-dataviewer@1.15.0) (2024-11-21)

### Features

- Add close as a dialog mode. ([1a89abe](https://github.com/toneflix/vue-component-pack/commit/1a89abe1942f14bc0ec4b002da6801bd68ca0e0e))

## [1.14.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.14.0...@toneflix/vue-dataviewer@1.14.1) (2024-11-21)

### Bug Fixes

- Only expose method to close dialog ([5c4570f](https://github.com/toneflix/vue-component-pack/commit/5c4570f5d7f1abcc86f0727ae13f44860cfb0a4a))

# [1.14.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.13.1...@toneflix/vue-dataviewer@1.14.0) (2024-11-21)

### Features

- Expose dialogToggle and toggleDialog() to toggle dialog. ([c9cea0e](https://github.com/toneflix/vue-component-pack/commit/c9cea0ed951b85476ea67acff5048f8bb1aa146c))

## [1.13.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.13.0...@toneflix/vue-dataviewer@1.13.1) (2024-11-21)

### Bug Fixes

- Extraneous non-props attributes warning for dialogClass ([8bcbaef](https://github.com/toneflix/vue-component-pack/commit/8bcbaef4ba0d7534fa9015664e6f5364621e2704))

# [1.13.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.12.1...@toneflix/vue-dataviewer@1.13.0) (2024-11-21)

### Features

- Add `content-class` and `dialog-class` to improve customization flexibility. ([3719eff](https://github.com/toneflix/vue-component-pack/commit/3719effceb992f3d624d562bcbd79b3122950408))

## [1.12.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.12.0...@toneflix/vue-dataviewer@1.12.1) (2024-11-21)

### Bug Fixes

- Add `footer` slot to the `slotNames` array. ([d8ef6ac](https://github.com/toneflix/vue-component-pack/commit/d8ef6ac1ffd3e87d2eb0b60b99dd09b1f98b91b2))

# [1.12.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.11.1...@toneflix/vue-dataviewer@1.12.0) (2024-11-21)

### Features

- Add a `footer` slot to add content at the bottom of the container. ([96b2933](https://github.com/toneflix/vue-component-pack/commit/96b29332ec7c2fd444c6875cd7c004f671fd0505))

## [1.11.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.11.0...@toneflix/vue-dataviewer@1.11.1) (2024-11-21)

### Bug Fixes

- Fix card header styles being overridden by other libraries. ([6669db4](https://github.com/toneflix/vue-component-pack/commit/6669db4c1c415e8bbc9efaf69252996e57e01de8))

# [1.11.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.10.2...@toneflix/vue-dataviewer@1.11.0) (2024-11-21)

### Features

- Add `formProps` props to enable customization of form props. ([9677446](https://github.com/toneflix/vue-component-pack/commit/96774463eb00b000aad13e41711a65b3530dcf32))

## [1.10.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.10.1...@toneflix/vue-dataviewer@1.10.2) (2024-11-21)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.10.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.10.0...@toneflix/vue-dataviewer@1.10.1) (2024-11-21)

### Bug Fixes

- Fix t-dialog position style leaking to all dialog elements. ([2aafaba](https://github.com/toneflix/vue-component-pack/commit/2aafaba82b844005f54ad9779a306ff5a896c412))

# [1.10.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.9.1...@toneflix/vue-dataviewer@1.10.0) (2024-11-21)

### Features

- Add `dialog-z-index` props to `DataViewer` to enable dialog z-index customization. ([6fdee82](https://github.com/toneflix/vue-component-pack/commit/6fdee8227fe15079d1b515d991dfb182c327c834))

## [1.9.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.9.0...@toneflix/vue-dataviewer@1.9.1) (2024-11-21)

**Note:** Version bump only for package @toneflix/vue-dataviewer

# [1.9.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.8.0...@toneflix/vue-dataviewer@1.9.0) (2024-11-21)

### Features

- Add toggle() to list slots scopes ([a8096c6](https://github.com/toneflix/vue-component-pack/commit/a8096c6e95b28d1aa0b7702925f013422e37f936))

# [1.8.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.7.0...@toneflix/vue-dataviewer@1.8.0) (2024-11-21)

### Features

- Add toggle() to list props scopes ([d356729](https://github.com/toneflix/vue-component-pack/commit/d356729de67684eb7971f7c572223a0a5115b312))

# [1.7.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.6.3...@toneflix/vue-dataviewer@1.7.0) (2024-11-21)

### Features

- Add slots for form ([4313b3b](https://github.com/toneflix/vue-component-pack/commit/4313b3bf498026a49f789a578f5c70a354454804))
- Extend form slots to data-viewer ([25d839d](https://github.com/toneflix/vue-component-pack/commit/25d839dd8bb5b72e519519518e5b76eefb67470c))

## [1.6.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.6.2...@toneflix/vue-dataviewer@1.6.3) (2024-11-21)

### Bug Fixes

- Makes titles props optional ([16469c5](https://github.com/toneflix/vue-component-pack/commit/16469c5252b6b5fd1cbfa3a6f404f948060bce76))

## [1.6.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.6.1...@toneflix/vue-dataviewer@1.6.2) (2024-11-21)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.6.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.6.0...@toneflix/vue-dataviewer@1.6.1) (2024-11-21)

**Note:** Version bump only for package @toneflix/vue-dataviewer

# [1.6.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.5.0...@toneflix/vue-dataviewer@1.6.0) (2024-11-20)

### Features

- Add prop to allow further customization of lists. ([7c0eaca](https://github.com/toneflix/vue-component-pack/commit/7c0eaca160443861523454a37e886643bd4c32e7))

# [1.5.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.4.0...@toneflix/vue-dataviewer@1.5.0) (2024-11-20)

### Features

- Add slot for images and rename img-preview to image-viewer ([b7e4c1c](https://github.com/toneflix/vue-component-pack/commit/b7e4c1cb1af0c4668893f8389fd1be1ac2adbc0e))
- Add slots to aid full customization. ([df19687](https://github.com/toneflix/vue-component-pack/commit/df19687d95165b499d8ed1f8eadd138f9c1f9107))
- Improve image control. ([4066662](https://github.com/toneflix/vue-component-pack/commit/4066662df599f28e2ca3dc62ccac3454e2b9f363))

# [1.4.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.6...@toneflix/vue-dataviewer@1.4.0) (2024-11-20)

### Features

- Allow function to be passed as data options. ([31f70ee](https://github.com/toneflix/vue-component-pack/commit/31f70ee02af849ef6cf84a90ffdc5e990b0d8bcb))

- Add prop to determine what data property will be considered as date. ([31f70ee](https://github.com/toneflix/vue-component-pack/commit/31f70ee02af849ef6cf84a90ffdc5e990b0d8bcb))

- Add prop to allow setting custom date format. ([31f70ee](https://github.com/toneflix/vue-component-pack/commit/31f70ee02af849ef6cf84a90ffdc5e990b0d8bcb))

- Allow closing dialog with escape key. ([31f70ee](https://github.com/toneflix/vue-component-pack/commit/31f70ee02af849ef6cf84a90ffdc5e990b0d8bcb))

## [1.3.6](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.5...@toneflix/vue-dataviewer@1.3.6) (2024-11-20)

### Bug Fixes

- Add styles to exports ([c6bcba0](https://github.com/toneflix/vue-component-pack/commit/c6bcba0363ac7de216dd4bfd808894427d8626ca))

## [1.3.5](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.4...@toneflix/vue-dataviewer@1.3.5) (2024-11-19)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.3.4](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.3...@toneflix/vue-dataviewer@1.3.4) (2024-11-19)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.3.3](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.2...@toneflix/vue-dataviewer@1.3.3) (2024-11-19)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.3.2](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.1...@toneflix/vue-dataviewer@1.3.2) (2024-11-18)

**Note:** Version bump only for package @toneflix/vue-dataviewer

## [1.3.1](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.3.0...@toneflix/vue-dataviewer@1.3.1) (2024-11-18)

**Note:** Version bump only for package @toneflix/vue-dataviewer

# [1.3.0](https://github.com/toneflix/vue-component-pack/compare/@toneflix/vue-dataviewer@1.2.0...@toneflix/vue-dataviewer@1.3.0) (2024-11-13)

### Bug Fixes

- Use VueForms for data viewer. ([9eaf971](https://github.com/toneflix/vue-component-pack/commit/9eaf9716d301d2f57cd2ffa717538dafdcbe5bc2))

### Features

- Add object support for inpute-radio ([b049acf](https://github.com/toneflix/vue-component-pack/commit/b049acf0f0ed7ba30da60304b49ea8b5c9ff2870))
- Using vue-form for data-viewer form ([a3abb08](https://github.com/toneflix/vue-component-pack/commit/a3abb087d9290cb33ba54392d68adacfab18aef5))
