<template>
  <div class="wrapper">
    <h1>My Todo List</h1>
    <form @submit.prevent="addTodo">
      <input type="text" name="todo-text" v-model="newText" placeholder="New todo">
    </form>
    <ul v-if="todos.length">
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove="removeTodo" @update="updateTodo(todo, $event)" />
    </ul>
    <p class="none" v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>

</template>

<script>
import TodoItem from "./TodoItem.vue"
import { ref, defineComponent } from 'vue';
import store from '../store';

export default {
  components: {
    TodoItem
  },

  setup() {
      //init
      let intCounter = 0;
      const newText = ref(""),
      createTodo = text => ({
        text,
        index: intCounter++
      });
    
    let initData = [];

    if( ! (store.state.todos && store.state.todos.length > 0) ) {
        
      initData = [
        createTodo("Learn Vue"),
        createTodo("Learn about single-file components"),
        createTodo("Fall in love ❤️")];

        initData.forEach(element => {
          store.commit('addTodo', element);
        });
      }

      const
        addTodo = () => {
          const trimmedText =  newText.value.trim()

          if (trimmedText) {
            store.commit('addTodo', createTodo(trimmedText));
          }

          newText.value = "";
        },

        removeTodo = item => {
          store.commit('removeTodo', item);
        },
        
        updateTodo = (item, newTextVal) => {
          store.commit('updateTodo', { item, newTextVal } )
        };

   const  todos = ref(store.state.todos);
      
    return {
      //properties
      todos,
      newText,
      //functions
      addTodo,
      removeTodo,
      updateTodo
    };

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
