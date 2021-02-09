### 数据校验

如下示例，提供三种场景：

1. 强校验 **required**：是否输入的普通校验
2. 正则校验 **pattern**：满足密码框等需要通过正则表达式的校验
3. 异步校验 **validator**：通过后端接口校验

关于 **rule** 属性的细节，[详见：表单验证](https://element.eleme.cn/2.0/#/zh-CN/component/form#biao-dan-yan-zheng)

::: demo

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <el-row type="flex" justify="center">
          <el-button @click="submit" type="primary">提交</el-button>
          <el-button @click="reset" type="warning" style="margin-left:10px;">重置</el-button>
        </el-row>
      </elsa-form>
    </el-col>
  </el-row>
</template>

<script>
  const fields = {
    name: {
      label: '用户名',
      extra: '示例：异步校验。输入"eminoda"将提示错误',
      elTag: 'el-input',
      elAttrs: {
        placeholder: '请输入用户名',
        clearable: true
      },
      rules: [
        { required: true, message: '用户名不能为空', trigger: 'change' },
        {
          validator: (rule, value, callback) => {
            if (value == 'eminoda') {
              callback(new Error('用户名不能为 eminoda'))
            } else if (value) {
              console.log('异步校验...')
              setTimeout(() => {
                if (value.length > 3) {
                  callback(new Error('用户名重复'))
                } else {
                  callback()
                }
              }, 1000)
            } else {
              callback()
            }
          },
          trigger: 'change'
        }
      ]
    },
    password: {
      label: '密码',
      extra: '示例：正则校验（数字+字母，字数0-16位）',
      elTag: 'el-input',
      elAttrs: {
        type: 'password',
        showPassword: true
      },
      rules: [
        { required: true, message: '密码不能为空', trigger: 'change' },
        { pattern: /^[A-Za-z0-9]{10,16}$/, message: '密码输入格式错误', trigger: 'change' }
      ]
    },
    desc: {
      label: '个人描述',
      elTag: 'el-input',
      extra: '示例：强校验',
      elAttrs: {
        type: 'textarea',
        rows: 3
      },
      rules: [{ required: true, message: '个人描述不能为空', trigger: 'change' }]
    }
  }
  export default {
    data() {
      return {
        fields,
        model: {
          name: '',
          password: '',
          desc: ''
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
