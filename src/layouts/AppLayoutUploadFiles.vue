<template>
  <div class="container">
    <header class="headerform"/>
    <AppLayoutLinks/>
    <slot/>
  </div>

</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'

export default {
  name: 'AppLayoutUploadFiles',
  components: {
    AppLayoutLinks
  }
}
</script>
