<template>
  <div>
    <header class="header"/>
    <AppLayoutLinks/>
    <slot/>
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'

export default {
  name: 'AppLayoutCart',
  components: {
    AppLayoutLinks
  }
}
</script>
