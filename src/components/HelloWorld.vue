<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="newItem" @keyup.enter="onEnter" type="text">
    <div v-for="item in items " :key="item.label">
      <p :class="{finished: item.finished}" @click="toggleFinish(item)">{{item.label}}</p>
    </div>
    <h2>Essential Links</h2>
  </div>
</template>
<script>
import Store from './store'
console.log(Store)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'TODO LIST',
      newItem: '',
      items: Store.fetch()
    }
  },
  methods: {
    toggleFinish: function (item) {
      // alert(item.label)
      console.log(item)
      item.finished = !item.finished
    },
    onEnter: function () {
      console.log(this.newItem)
      this.items.push({ label: this.newItem, finished: false })
      this.newItem = ''
    }
  },
  watch: {
    items: {
      handler: function (items, oldVal) {
        Store.save(items)
        console.log(oldVal)
      },
      deep: true
    }

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished {
  text-decoration: underline;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
