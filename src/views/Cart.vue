<template>
  <div class='container'>
    <div class="">
      <h6 class="d-flex">Choose a file:</h6>
      <input type="file" accept="application/text" @change="onFileChange" class="input-group">
      <button class="btn btn-success" @click="bringData">Read data</button>
    </div>
    <div class="blockquote">
      <div class="tab-content">
        <p id="content"></p>
      </div>
    </div>
    <br>
    <div class='d-inline-flex col-lg-12 col-md-12 col-sm-12'>
      <div class='col-lg-3'>
        <h5 class='card-title'>Product name</h5>
        <div class='product-image'>
          <img src='../../static/images/logo.png' alt='Product Image' class='w-50'>
        </div>
        <div class='product-desc p-3'>
          <p class=''>Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class='col-lg-3'>
        <h5 class='card-title'>Product name</h5>
        <div class='product-image'>
          <img src='../../static/images/logo.png' alt='Product Image' class='w-50'>
        </div>
        <div class='product-desc p-3'>
          <p class=''>Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class='col-lg-3'>
        <h5 class='card-title'>Product name</h5>
        <div class='product-image'>
          <img src='../../static/images/logo.png' alt='Product Image'  class='w-50'>
        </div>
        <div class='product-desc p-3'>
          <p class=''>Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class='col-lg-3'>
        <h5 class='card-title'>Product name</h5>
        <div class='product-image'>
          <img src='../../static/images/logo.png' alt='Product Image' class='w-50'>
        </div>
        <div class='product-desc p-3'>
          <p class=''>Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  products: [],
  cart: [],
  text: '',
  methods: {
    data () {
      return {

      }
    },
    /* Methods for loading data */

    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.readFile(files[0])
    },
    readFile (file) {
      let reader = new FileReader()
      reader.onload = e => {
        this.text = e.target.result
        let elem = document.getElementById('content')
        let json = JSON.parse(this.text)
        if (!this.text) {
          elem.innerHTML = 'Your document is empty.'
          setTimeout(() => { elem.innerHTML = 'Choose another file' }, 2000)
        }

        console.log(json)
      }
      reader.readAsText(file)
    },
    bringData () {
      let elem = document.getElementById('content')
      setTimeout(() => { elem.innerHTML = 'Loading' }, 100)
      setTimeout(() => { elem.innerHTML = 'Loading.' }, 500)
      setTimeout(() => { elem.innerHTML = 'Loading..' }, 700)
      setTimeout(() => { elem.innerHTML = 'Loading...' }, 1200)
      setTimeout(() => { elem.innerHTML = this.text }, 2000)
    },
    /* Getters */

    getName (product) {
      return this.products.name
    },
    getDescription (product) {
      return this.products.description
    },
    getImage (product) {
      return this.products.image
    },
    getPrice (product) {
      return this.products.price
    },
    getCurrency (product) {
      return this.products.currency
    },
    getStock (product) {
      return this.products.stock
    },

    /* Setters */

    setName (name) {
      this.products.name = name
    },
    setDescription (description) {
      this.products.description = description
    },
    setImage (image) {
      this.products.image = image
    },
    setPrice (price) {
      this.products.price = price
    },
    setCurrency (currency) {
      this.products.currency = currency
    },
    setStock (stock) {
      this.products.stock = stock
    },

    /* Methods for cart management */
    totalCartValue (cart) {

    }

    /* Methods for product management */

  },
  metaInfo () {
    return {
      title: 'Cart'
    }
  }
}
</script>
