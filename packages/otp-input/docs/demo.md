---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'See it in action'
---

<div :class="$style['my-md']">
    <otp-input model-value="" label="Enter OTP"/>
</div>

<div :class="$style['my-md']">
    <otp-input model-value="" label="Custom Font" font-family="monospace"/>
</div>

<div :class="$style['my-md']">
    <otp-input has-error model-value="" label="With Error"/>
</div>

<div :class="$style['my-md']">
    <otp-input has-error model-value="" label="With Error Message" error-message="This OTP is not correct"/>
</div>

<div :class="$style['my-md']">
    <otp-input model-value="" label="Smaller" field-width="40" field-height="40"/>
</div>

<div :class="$style['my-md']">
    <otp-input model-value="" label="Larger" field-width="100" field-height="100"/>
</div>

<div :class="$style['my-md']">
    <otp-input model-value="" label="Justified" position="justify"/>
</div>

Visit the [Props](/props) page to see other examples.

<style module>
.my-md {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
