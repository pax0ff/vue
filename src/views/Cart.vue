<template>
  <div class='container'>
    <div class="col-lg-6">
      <button class="btn btn-success">Add product</button>
<!--      <h6 class="d-flex">Choose a file:</h6>-->
<!--      <input type="file" accept="application/text" @change="onFileChange" class="input-group" id="uploadFile">-->
<!--      <button class="btn btn-success" @click="bringData">Read data</button>-->
<!--      <button class="btn btn-danger" @click="clearData">Clear</button>-->
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
    <div class='d-inline-flex col-lg-12 col-md-12 col-sm-12'>
      <div>
        <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

        <div class="mt-3">
          Submitted Names:
          <div v-if="submittedNames.length === 0">--</div>
          <ul v-else class="mb-0 pl-3">
            <li v-for="name in submittedNames">{{ name }}</li>
          </ul>
        </div>

        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Submit Your Name"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
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
        name: '',
        nameState: null,
        submittedNames: []
        // products: [{}]
      }
    },
    /* Methods for loading data */

    // bringData () {
    //   let elem = document.getElementById('content')
    //   setTimeout(() => { elem.innerHTML = 'Loading' }, 100)
    //   setTimeout(() => { elem.innerHTML = 'Loading.' }, 500)
    //   setTimeout(() => { elem.innerHTML = 'Loading..' }, 700)
    //   setTimeout(() => { elem.innerHTML = 'Loading...' }, 1200)
    //   setTimeout(() => { elem.innerHTML = this.text }, 2000)
    //   // this.products = this.textToJSON()
    //   console.log(this.getData())
    // },
    // clearData () {
    //   let elem = document.getElementById('content')
    //   let input = document.getElementById('uploadFile')
    //   elem.innerHTML = ''
    //   input.value = ''
    // },
    // textToJSON () {
    //   return JSON.parse(this.text)
    // },
    // getData () {
    //   let parsedArr = this.textToJSON()
    //   for (let i = 0; i < parsedArr.length; i++) {
    //     this.products.push({id: parsedArr.id, name: parsedArr.name, description: parsedArr.description})
    //   }
    //   return this.products
    // },
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
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal () {
      this.name = ''
      this.nameState = null
    },
    handleOk (bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
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
