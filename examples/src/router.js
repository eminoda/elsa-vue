import Vue from 'vue';
import Router from 'vue-router';
import TableIndex from '@/pages/table/Index';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/table/index',
    meta: {
      title: '首页',
    },
  },
  {
    path: '/table',
    component: TableIndex,
    redirect: '/table/basic',
    hidden: true,
    meta: {
      title: 'elsa-table',
    },
    children: [
      {
        path: 'basic',
        component: (resolve) => require(['@/pages/table/Basic'], resolve),
        meta: {
          title: '基础用法',
        },
      },
      {
        path: 'page',
        component: (resolve) => require(['@/pages/table/Page'], resolve),
        meta: {
          title: '分页组合',
        },
      },
      {
        path: 'customTemp',
        component: (resolve) => require(['@/pages/table/CustomTemp'], resolve),
        meta: {
          title: '自定义模板',
        },
      },
      {
        path: 'tree',
        component: (resolve) => require(['@/pages/table/Tree'], resolve),
        meta: {
          title: '树型数据与懒加载',
        },
      },
    ],
  },
  {
    path: '/form',
    redirect: '/form/index',
    hidden: true,
    meta: {
      title: 'elsa-form',
    },
    children: [
      {
        path: 'easy',
        component: (resolve) => require(['@/pages/form/Index'], resolve),
        meta: {
          title: 'elsa-form',
        },
      },
    ],
  },
];
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export { routes };
