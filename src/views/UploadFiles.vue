<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 d-block">
      <h2 class="float-lg-start">Choose a file:</h2>
      <input type="file" accept="application/text" @change="onFileChange" class="input-group">
      <button @click="bringData">Read data</button>
    </div>
    <br>
    <div class="blockquote">
      <div class="tab-content">
        <p id="content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadFiles',
  text: '',
  methods: {

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
        if (!this.text) {
          elem.innerHTML = 'Your document is empty.'
          setTimeout(() => { elem.innerHTML = 'Choose another file' }, 2000)
        }
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
    }
  },
  metaInfo () {
    return {
      title: 'Upload Files'
    }
  }
}
</script>
