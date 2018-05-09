<template>

<div>
  <router-link to="/">首页</router-link>
     
  <router-link to="/todolist">todolist</router-link>
  
  <router-view/>
</div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
