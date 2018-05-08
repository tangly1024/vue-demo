<template>
    <div class="hello">
        <h1>{{msg1}}</h1>
        <h2 @click="onclickMe">{{msg2}}</h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg1: 'Hello 1',
      msg2: 'Hello 2'
    }
  },
  props: ['test'],
  methods: {
    onclickMe () {
      console.log('from componentA' + this.test)
    }
  }
}
</script>
