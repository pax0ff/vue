<template>
  <div>
    <header class="headerform"/>
    <AppLayoutLinks/>
    <slot/>
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'

export default {
  name: 'AppLayoutForm',
  components: {
    AppLayoutLinks
  }
}
</script>
