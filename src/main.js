import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
Vue.component("FooterGuide",FooterGuide);
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
