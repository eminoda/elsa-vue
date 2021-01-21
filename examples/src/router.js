import Vue from 'vue';
import Router from 'vue-router';
import TableIndex from '@/pages/table/Index';
import FormIndex from '@/pages/form/Index';

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
    component: FormIndex,
    redirect: '/form/index',
    hidden: true,
    meta: {
      title: 'elsa-form',
    },
    children: [
      {
        path: 'basic',
        component: (resolve) => require(['@/pages/form/Basic'], resolve),
        meta: {
          title: '基础用法',
        },
      },
      {
        path: 'rule',
        component: (resolve) => require(['@/pages/form/Rule'], resolve),
        meta: {
          title: '数据校验',
        },
      },
      {
        path: 'layout',
        component: (resolve) => require(['@/pages/form/Layout'], resolve),
        meta: {
          title: '自定义布局',
        },
      },
      {
        path: 'select',
        component: (resolve) => require(['@/pages/form/Select'], resolve),
        meta: {
          title: '下拉框和懒加载',
        },
      },
      {
        path: 'time',
        component: (resolve) => require(['@/pages/form/Time'], resolve),
        meta: {
          title: '时间选择器',
        },
      },
      {
        path: 'upload',
        component: (resolve) => require(['@/pages/form/Upload'], resolve),
        meta: {
          title: '文件上传',
        },
      },
      {
        path: 'relate',
        component: (resolve) => require(['@/pages/form/Relate'], resolve),
        meta: {
          title: '联动关系',
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
