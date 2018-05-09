<template>
  <div>
  <p  :class="{title : title}" @click="title = ! title">TODO LIST</p>
  <input v-model="newItem" @keyup.enter="submit">
  <button @click="submit">新增</button>
  <!--用key值提升渲染性能-->
  <ul >
    <todo-item
        v-for="(item,index) in items"
        :key="item.index"
        v-text="item.name"
        :content="item"
        :index="index"
        @delete="handleDelete"
    >
    </todo-item>
  </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: {
  	'todo-item' : TodoItem
  },
  data() {
  	return  {
  	  show: true,
      title: true,
      newItem: '',
      items: []
  	}
  },
  methods: {
  	submit: function(){
        this.items.push({name: this.newItem, finished: false})
        this.newItem = '';
      },
  	handleDelete: function(index){
  		console.log('子组件 ' + index + ' 请求删除')
        this.items.splice(index,1);
  	}
  }
}
</script>

<style>
  .title {
    text-decoration: underline;
  }
</style>