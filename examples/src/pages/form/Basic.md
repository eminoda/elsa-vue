## elsa-form 表单

基于 element-form，提供一个配置化的表单组件

### 基本用法

::: demo

```html
<template>
  <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":" @change="handleChange">
    <el-row type="flex" justify="center">
      <el-button @click="submit" type="primary">提交</el-button>
      <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
    </el-row>
  </elsa-form>
</template>
<script>
  const fields = {
    // 一般输入框
    name: {
      label: '用户名',
      elTag: 'el-input',
      elAttrs: {
        placeholder: '请输入用户名',
        clearable: true
      },
      elSlots: {
        prepend: 'name-icon'
      },
      rules: [{ required: true, message: '用户名不能为空', trigger: 'change' }]
    },
    // 密码输入框
    password: {
      label: '密码',
      elTag: 'el-input',
      elAttrs: {
        type: 'password',
        showPassword: true
      },
      rules: [{ required: true, trigger: 'change' }]
    },
    // 文本框
    desc: {
      label: '个人描述',
      elTag: 'el-input',
      elAttrs: {
        type: 'textarea',
        rows: 3
      }
    },
    // 多选框 checkbox
    company: {
      label: '就职公司',
      elTag: 'el-checkbox',
      elAttrs: {},
      rules: [{ required: true, trigger: 'change' }],
      options: [
        { label: 'alibaba', value: 'alibaba' },
        { label: 'tencent', value: 'tencent' },
        { label: 'baidu', value: 'baidu' }
      ]
    },
    // 单选框 radio
    end: {
      label: '前/后端',
      elTag: 'el-radio',
      elAttrs: {},
      options: [
        { label: '前端', value: 1 },
        { label: '后端', value: 2 }
      ]
    },
    // 下拉框
    skill: {
      label: '技术栈',
      elTag: 'el-select',
      elAttrs: {},
      options: [
        { label: 'angular', value: 'angular' },
        { label: 'react', value: 'react' },
        { label: 'vue', value: 'vue' },
        { label: 'nodejs', value: 'nodejs' },
        { label: 'mysql', value: 'mysql' },
        { label: 'java', value: 'java' }
      ]
    }
  }
  export default {
    data() {
      return {
        fields,
        model: {
          name: '',
          password: '',
          desc: '',
          company: [],
          end: '',
          skill: ''
        }
      }
    },
    methods: {
      submit() {
        this.$refs.myFormRef.validate((err, data) => {
          if (err) {
            console.log(err)
            this.$message.error('表单错误')
          } else {
            console.log(data)
          }
        })
      },
      reset() {
        this.$refs.myFormRef.resetFields()
        this.$message.success('表单已重置')
      },
      handleChange(data) {
        console.log(data)
      }
    }
  }
</script>
```

:::

## API

### ElsaForm 属性

| 参数       | 说明                            | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------------- | ------- | ------ | ------ |
| config     | [表单项配置](#elsaform.config)  | Object  |        |        |
| model      | 表单数据模型                    | Object  |        |        |
| layout     | [表单布局](#elsaform.layout)    | Arrray  |        |        |
| disabled   | 表单整体禁用                    | Boolean |        | false  |
| ...elProps | [表单项配置](#elsaform.elprops) | Object  |        |        |

### ElsaForm.config

| 参数               | 说明                                                                                           | 类型                             | 可选值                                                        | 默认值                  |
| ------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- | ----------------------- |
| field              | 表单项字段，与 model 属性对应                                                                  | Object                           |
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
| field.elSlots      | elTag 内签模板（比如：upload 中的内容，default 为默认插槽）                                    | String                           |

支持 **el-form-item** 属性，[详见：Form-Item Attributes](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-item-attributes)

### ElsaForm.field.elAttrs

对应 el-tag element 表单组件（el-input...）的属性说明，**如下是做过二次封装的属性**：

| 参数         | 说明                            | 类型                                        | 可选值 | 默认值 |
| ------------ | ------------------------------- | ------------------------------------------- | ------ | ------ |
| disabled     | 禁用                            | Function({model})/ Boolean                  |
| isRemote     | elTag 为 el-select 的延迟加载   | Boolean                                     |        |
| remoteMethod | elTag 为 el-select 的延迟加载   | Function(done,{model}) / Boolean            |
| lazy         | elTag 为 el-cascader 的延迟加载 | Boolean                                     |        |
| lazyLoad     | elTag 为 el-cascader 的延迟加载 | Function(node, resolve, { done }) / Boolean |

### ElsaForm.layout

| 参数     | 说明                              | 类型            | 可选值     | 默认值 |
| -------- | --------------------------------- | --------------- | ---------- | ------ |
| elTag    | element 表单标签                  | String          | el-row/col |
| elAttrs  | 表单项属性（参考 elTag 对应组件） | Object          |            |
| children | 子项                              | Object\<layout> |            |
| field    | 表单项字段                        | String          |            |

elAttrs 支持 **el-row/col** 属性，[详见：Row/Col Attributes](https://element.eleme.cn/2.0/#/zh-CN/component/layout#row-attributes)

### ElsaForm.elProps

| 参数         | 说明             | 类型   | 可选值                | 默认值 |
| ------------ | ---------------- | ------ | --------------------- | ------ |
| label-width  | 表单域标签的宽度 | String |                       |        |
| label-suffix | 表单域标签的后缀 | String |                       |        |
| size         | 尺寸             | String | medium / small / mini |        |

支持 **el-form** 属性，[详见：Form Attributes](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-attributes)

### ElsaForm 方法

| 参数          | 说明         | 类型                             | 可选值 | 默认值 |
| ------------- | ------------ | -------------------------------- | ------ | ------ |
| validate      | 表单数据校验 | Function(err,model)              |
| resetFields   | 重置表单项   | Function(props<Array \| String>) |
| clearValidate | 校验结果清空 | Function(props<Array \| String>) |

支持 **el-form** 方法，[详见：Form Methods](https://element.eleme.cn/2.0/#/zh-CN/component/form#form-methods)
