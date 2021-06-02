// declare module "*.vue" {
//   import { defineComponent } from "vue";
//   const component: ReturnType<typeof defineComponent>;
//   export default component;
// }


// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }


/* eslint-disable */
declare module '*.vue' {
  import { DefineComponent as type } from "vue";
  const component: DefineComponent<{}, {}, any>
  export default component
}
