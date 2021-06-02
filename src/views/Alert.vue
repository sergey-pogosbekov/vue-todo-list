<template>
  <div class="alert">
        <!-- template for the modal component -->
        <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
    
              <div class="modal-header">
                <slot name="header">
                  Changing title of ToDo Item:
                </slot>
              </div>
    
              <div class="modal-body">
                <slot name="body">
                  Please edit title:
                  <input v-model="currentTitle">
                </slot>
              </div>
    
              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close', currentTitle)">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
  </div>

</template>
<style>
  .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
  }

  
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style> 
<script lang="ts">
  import { defineComponent, watch, ref } from 'vue';
import { prop } from 'vue-class-component';
  // import { Popup } from 'vue-popup';
  // require('vue-popup/lib/popup.css');
  
  export default defineComponent( {
      name: 'Alert',

      //mixins: [Popup],
      setup(prop: any) {
        const title = ref(prop.title);
        return { currentTitle: title };
      },
      props: {
        modal: {
          default: true,
        },
        title: { default: '' },
        closeOnClickModal: {
          default: true
        }
      }
    })
</script> 