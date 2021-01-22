<template>
  <div>
    <elsa-table :row-class-name="tableRowClassName" border :columns="columns" :dataSource="dataSource" @selection-change="handleSelectionChange"> </elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user'
import columns from './columns/basicColumns'

export default {
  data() {
    return {
      dataSource: getUserList(5),
      columns
    }
  },
  methods: {
    handleSelectionChange(selections) {
      const ids = selections.map(selection => selection.id).sort()
      this.$alert(`当前选中 id：${ids.join('，')}`, '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style></style>
