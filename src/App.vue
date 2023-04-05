<template>
	<div class="wrap">
		<h1>TODOリスト</h1>
		<p class="explanation">小さいリストはドラッグアンドドロップで移動できます<br />ページを閉じても内容が1時間残ります</p>
		<ul class="todo-list">
			<li class="todo-list__item" v-for="(todo, index) in parentTodos" :key="todo.key">
				<div class="todo-list__head">
					<input class="todo-list__input parent-input" type="text" v-model="parentTodos[index].text" @input="todoSave" />
					<div class="todo-list__btn-wrap">
						<button class="todo-list__btn add-btn" @click="addParent"></button>
						<button class="todo-list__btn del-btn" @click="deleteTodo(index)"></button>
					</div>
				</div>
				<childTodo :index="index"></childTodo>
			</li>
		</ul>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import childTodo from '@/components/childTodo.vue';

export default {
	components: {
		childTodo,
	},
	setup() {
		const parentTodos = ref([]);
		const parentCount = ref(0);

		const cookies = ref(document.cookie);
		const cookiesArray = ref(cookies.value.split(';'));
		const cookieFlg = ref(false);

		const cookieTodo = () => {
			for (let cookie of cookiesArray.value) {
				let cookieName = cookie.trim().substr(0, 5);
				if (cookieName == 'todo=') {
					let json = cookie.trim().slice(5);
					parentTodos.value = JSON.parse(json);
					if (json !== '[]') {
						cookieFlg.value = true;
					}
					break;
				}
			}
			if (cookieFlg.value) {
				parentCount.value = parentTodos.value.length;
			}
		};
		cookieTodo();
		const addParent = () => {
			parentTodos.value.push({ text: [], key: [] });
			parentTodos.value[parentCount.value].text.push('');
			parentTodos.value[parentCount.value].key.push(new Date().getTime().toString());
			parentCount.value++;
			todoSave();
		};
		const deleteTodo = (index) => {
			if (parentCount.value > 0) {
				parentTodos.value.splice(index, 1);

				parentCount.value--;
				todoSave();
				document.cookie = 'todoChild' + parentCount.value + '=; max-age=0;';
			}
		};
		const todoSave = () => {
			document.cookie = 'todo =' + JSON.stringify(parentTodos.value) + '; max-age=3600;';
		};
		onMounted(() => {
			if (!cookieFlg.value) {
				addParent();
			}
		});
		return {
			parentTodos,
			parentCount,
			cookies,
			cookiesArray,
			cookieFlg,
			addParent,
			deleteTodo,
			cookieTodo,
			todoSave,
		};
	},
};
</script>
