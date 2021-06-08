import { createStore } from 'vuex'
import { ref, Ref } from 'vue';

export interface TodoState {
  todos: any[];
}

export default createStore<TodoState>({
  state: {
    todos: []
  },
  getters: {
    getTodos: state => {
      return state.todos;
    }
  },
  mutations: {
    //create new todo
    addTodo(state, todo: any) {
      if (todo.text) {
        state.todos.push(todo);
      }
    },
    //remove existing todo
    removeTodo(state, todoObj: any) {
      // state.todos = state.todos.filter(todo => todo !== todoObj);

      // Vue.set
      state.todos.splice(state.todos.indexOf(todoObj), 1);
    },

    updateTodo(state: any, { item: todoObj, newTextVal: newText } : any) {
      todoObj.text = newText;
    }
  },
  actions: {},
  modules: {}
});
