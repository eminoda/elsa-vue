### 布局

示例几种自定义布局场景

1. 通过 el-row/col 实现的 **栅栏布局**
2. 通过 **elStyle.width** 单独调整表单项 width
3. 搭配 **customRender** ，完成更多布局可能
4. 以及 **layout** 一些简写方式

::: demo

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :layout="layout" :model="model" labelWidth="auto" label-suffix=":">
        <template slot="nameCheck">
          <el-button type="primary" size="small" style="margin-left:10px;">校验</el-button>
        </template>
        <el-row type="flex" justify="center">
          <el-button @click="submit" type="primary">提交</el-button>
          <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
        </el-row>
      </elsa-form>
    </el-col>
  </el-row>
</template>

<script>
  const layout = [
    {
      elTag: 'el-row',
      elAttrs: {
        gutter: 10,
        type: 'flex',
        justify: 'start'
      },
      children: [
        { elTag: 'el-col', field: 'A', elAttrs: { span: 12 } },
        { elTag: 'el-col', field: 'B', elAttrs: { span: 12 } }
      ]
    },
    {
      elTag: 'el-row',
      elAttrs: {
        gutter: 10,
        type: 'flex',
        justify: 'start'
      },
      children: [
        { elTag: 'el-col', field: 'C', elAttrs: { span: 6 } },
        { elTag: 'el-col', field: 'D', elAttrs: { span: 8 } },
        { elTag: 'el-col', field: 'E', elAttrs: { span: 10 } }
      ]
    },
    {
      elTag: 'el-row',
      elAttrs: {
        type: 'flex',
        justify: 'end'
      },
      field: 'F'
    },
    { field: 'G' },
    { field: 'H' }
  ]
  const fields = {
    A: {
      label: 'A',
      elTag: 'el-input',
      extra: '栅栏布局'
    },
    B: {
      label: 'B',
      elTag: 'el-input'
    },
    C: {
      label: 'C',
      elTag: 'el-input',
      extra: '栅栏布局'
    },
    D: {
      label: 'D',
      elTag: 'el-input'
    },
    E: {
      label: 'E',
      elTag: 'el-input'
    },
    F: {
      label: 'F',
      elTag: 'el-input',
      extra: '栅栏布局'
    },
    G: {
      label: 'G',
      elTag: 'el-input',
      extra: '代码简写'
    },
    H: {
      label: 'H',
      elTag: 'el-input',
      extra: '单独调整 width',
      customRender: 'nameCheck',
      elStyle: {
        width: '80%'
      }
    }
  }
  export default {
    data() {
      return {
        fields,
        layout,
        model: {
          A: '',
          B: '',
          C: '',
          D: '',
          E: '',
          F: '',
          G: '',
          H: ''
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
      }
    }
  }
</script>

<style></style>
```

:::
