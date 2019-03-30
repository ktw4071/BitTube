import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueXgplayer from 'vue-xgplayer'

Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    url: 'http://192.168.2.76:5000/IMG_20180710_200333_950.jpg',
    width: 100,
    height: 40
  },
  playsinline: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
