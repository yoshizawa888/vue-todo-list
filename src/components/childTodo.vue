<template>
  <div>
    <button @click="addChild">増やすchild</button>
    <draggable v-model="childTodos.todo" item-key="id">
      <template #item="{index}">
        <div>
          {{element}}
          //////
          <input type="text" v-model="childTodos.todo[index]">
          /////
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    setup() {
      let childTodos = ref({ todo: [], key: [] })
      let drag = ref(false)
      const addChild = () => {
        childTodos.value.todo.push('')
        childTodos.value.key.push(new Date().getTime().toString())
        console.log(childTodos.value)
      }
      const deleteTodoChild = (index) => {
        childTodos.value.todo.splice(index, 1)
        childTodos.value.key.splice(index, 1)
      }
      const dragList = (dragId) => {
        console.log(dragId)
      }
      return {
        childTodos,
        drag,
        addChild,
        deleteTodoChild,
        dragList
      }
      
    }
  }
</script>