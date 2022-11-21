<template>
  <div>
    <ul>
      <li v-for="(todo, index) in parentTodos" :key="todo.key">
        <button @click="addParent">増やす</button>
        <div>
          <input type="text" v-model="parentTodos[index].text" @input="inputTodo">
          <button @click="deleteTodo(index)">削除</button>
          <childTodo :index=index></childTodo>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import childTodo from './components/childTodo.vue'

  export default {
    components: {
      childTodo,
    },
    setup() {
      const parentTodos = ref([])
      const parentCount = ref(0)

      const cookies = ref(ref(document.cookie))
      const cookiesArray = ref(cookies.value.split(';'))
      const cookieFlg = ref(false)

      const cookieTodo = () => {
        for(let cookie of cookiesArray.value){
          let cookieName = cookie.trim().substr(0, 5)
          if( cookieName == 'todo='){
            let json = cookie.trim().slice(5)
            parentTodos.value = JSON.parse(json)
            cookieFlg.value = true
            break
          }
        }
        if(cookieFlg.value) {
          parentCount.value = parentTodos.value.length
        }
      }
      cookieTodo()

      onMounted(() => {
        if(!cookieFlg.value) {
          addParent()
        } 
      })
      const addParent = () => {
        parentTodos.value.push({ text: [], key: [] })
        parentTodos.value[parentCount.value].text.push('')
        parentTodos.value[parentCount.value].key.push(new Date().getTime().toString())
        parentCount.value++
        document.cookie = 'todo =' + JSON.stringify(parentTodos.value) + '; max-age=3600;'
      }
      const deleteTodo = (index) => {
        if(parentCount.value > 0) {
          parentTodos.value.splice(index, 1)
          
          parentCount.value--
          document.cookie = 'todo =' + JSON.stringify(parentTodos.value) + '; max-age=3600;'
          document.cookie = 'todoChild' + parentCount.value + '=; max-age=0;'
        }
      }
      const inputTodo = () => {
        document.cookie = 'todo =' + JSON.stringify(parentTodos.value) + '; max-age=3600;'
      }
      return {
        parentTodos,
        parentCount,
        cookies,
        cookiesArray,
        cookieFlg,
        addParent,
        deleteTodo,
        cookieTodo,
        inputTodo, 
      }
    }
  }
</script>

<style scoped>
</style>