<template>
  <div>
    <h2>element 示例</h2>
    <el-table :data="dataSource" style="width: 100%">
      <el-table-column prop="date" label="日期" width="100"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentChange"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
    >
    </el-pagination>
    <h2>elsa 示例</h2>
    <elsa-table v-loading="loading" :columns="columns" :dataSource="dataSource" :pagination="pagination"></elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user';
import columns from './columns/basicColumns';

export default {
  data() {
    return {
      dataSource: [],
      columns,
      loading: false,
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        currentChange: (currentPage) => {
          console.log('currentPage change', currentPage);
          this.pagination.currentPage = currentPage;
          this.getList();
        },
        sizeChange: (pageSize) => {
          console.log('pageSize change', pageSize);
          this.pagination.pageSize = pageSize;
          this.pagination.currentPage = 1;
          this.getList();
        },
      },
    };
  },
  methods: {
    getList() {
      console.log('currentPage:', this.pagination.currentPage, 'pageSize:', this.pagination.pageSize);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.dataSource = getUserList(5);
        this.pagination.total = 40;
      }, 1000);
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style></style>
