<template>
  <div>
    <h1>This is a forms page</h1>
    <div class="form">
      <label>
        Name:
        <input v-model="formItem" type="text" placeholder="Your name">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  formItem: '',
  data () {
    return {
      formItem: ''
    }
  },
  metaInfo () {
    return {
      title: 'Forms'
    }
  }
}
</script>
