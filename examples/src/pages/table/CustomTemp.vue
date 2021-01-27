<template>
  <div>
    <h2>自定义模板</h2>
    <elsa-table v-loading="loading" :columns="columns" :dataSource="dataSource" :pagination="pagination">
      <template slot="more" slot-scope="scope">
        <div>{{ scope.row.name }} is {{ scope.row.age }} 岁</div>
      </template>
      <div slot="action" slot-scope="scope">
        <el-button type="primary" size="small" @click="handleAdd(scope.row)">查看</el-button>
      </div>
    </elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user'
import columns from './columns/customColumns'

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
        currentChange: currentPage => {
          console.log('currentPage change', currentPage)
          this.pagination.currentPage = currentPage
          this.getList()
        },
        sizeChange: pageSize => {
          console.log('pageSize change', pageSize)
          this.pagination.pageSize = pageSize
          this.pagination.currentPage = 1
          this.getList()
        }
      }
    }
  },
  methods: {
    getList() {
      console.log('currentPage:', this.pagination.currentPage, 'pageSize:', this.pagination.pageSize)
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.dataSource = getUserList(5)
        this.pagination.total = 40
      }, 1000)
    },
    handleAdd(data) {
      this.$alert(`当前选中 id：${data.id}`, '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style></style>
