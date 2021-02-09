import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Index.vue'
import Card from '@/pages/card/Basic.md'
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
    component: Layout,
    meta: {
      title: 'elsa-card 卡片'
    },
    children: [
      {
        path: 'basic',
        component: Card,
        meta: {
          title: '基础用法'
        }
      }
    ]
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
        path: 'elAttrs',
        component: require('@/pages/table/ElAttrs.vue').default,
        meta: {
          title: 'el-table 支持性'
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
        component: require('@/pages/form/Basic.md').default,
        meta: {
          title: '基础用法'
        }
      },
      {
        path: 'rule',
        component: require('@/pages/form/Rule.md').default,
        meta: {
          title: '数据校验'
        }
      },
      {
        path: 'layout',
        component: require('@/pages/form/Layout.md').default,
        meta: {
          title: '自定义布局'
        }
      },
      {
        path: 'select',
        component: require('@/pages/form/Select.md').default,
        meta: {
          title: '下拉框和懒加载'
        }
      },
      {
        path: 'time',
        component: require('@/pages/form/Time.md').default,
        meta: {
          title: '时间选择器'
        }
      },
      {
        path: 'upload',
        component: require('@/pages/form/Upload.md').default,
        meta: {
          title: '文件上传'
        }
      },
      {
        path: 'relate',
        component: require('@/pages/form/Relate.md').default,
        meta: {
          title: '联动关系'
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
