import Vue from 'vue';
import Element from 'element-ui';

import ElsaTable from './components/elsa/table/index';
import ElsaForm from './components/elsa/form/index';
import ElsaPagination from './components/elsa/pagination/index';

Vue.use(Element);
const components = [ElsaTable, ElsaForm, ElsaPagination];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { ElsaTable, ElsaForm, ElsaPagination, install };
