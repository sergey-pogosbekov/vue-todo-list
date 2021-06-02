<template>
  <li>
    <span>{{ currentTodoText }}</span>
      <button @click="alertVisible = true">Open Edit</button>
      <Alert v-if="alertVisible" :modal="alertVisible" :title="currentTodoText" @close="alertVisible = false; currentTodoText = $event">
      </Alert>
      <!-- <alert :modal="alertVisible"></alert> -->
    <button @click.prevent="$emit('remove', todo)">Remove</button>
  </li>
</template>

<script>
import Alert from './Alert.vue';
import { ref } from 'vue';

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
    let vis = ref(false);
    let currentTodoText =  ref(prop.todo.text);
     return {
        alertVisible: vis,
        currentTodoText
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