<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contacts">Contacts</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/upload">Upload Files</router-link> |
    <router-link to="/cart">Cart</router-link>
    <div class="right d-inline-flex">
      <button v-if="editing(false)" class="btn btn-dark mx-2">Add products</button>
      <button v-if="editing(true)" class="btn btn-dark mx-2">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayoutLinks',
  methods: {
    editing (ed) {

    }
  }
}
</script>
