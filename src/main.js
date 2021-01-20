import Vue from 'vue';
import Element from 'element-ui';

import ElsaTable from './components/elsa/table/index';
import ElsaForm from './components/elsa/form/index';

Vue.use(Element);

const components = [ElsaTable, ElsaForm];
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { ElsaTable, ElsaForm };
