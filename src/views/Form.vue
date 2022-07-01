<template>
  <div class="container">
    <h1>This is a forms page</h1>
    <div class="form d-flex">
      <label class="d-flex">
        Name:
        <input v-model="inputName" type="text" placeholder="Your name">
      </label>
    </div>
    <div class="d-flex">
      <label class="d-block"> Choose:
          <input v-model="inputCheck" type="radio" value="opt1"> Opt1
        <input v-model="inputCheck" type="radio" value="opt2"> Opt2
      </label>
    </div>
    <div class="d-flex">
      <label>
        To do:
        <input type="text" v-model="taskInput" placeholder="Add tasks">
      </label>
      <button v-on:click="addTo" class="mx-3">Add task</button>
    </div>
    <p id="err" class="d-inline-flex m-5 alert-danger"></p>
    <div class="d-lg-grid float-lg-start">
      <ul class="d-grid">
        <li v-for="item in tasks" :key="item.id" class="d-inline-flex float-lg-start m-1">{{item.id}}. {{item.label}}
          <button @click="removeTask(item)" class="btn-close"></button>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  inputName: '',
  inputCheck: false,
  tasks: [],
  taskInput: '',
  methods: {
    removeTask (taskIndex) {
      this.tasks.splice(taskIndex, 1)
    },
    addTo () {
      let errElem = document.getElementById('err')
      if (this.taskInput === '') {
        this.error = 'Please complete the form before you add the task.'
        errElem.innerHTML = this.error
        if (this.tasks.length === 0) {
          this.tasks.length = 0
        }
      } else {
        errElem.innerHTML = ''
        this.tasks.push({id: this.tasks.length + 1, label: this.taskInput})
        this.taskInput = ''
      }
    }
  },
  data () {
    return {
      inputName: '',
      inputCheck: '',
      taskInput: '',
      tasks: []
    }
  },
  metaInfo () {
    return {
      title: 'Forms'
    }
  }
}
</script>
