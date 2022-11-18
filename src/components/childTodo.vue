<template>
  <div class="childTodo">
    <button @click="addChild">増やすchild</button>
    <draggable v-model="childTodos" item-key="todo" group="todo">
      <template #item="{index}">
        <div>
          {{index}}
          <input type="text" v-model="childTodos[index]">
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
      let childTodos = ref([])
      const addChild = () => {
        childTodos.value.push('')
        console.log(childTodos.value)
      }
      const deleteTodoChild = (index) => {
        childTodos.value.splice(index, 1)
      }
      return {
        childTodos,
        addChild,
        deleteTodoChild,
      }
    }
  }
</script>