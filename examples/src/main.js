import Vue from 'vue'
// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import Elsa from 'main'
import DemoTemplate from './components/DemoTemplate'
import './style/index.css'
import './style/hightlight.css'
import moment from 'moment'
import request from './utils/request'
import Mock from 'mockjs'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Elsa)
Vue.use({
  install(Vue) {
    Vue.prototype.$moment = moment
  }
})
Vue.use({
  install(Vue) {
    Vue.prototype.$http = request
  }
})
Vue.use({
  install(Vue) {
    const Random = Mock.Random
    function buildList(count, parentId) {
      const list = []
      let id = 1
      while (id <= count) {
        const data = {
          id: parentId ? parentId + '-' + id : id,
          name: Random.cname(),
          age: Random.integer(10, 100),
          idCard: Random.natural(18),
          title: Random.integer(0, 2),
          desc: Random.cparagraph(3),
          date: Random.date('yyyy-MM-dd'),
          hasChildren: Random.integer(1, 5) % 2 == 0,
          address: Random.county(true)
        }
        list.push(data)
        id++
      }
      return list
    }
    Vue.prototype.$buildList = buildList
  }
})
Vue.component(DemoTemplate.name, DemoTemplate)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
