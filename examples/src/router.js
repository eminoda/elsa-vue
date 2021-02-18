import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Index.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/table/basic',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/card',
    component: require('@/pages/card/Index.md').default,
    meta: {
      title: 'elsa-card 卡片'
    }
  },
  {
    path: '/table',
    // component: Layout,
    component: require('@/pages/table/Index.md').default,
    meta: {
      title: 'elsa-table 表格'
    }
  },
  {
    path: '/form',
    component: require('@/pages/form/Index.md').default,
    meta: {
      title: 'elsa-form 表单'
    }
  }
]
export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export { routes }
