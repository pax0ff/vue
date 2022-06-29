<template>
  <div>
    <header class="headerct"/>
    <AppLayoutLinks/>
    <slot/>
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'

export default {
  name: 'AppLayoutContacts',
  components: {
    AppLayoutLinks
  }
}
</script>
