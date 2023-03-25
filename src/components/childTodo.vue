<template>
  <div class="child-todo">
    <button class="child-add-btn" @click="addChild()">リスト追加</button>
    <draggable class="child-list" v-model="childTodos" item-key="todo" group="todo">
      <template #item="{ index }">
        <div class="child-list__item">
          <input class="child-list__input child-input" type="text" v-model="childTodos[index]" @input="inputTodo" />
          <button class="child-list__btn del-btn" @click="deleteTodoChild(index)"></button>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  props: ["index"],
  setup(props) {
    const childTodos = ref([]);

    const todoIndex = ref(props.index);

    const cookies = ref(document.cookie);
    const cookiesArray = ref(cookies.value.split(";"));
    const cookieFlg = ref(false);

    const cookieTodoChild = () => {
      for (let cookie of cookiesArray.value) {
        let cookieName = "todoChild" + todoIndex.value + "=";
        if (cookie.indexOf(cookieName) != -1) {
          let json = cookie.trim().slice(cookieName.length);
          childTodos.value = JSON.parse(json);
          cookieFlg.value = true;
          break;
        }
      }
    };
    cookieTodoChild();
    const addChild = () => {
      childTodos.value.push("");
      todoSave();
    };
    const deleteTodoChild = (index) => {
      if (childTodos.value.length > 1) {
        console.log(childTodos.value.length);
        childTodos.value.splice(index, 1);
        todoSave();
      }
    };
    const todoSave = () => {
      document.cookie = "todoChild" + todoIndex.value + "=" + JSON.stringify(childTodos.value) + "; max-age=3600;";
    };
    const inputTodo = () => {
      todoSave();
    };
    onMounted(() => {
      if (!cookieFlg.value) {
        addChild(todoIndex.value);
      }
    });
    return {
      childTodos,
      cookies,
      cookiesArray,
      cookieFlg,
      todoIndex,
      inputTodo,
      addChild,
      deleteTodoChild,
      cookieTodoChild,
      todoSave,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/childTodo.scss";
</style>
