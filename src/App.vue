<template>
  <div>
    <ul>
      <li v-for="(todo, index) in parentTodos" :key="todo.key">
        <button @click="addParent()">増やす</button>
        <div>
          ===========
          <input type="text" v-model="parentTodos[index].text">
          <button @click="deleteTodo(index)">削除</button>
          <childTodo></childTodo>
          ===========
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import childTodo from './components/childTodo.vue'
  export default {
    components: {
      childTodo,
    },
    setup() {
      let parentTodos = ref([{ text: [], key: [] }])
      let parentCount = 0
      const addParent = () => {
        parentCount++
        parentTodos.value.push({ text: [], key: [] })
        parentTodos.value[parentCount].text.push('')
        console.log(parentTodos.value)
        console.log(parentCount)
      }
      const deleteTodo = (index) => {
        parentTodos.value.splice(index, 1)
        parentCount--
      }
      const test = () => {
        console.log('testtest')
      }
      return {
        parentTodos,
        parentCount,
        addParent,
        deleteTodo,
        test,
      }
    }
  }
</script>

<style scoped>
</style>