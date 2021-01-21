<template>
  <div>
    <elsa-table border :columns="columns" :dataSource="dataSource" @selection-change="handleSelectionChange"></elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user';
import columns from './columns/basicColumns';

export default {
  data() {
    return {
      dataSource: getUserList(5),
      columns,
    };
  },
  methods: {
    handleSelectionChange(selections) {
      const ids = selections.map((selection) => selection.id).sort();
      this.$alert(`当前选中 id：${ids.join('，')}`, '提示', {
        confirmButtonText: '确定',
        type: 'warning',
      });
    },
  },
};
</script>

<style></style>
