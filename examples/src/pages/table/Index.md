## elsa-table 表格

基于 element-table，提供一个配置化的表格组件

### 基本用法

::: demo

```html
<template>
  <elsa-table :columns="columns" :dataSource="dataSource"> </elsa-table>
</template>

<script>
  export default {
    data() {
      return {
        dataSource: this.$buildList(5),
        columns: [
          { label: '日期', align: 'left', prop: 'date', width: '150' },
          { label: '姓名', align: 'center', prop: 'name', width: '180' },
          { label: '地址', align: 'left', prop: 'address' }
        ]
      }
    }
  }
</script>

<style></style>
```

:::

### 带分页

::: demo

```html
<template>
  <elsa-table v-loading="loading" :columns="columns" :dataSource="dataSource" :pagination="pagination"></elsa-table>
</template>

<script>
  const columns = [
    { label: '序号', align: 'center', type: 'index', width: '80' },
    { label: '姓名', align: 'center', prop: 'name', width: '120' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      width: '150',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard', width: '200' },
    { label: '出生日期', align: 'center', prop: 'date', width: '140' },
    { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
  ]

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
          this.dataSource = this.$buildList(5)
          this.pagination.total = 40
        }, 1000)
      }
    },
    created() {
      this.getList()
    }
  }
</script>
```

:::

### 一些常用属性

::: demo

```html
<template>
  <div>
    <div style="margin:10px 0;">边框 border + 斑马条 stripe</div>
    <elsa-table border stripe :columns="columns" :dataSource="dataSource"> </elsa-table>
    <div style="margin:10px 0;">带状态表格 row-class-name</div>
    <elsa-table :row-class-name="tableRowClassName" :columns="columns" :dataSource="dataSource"> </elsa-table>
    <div style="margin:10px 0;">固定列 fixed + 定宽 width</div>
    <elsa-table :columns="fixedColumns" :dataSource="dataSource"> </elsa-table>
    <div style="margin:10px 0;">选择行 section</div>
    <elsa-table :columns="elAttrsColumns" :dataSource="dataSource" @selection-change="handleSelectionChange"> </elsa-table>
    <div style="margin:10px 0;">单元格合并</div>
    <elsa-table border :columns="tableMergeColumns" :dataSource="dataSource" :span-method="arraySpanMethod"> </elsa-table>
  </div>
</template>

<script>
  const fixedColumns = [
    { label: '序号', align: 'center', type: 'index', width: '80', fixed: true },
    { label: '姓名', align: 'center', prop: 'name', width: '120' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      width: '150',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
    { label: '出生日期', align: 'center', prop: 'date', width: '140' },
    { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
  ]
  const elAttrsColumns = [
    { type: 'selection', width: '80' },
    { label: '序号', align: 'center', type: 'index', width: '80' },
    { label: '姓名', align: 'center', prop: 'name', width: '120' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      width: '150',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
    { label: '出生日期', align: 'center', prop: 'date', width: '140' },
    { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
  ]
  const tableMergeColumns = [
    { label: '姓名', align: 'center', prop: 'name', width: '120' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard' },
    { label: '出生日期', align: 'center', prop: 'date' }
  ]

  export default {
    data() {
      return {
        dataSource: this.$buildList(5),
        columns: [
          { label: '日期', align: 'left', prop: 'date', width: '150' },
          { label: '姓名', align: 'center', prop: 'name', width: '180' },
          { label: '地址', align: 'left', prop: 'address' }
        ],
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
            return [1, 2]
          } else if (columnIndex === 1) {
            return [0, 0]
          }
        }
      }
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
```

:::

### 自定义模板

::: demo

```html
<template>
  <elsa-table v-loading="loading" :columns="columns" :dataSource="dataSource" :pagination="pagination">
    <template slot="more" slot-scope="scope">
      <div>{{ scope.row.name }} is {{ scope.row.age }} 岁</div>
    </template>
    <div slot="action" slot-scope="scope">
      <el-button type="primary" size="small" @click="handleAdd(scope.row)">查看</el-button>
    </div>
  </elsa-table>
</template>

<script>
  const columns = [
    { type: 'expand', customRender: 'more', width: '80' },
    { label: '姓名', align: 'center', prop: 'name', width: '120' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      width: '150',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
    { label: '出生日期', align: 'center', prop: 'date', width: '140' },
    { label: '个人描述', align: 'center', prop: 'desc', width: '500', align: 'left', showOverflowTooltip: true },
    { label: '操作', align: 'center', prop: 'date', width: '120', customRender: 'action', fixed: 'right' }
  ]
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
          this.dataSource = this.$buildList(5)
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
```

:::

### 树形数据和懒加载

::: demo

```html
<template>
  <elsa-table
    row-key="id"
    default-expand-all
    lazy
    :indent="20"
    :load="load"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    v-loading="loading"
    :columns="columns"
    :dataSource="dataSource"
    :pagination="pagination"
  ></elsa-table>
</template>

<script>
  const columns = [
    { label: '序号', align: 'center', type: 'index', width: '80' },
    { label: '姓名', align: 'center', prop: 'name', width: '150' },
    { label: '年龄', align: 'center', prop: 'age', width: '120' },
    {
      label: '职级',
      align: 'center',
      prop: 'title',
      width: '150',
      formatter(row) {
        const titles = ['初级程序员', '中级程序员', '高级程序员']
        return titles[row.title]
      }
    },
    { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
    { label: '出生日期', align: 'center', prop: 'date', width: '140' },
    { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
  ]

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
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve(this.$buildList(5, tree.id))
        }, 1000)
      },
      getList() {
        console.log('currentPage:', this.pagination.currentPage, 'pageSize:', this.pagination.pageSize)
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.dataSource = this.$buildList(5)
          this.pagination.total = 40
        }, 1000)
      }
    },
    created() {
      this.getList()
    }
  }
</script>

<style></style>
```

:::

## API

### **ElsaTable Attributes**

| 参数       | 说明                                | 类型   | 可选值 | 默认值 |
| ---------- | ----------------------------------- | ------ | ------ | ------ |
| columns    | [列信息](#ElsaTable.columns)        | Array  |        |        |
| dataSource | 数据源                              | Array  |        |        |
| pagination | 分页信息                            | Object |        |        |
| ...elProps | [el-table 属性](#ElsaTable.elProps) |        |        |        |

#### **ElsaTable.columns**

| 参数                  | 说明                                                                  | 类型                             | 可选值                 | 默认值 |
| --------------------- | --------------------------------------------------------------------- | -------------------------------- | ---------------------- | ------ |
| type                  | selection 添加选择框列</br> index 添加序号列</br> expand 展示更多内容 | String                           | selection/index/expand |        |
| label                 | 标题                                                                  | String                           |                        |        |
| prop                  | 解析字段                                                              | String                           |                        |        |
| width                 | 对应列的宽度                                                          | String                           |                        |        |
| fixed                 | 列是否固定在左侧或者右侧，true 表示固定在左侧                         | String/Boolean                   | true, left, right      |        |
| formatter             | 数据格式化                                                            | Function(row, column, cellValue) |                        |        |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                                        | Boolean                          |                        |        |

更多详见：[el-table column](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-column-attributes)

#### **ElsaTable.elProps**

| 参数     | 说明               | 类型    | 可选值                | 默认值 |
| -------- | ------------------ | ------- | --------------------- | ------ |
| ~~data~~ | 以 dataSource 代替 |         |                       |        |
| border   | 是否带有纵向边框   | Boolean |                       | false  |
| size     | 尺寸               | String  | medium / small / mini |        |
| fit      | 列的宽度是否自撑开 | Boolean |                       | true   |

更多详见：[el-table attributes](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-attributes)

### **ElsaTable Events**

| 参数             | 说明                           | 类型                 | 可选值 | 默认值 |
| ---------------- | ------------------------------ | -------------------- | ------ | ------ |
| selection-change | 当选择项发生变化时会触发该事件 | Function(selections) |        |        |

更多详见：[el-table events](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-events)

😬 注：部分 Events 根据现在文件结构实现较困难（比如：排序，过滤，合并表单...），可把 config 文件内容定义在 data 中来实现（而非 import 方式）
