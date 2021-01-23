<template>
  <div>
    <h2>element 示例</h2>
    <el-table :data="dataSource" style="width: 100%">
      <el-table-column prop="date" label="日期" width="100"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <h2>elsa 示例</h2>
    <elsa-table :columns="columns" :dataSource="dataSource"> </elsa-table>
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
  }
}
</script>

<style></style>
