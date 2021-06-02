<template>
<!--<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>-->
  <div class="wrapper">
    <h1>My Todo List</h1>
    <form @submit.prevent="addTodo">
      <input type="text" name="todo-text" v-model="newText" placeholder="New todo">
    </form>
    <ul v-if="todos.length">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p class="none" v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>

  <!--modal template -->
</template>

<script>
import TodoItem from "./TodoItem.vue"
import { ref, watch, defineComponent } from 'vue';

export default {
  // name: 'About',
  components: {
    TodoItem
  },

  setup() {
      //init
      let nextTodoId = 1;

      const createTodo = text => ({
        text,
        id: nextTodoId++
      });

      const todos =  ref([
      ]);

      const initData = [
        createTodo("Learn Vue"),
        createTodo("Learn about single-file components"),
        createTodo("Fall in love ❤️")];

        initData.forEach(element => {
          todos.value.push(element);
        });

      let newText = ref("");
      //watch(todos)
      return {
        //properties
        todos,
        newText: newText,
        //functions
        addTodo: function() {
          let textVar = newText.value;
          const trimmedText = textVar.trim()

          if (trimmedText) {
            todos.value.push(createTodo(trimmedText))
          }

          newText.value = ""
        },

        removeTodo: function(item) {
          todos.value = todos.value.filter(todo => todo !== item)
        }
    }
  }
}
</script>

<style lang="stylus">
*, *::before, *::after 
  box-sizing border-box

html, body
  font 16px/1.2 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
  padding 10px

.wrapper
  width 75%
  margin 0 auto

form
  margin-bottom 20px

input[type="text"]
  width 100%
  padding 10px
  border 1px solid #777

ul, li
  margin 0
  padding 0

p.none
  color #888
  font-size small
</style>
