import Vue from 'vue';
import Element from 'element-ui';

import ElsaTable from './components/table';
import ElsaForm from './components/form';
import ElsaPagination from './components/pagination';
import ElCard from './components/card';

Vue.use(Element);
const components = [ElsaTable, ElsaForm, ElsaPagination, ElCard];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { ElsaTable, ElsaForm, ElsaPagination, ElCard, install };
