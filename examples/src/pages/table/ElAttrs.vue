<template>
  <div>
    <h2>边框 border + 斑马条 stripe</h2>
    <elsa-table border stripe :columns="columns" :dataSource="dataSource"> </elsa-table>
    <h2>带状态表格 row-class-name</h2>
    <elsa-table :row-class-name="tableRowClassName" :columns="columns" :dataSource="dataSource"> </elsa-table>
    <h2>固定列 fixed + 定宽 width</h2>
    <elsa-table :columns="fixedColumns" :dataSource="dataSource"> </elsa-table>
    <h2>选择行 section</h2>
    <elsa-table :columns="elAttrsColumns" :dataSource="dataSource" @selection-change="handleSelectionChange"> </elsa-table>
    <h2>单元格合并</h2>
    <elsa-table border :columns="tableMergeColumns" :dataSource="dataSource" :span-method="arraySpanMethod"> </elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user'
import columns from './columns/basicColumns'
import { fixedColumns, elAttrsColumns, tableMergeColumns } from './columns/elAttrsColumns'

export default {
  data() {
    return {
      dataSource: getUserList(5),
      columns,
      fixedColumns,
      elAttrsColumns,
      tableMergeColumns
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSelectionChange(selections) {
      const ids = selections.map(selection => selection.id).sort()
      this.$alert(`当前选中 id：${ids.join('，')}`, '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex)
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
  }
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
