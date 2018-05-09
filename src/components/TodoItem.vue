<template>

<li @click="handleClick" style="cursor: pointer" title="点击删除">{{content.name}}</li>

</template>

<script>
export default {
  name: 'TodoItem',
  props: ['content','index'],
  methods: {
  	 handleClick: function(){
        console.log(this.content)
        this.content.finished = ! this.content.finished;
        console.log('请求父组件删除 ' + this.index)
        this.$emit('delete',this.index)
      }
  }
}
</script>

<style>

</style>
