# elsa

:zap: elsa（eleme simple admin）基于 element-ui 封装 el-form，el-table 等组件，适用于快速开发后台管理项目。

用法示例，见：[🚀 Document 和 Demo](http://eminoda.github.io/elsa)

## Quickstart

```js
npm i elsa-vue -S
```

```js
// vue main.js
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Elsa from 'elsa-vue'

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
    - [ ] 动态修改多选项 options
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
<elsa-table border :columns="columns" :dataSource="dataSource" :pagination="pagination" />
```

```js
export default {
  data() {
    return {
      dataSource: [
        { name: 'eminoda', age: 30 },
        { name: 'foo', age: 40 },
        { name: 'bar', age: 50 },
      ],
      columns: [
        { label: '序号', align: 'center', type: 'index', width: '50' },
        { label: '姓名', align: 'center', prop: 'name', width: '100' },
        { label: '年龄', align: 'center', prop: 'age', width: '100' },
      ],
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        currentChange: (currentPage) => {},
        sizeChange: (pageSize) => {},
      },
    }
  },
}
```

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

## elsa-form

用法：

1. 定义表单数据模型 model
2. 配置表单项 field ，定义布局（可选）

```html
<elsa-form :config="fields" :model="model" labelWidth="auto" label-suffix=":">
  <el-row type="flex" justify="center">
    <el-button @click="submit" type="primary">提交</el-button>
    <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
  </el-row>
</elsa-form>
```

```js
export default {
  data() {
    return {
      fields: {
        name: {
          label: '用户名',
          elTag: 'el-input',
          elAttrs: {
            placeholder: '请输入用户名',
          },
          customRender: 'nameCheck',
          rules: [{ required: true, message: '用户名不能为空', trigger: 'change' }],
        },
        password: {
          label: '密码',
          elTag: 'el-input',
          elAttrs: {
            type: 'password',
            showPassword: true,
          },
          rules: [{ required: true, trigger: 'change' }],
        },
      },
      model: {
        name: '',
        password: '',
      },
    }
  },
}
```

### **ElsaForm Attributes**

| 参数       | 说明                            | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------------- | ------- | ------ | ------ |
| config     | [表单项配置](#ElsaForm.config)  | Object  |        |        |
| model      | 表单数据模型                    | Object  |        |        |
| layout     | [表单布局](#ElsaForm.layout)    | Arrray  |        |        |
| disabled   | 表单整体禁用                    | Boolean |        | false  |
| ...elProps | [表单项配置](#ElsaForm.elProps) | Object  |        |        |

#### **ElsaForm.config**

| 参数               | 说明                                                                                           | 类型                             | 可选值                                                        | 默认值                  |
| ------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- | ----------------------- |
| field              | [表单项字段，与 model 属性对](#ElsaForm.field.elAttrs)应                                       | Object                           |
| field.label        | 名称                                                                                           | String                           |
| field.elTag        | element 表单标签                                                                               | String                           | el-input/select/radio/cascader/date-picker/time-picker/upload |
| field.elAttrs      | 表单项属性（参考 elTag 对应组件）                                                              | Object                           |
| field.elStyle      | 表单项 style 样式                                                                              | Object                           |
| field.extra        | 提示信息                                                                                       | String                           |
| field.extraIcon    | 提示信息 icon 图标                                                                             | String                           |                                                               | el-icon-warning-outline |
| field.rules        | [表单校验规则](https://element.eleme.cn/2.0/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze) | Array                            |
| field.options      | 当为 check，select 作为数据展示                                                                | Array                            |
| field.visible      | 联动，可根据 model[filed] 来控制 **显示隐藏**                                                  | Boolean/String/Function({model}) |
| field.customRender | 展示于 elTag 右侧的模板                                                                        | String                           |
| field.slotRender   | elTag 内部的模板（比如：upload 中的内容）                                                      | String                           |

更多详见：[el-form-item methods](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-item-attributes)

#### **ElsaForm.field.elAttrs**

示例一些特殊属性

| 参数         | 说明                            | 类型                                        | 可选值 | 默认值 |
| ------------ | ------------------------------- | ------------------------------------------- | ------ | ------ |
| disabled     | 禁用                            | Function({model})/ Boolean                  |
| isRemote     | elTag 为 el-select 的延迟加载   | Boolean                                     |        |
| remoteMethod | elTag 为 el-select 的延迟加载   | Function(done,{model}) / Boolean            |
| lazy         | elTag 为 el-cascader 的延迟加载 | Boolean                                     |        |
| lazyLoad     | elTag 为 el-cascader 的延迟加载 | Function(node, resolve, { done }) / Boolean |

#### **ElsaForm.layout**

| 参数     | 说明                              | 类型           | 可选值     | 默认值 |
| -------- | --------------------------------- | -------------- | ---------- | ------ |
| elTag    | element 表单标签                  | String         | el-row/col |
| elAttrs  | 表单项属性（参考 elTag 对应组件） | Object         |            |
| children | 子项                              | Object<layout> |            |
| field    | 表单项字段                        | String         |            |

#### **ElsaForm.elProps**

| 参数         | 说明             | 类型   | 可选值                | 默认值 |
| ------------ | ---------------- | ------ | --------------------- | ------ |
| label-width  | 表单域标签的宽度 | String |                       |        |
| label-suffix | 表单域标签的后缀 | String |                       |        |
| size         | 尺寸             | String | medium / small / mini |        |

更多详见：[el-form attributes](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-attributes)

### **ElsaForm Methods**

| 参数          | 说明         | 类型                             | 可选值 | 默认值 |
| ------------- | ------------ | -------------------------------- | ------ | ------ |
| validate      | 表单数据校验 | Function(err,model)              |
| resetFields   | 重置表单项   | Function(props<Array \| String>) |
| clearValidate | 校验结果清空 | Function(props<Array \| String>) |

更多详见：[el-form methods](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-methods)
