import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Alert from './views/Alert.vue';

createApp(App)
  .use(store)
  .use(router)
  .component('Alert', Alert)
  .mount("#app");
