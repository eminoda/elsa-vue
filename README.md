# elsa

:zap: elsa（eleme simple admin）基于 element-ui 封装 el-form，el-table 等组件，适用于快速开发后台管理项目。

[🚀 Document 和 Demo](http://eminoda.github.io/elsa)

## Quickstart

```js
npm i elsa -S
```

```js
// vue main.js
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(Elsa)
```

## Feature

- [ ] elsa-form
  - [x] 自定义布局
  - [x] 数据回显
  - [x] 表单校验和重置
  - [x] tip 信息提示
  - [x] 嵌套 nest 对象的解析
  - [x] 表单整体 disabled 设置
  - [x] 表单项：动态/联动
    - [x] 禁用/可用
    - [x] 显示/隐藏
    - [x] 动态修改校验规则
    - [ ] 内部支持 \$store
  - [ ] 支持表单项
    - [x] 输入框 input
      - [ ] 历史信息下拉展示
    - [x] 下拉框 select
      - [x] 支持延迟加载
      - [x] tags 多选模式
    - [x] 多选框 checkbox
    - [x] 单选框 radio
    - [x] 级联选择
    - [x] 时间控件 date-picker
      - [x] 不同表单项之间的时间跨度限制
    - [x] 文件上传 upload
- [x] else-table
  - [x] 可配置列表列
  - [x] 支持分页控件配置
  - [x] 支持树形数据展示及懒加载
## elsa-table

用法：
1. 获取 Array 类型的数据源 dataSource
2. 根据 dataSource 中的对象属性，配置显示的列 columns 信息
3. 设置分页参数 pagination

```html
<elsa-table border :columns="columns" :dataSource="dataSource" :pagination="pagination"/>
```

```js
export default {
  data() {
    return {
      dataSource: [
        { name: 'eminoda', age: 30 },
        { name: 'foo', age: 40 },
        { name: 'bar', age: 50 }
      ],
      columns: [
        { label: '序号', align: 'center', type: 'index', width: '50' },
        { label: '姓名', align: 'center', prop: 'name', width: '100' },
        { label: '年龄', align: 'center', prop: 'age', width: '100' }
      ],
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        currentChange: (currentPage) => {
        },
        sizeChange: (pageSize) => {
        },
      },
    }
  }
}
```

### **ElsaTable Attibutes**

| 参数       | 说明                                                                                         | 类型   | 可选值 | 默认值 |
| ---------- | -------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| columns    | 列信息                                                                                       | Array  |
| dataSource | 数据源                                                                                       | Array  |
| pagination | 分页信息                                                                                     | Object |
| ...elProps | [el-table attributes](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-attributes) |
### **ElsaTable Events**

| 参数             | 说明                           | 类型                 | 可选值 | 默认值 |
| ---------------- | ------------------------------ | -------------------- | ------ | ------ |
| selection-change | 当选择项发生变化时会触发该事件 | Function(selections) |

更多详见：[el-table events](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-events)

😬注：部分 Events 根据现在文件结构实现较困难，未做 Demo 示例（比如：排序，过滤，合并表单...）。
### config

| 参数                  | 说明                                                                  | 类型                             | 可选值                 | 默认值 |
| --------------------- | --------------------------------------------------------------------- | -------------------------------- | ---------------------- | ------ |
| type                  | selection 添加选择框列</br> index 添加序号列</br> expand 展示更多内容 | String                           | selection/index/expand |
| label                 | 标题                                                                  | String                           |
| prop                  | 解析字段                                                              | String                           |
| width                 | 对应列的宽度                                                          | String                           |
| fixed                 | 列是否固定在左侧或者右侧，true 表示固定在左侧                         | String/Boolean                   | true, left, right      |
| formatter             | 数据格式化                                                            | Function(row, column, cellValue) |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                                        | Boolean                          |

更多详见：[el-table column](https://element.eleme.cn/2.0/#/zh-CN/component/table#table-column-attributes)