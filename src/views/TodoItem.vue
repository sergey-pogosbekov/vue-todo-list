<template>
  <li>
    <span>{{ currentTodoText }}</span>
      <button @click="alertVisible = true">Open Edit</button>
      <Alert v-if="alertVisible" :modal="alertVisible" :title="currentTodoText" @close="alertVisible = false; $emit('update', $event); updateTodoTitle($event);">
      </Alert>
    <button @click.prevent="$emit('remove', todo)">Remove</button>
  </li>
</template>

<script>
import Alert from './Alert.vue';
import { ref } from 'vue';
import store from '../store';

export default {
  components: [ Alert ],
  props: {
    todo: {
      required: true,
      type: Object,
      text: String
    }
  },
  setup(prop) {
    const
      alertVisible = ref(false),
      currentTodoText =  ref(prop.todo.text);

    const updateTodoTitle = (newTitle) => {
      currentTodoText.value = newTitle;
    }

    return {
          alertVisible,
          currentTodoText,
          updateTodoTitle
    };
  }
}
</script>


<style lang="stylus" scoped>
li
  display flex
  margin 5px 0

  span
    flex 1
  
  button
    border 1px solid orange
    background orange 
    color white
    font-size 0.8rem
    padding 2px 4px
    cursor pointer

    &:hover
      border-color #ff8100
      background #ff8100
</style>