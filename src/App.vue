<template>
  <div>
    <button @click="addParent">増やす</button>
    <draggable v-model="parentTodos" item-key="id">
      <template #item="{index}">
        <div>
          <input type="text" v-model="parentTodos[index]">
          <button @click="deleteTodo(index)">削除</button>
          <childTodo></childTodo>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import draggable from 'vuedraggable';

  import childTodo from './components/childTodo.vue'
  export default {
    components: {
      childTodo,
      draggable
    },
    setup() {
      let parentTodos = ref([])
      const addParent = () => {
        parentTodos.value.push('')
        console.log(parentTodos.value)
      }
      const deleteTodo = (index) => {
        parentTodos.value.splice(index, 1)
      }
      return {
        parentTodos,
        addParent,
        deleteTodo
      }
      
    }
  }
</script>

<style scoped>
  li:nth-child(even) {
    background: gray;
  }
</style>