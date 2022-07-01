<template>
  <div class="container">
    <div v-for="product in products" class="d-inline-flex col-lg-12 col-md-12 col-sm-12">
      <div  class="col-lg-3">

      </div>
      <div class="col-lg-3">
        <h5 class="card-title">Product name</h5>
        <div class="product-image">
          <img src="../../static/images/logo.png" alt="Product Image" class="w-50">
        </div>
        <div class="product-desc p-3">
          <p class="">Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class="col-lg-3">
        <h5 class="card-title">Product name</h5>
        <div class="product-image">
          <img src="../../static/images/logo.png" alt="Product Image" class="w-50">
        </div>
        <div class="product-desc p-3">
          <p class="">Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class="col-lg-3">
        <h5 class="card-title">Product name</h5>
        <div class="product-image">
          <img src="../../static/images/logo.png" alt="Product Image"  class="w-50">
        </div>
        <div class="product-desc p-3">
          <p class="">Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
        </div>
      </div>
      <div class="col-lg-3">
        <h5 class="card-title">Product name</h5>
        <div class="product-image">
          <img src="../../static/images/logo.png" alt="Product Image" class="w-50">
        </div>
        <div class="product-desc p-3">
          <p class="">Description lorem ipsum doloer aset lorem ipsum doloer aset</p>
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
  methods: {
    data () {
      return {
        products: [{
          id:1,
          name: "Product 1",
          description: "Lorem ipsum dolor asimet ipsum dolor asimet",
          image: "logo",
          price: 25,
          currency: EUR,
          stock: 10
        },{
          id:2,
          name: "Product 2",
          description: "Lorem ipsum dolor asimet ipsum dolor asimet",
          image: "logo",
          price: 25,
          currency: EUR,
          stock: 10
        },{
          id:3,
          name: "Product 3",
          description: "Lorem ipsum dolor asimet ipsum dolor asimet",
          image: "logo",
          price: 25,
          currency: EUR,
          stock: 10
        },{
          id:4,
          name: "Product 4",
          description: "Lorem ipsum dolor asimet ipsum dolor asimet",
          image: "logo",
          price: 25,
          currency: EUR,
          stock: 10
        },
        ]
      }
    },

    /* Getters */

    getName(product) {
      return this.products.name;
    },
    getDescription(product) {
      return this.products.description;
    },
    getImage(product) {
      return this.products.image;
    },
    getPrice(product) {
      return this.products.price;
    },
    getCurrency(product) {
      return this.products.currency;
    },
    getStock(product) {
      return this.products.stock;
    },

    /* Setters */

    setName(name) {
      this.products.name = name;
    },
    setDescription(description) {
      this.products.description = description;
    },
    setImage(image) {
      this.products.image = image;
    },
    setPrice(price) {
      this.products.price = price;
    },
    setCurrency(currency) {
      this.products.currency = currency;
    },
    setStock(stock) {
      this.products.stock = stock;
    },

    /* Methods for cart management */
    totalCartValue(cart) {

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
