
import Vue from 'vue';
import App from './app.vue';
// import Vue from 'vue/dist/vue.esm.js'
import router from './router/index.js';
import 'styles/login.less';
var app = new Vue({
  el: "#appDom",
  //注入router
  router,
  data(){
      return {
        message: 'hello webpack!!',
        test:'mmm'
      }
  },
  render:h=>h(App)
//   template: '<div>{{test}}</div>',
})

// render