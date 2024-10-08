---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'See it in action'
---

<div :class="$style['my-md']">
    <ClientOnly>
        <paystack-inline :amount="5000"/>
    </ClientOnly>
</div>

Visit the [Props](/props) page to see usage examples.

<style module>
.my-md {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
