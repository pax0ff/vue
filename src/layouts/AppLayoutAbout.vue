<template>
  <div>
    <header class="header_abt" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'
export default {
  name: 'AppLayoutAbout',
  components: {AppLayoutLinks}
}
</script>
