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
    path: '/table',
    component: Layout,
    meta: {
      title: 'elsa-table 表格'
    },
    children: [
      {
        path: 'basic',
        component: require('@/pages/table/Basic.vue').default,
        meta: {
          title: '基础用法'
        }
      },
      {
        path: 'page',
        component: require('@/pages/table/Page.vue').default,
        meta: {
          title: '分页组合'
        }
      },
      {
        path: 'customTemp',
        component: require('@/pages/table/CustomTemp.vue').default,
        meta: {
          title: '自定义模板'
        }
      },
      {
        path: 'tree',
        component: require('@/pages/table/Tree.vue').default,
        meta: {
          title: '树型数据与懒加载'
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      title: 'elsa-form 表单'
    },
    children: [
      {
        path: 'basic',
        component: require('@/pages/form/Basic.vue').default,
        meta: {
          title: '基础用法'
        }
      },
      {
        path: 'rule',
        component: require('@/pages/form/Rule.vue').default,
        meta: {
          title: '数据校验'
        }
      },
      {
        path: 'layout',
        component: require('@/pages/form/Layout.vue').default,
        meta: {
          title: '自定义布局'
        }
      },
      {
        path: 'select',
        component: require('@/pages/form/Select.vue').default,
        meta: {
          title: '下拉框和懒加载'
        }
      },
      {
        path: 'time',
        component: require('@/pages/form/Time.vue').default,
        meta: {
          title: '时间选择器'
        }
      },
      {
        path: 'upload',
        component: require('@/pages/form/Upload.vue').default,
        meta: {
          title: '文件上传'
        }
      },
      {
        path: 'relate',
        component: require('@/pages/form/Relate.vue').default,
        meta: {
          title: '联动关系'
        }
      }
    ]
  },
  {
    path: '/card',
    component: Layout,
    meta: {
      title: 'elsa-card 卡片'
    },
    children: [
      {
        path: 'basic',
        component: require('@/pages/card/Basic.vue').default,
        meta: {
          title: '基础用法'
        }
      }
    ]
  }
]
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export { routes }
