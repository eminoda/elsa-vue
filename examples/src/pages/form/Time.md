### 时间控件

支持 el-date-picker，el-time-picker，el-xxx-picker 组件

并提供如下几种场景：

1. 时间范围的使用（开始时间+结束时间）
2. 时间范围的限定（部分 disabled）

::: demo

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="16">
      <elsa-form ref="myFormRef" :layout="layout" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
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
    { field: 'birthday' },
    { field: 'getupTime' },
    { field: 'trainingDateRange' },
    {
      elTag: 'el-row',
      elAttrs: {
        gutter: 10,
        type: 'flex',
        justify: 'start'
      },
      children: [
        { elTag: 'el-col', field: 'workStartTime', elAttrs: { span: 12 } },
        { elTag: 'el-col', field: 'workEndTime', elAttrs: { span: 12 } }
      ]
    }
  ]
  const fields = {
    birthday: {
      label: '出生日期',
      elTag: 'el-date-picker',
      elAttrs: {}
    },
    getupTime: {
      label: '起床时刻',
      elTag: 'el-time-picker',
      elAttrs: {
        valueFormat: 'HH:mm:ss'
      }
    },
    trainingDateRange: {
      label: '培训经历',
      elTag: 'el-date-picker',
      elAttrs: {
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        type: 'datetimerange',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      }
    },
    workStartTime: {
      label: '工作起始时间',
      elTag: 'el-date-picker',
      elAttrs: {
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        pickerOptions: {
          disabledDate: function(value, { model }) {
            if (model.workEndTime) {
              return this.$moment(value).format('YYYY-MM-DD') < model.workEndTime ? false : true
            } else {
              return false
            }
          }
        }
      }
    },
    workEndTime: {
      label: '工作结束时间',
      elTag: 'el-date-picker',
      elAttrs: {
        format: 'yyyy-MM-dd',
        valueFormat: 'yyyy-MM-dd',
        pickerOptions: {
          disabledDate: function(value, { model }) {
            if (model.workStartTime) {
              return this.$moment(value).format('YYYY-MM-DD') > model.workStartTime ? false : true
            } else {
              return false
            }
          }
        }
      }
    }
  }
  export default {
    data() {
      return {
        fields,
        layout,
        model: {
          birthday: '',
          getupTime: '',
          trainingDateRange: [],
          workStartTime: '',
          workEndTime: ''
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
