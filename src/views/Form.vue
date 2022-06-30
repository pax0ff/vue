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
      <button v-on:click="addTo">Add</button>
    </div>
    <div class="d-grid">
      <li v-for="item in tasks" :key="item.id" class="alert-danger m-1">{{item.label}}</li>
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
    addTo () {
      this.tasks.push({id: this.tasks.length + 1 ,label: this.taskInput})
      this.taskInput='';
    }
  },
  data () {
    return {
      inputName: '',
      inputCheck: '',
      taskInput: '',
      tasks: [
        { id: 1, label: 'Task1' },
        { id: 2, label: 'Task2' },
        { id: 3, label: 'Task3' }
      ]
    }
  },
  metaInfo () {
    return {
      title: 'Forms'
    }
  }
}
</script>
