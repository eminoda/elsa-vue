<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":" @change="handleChange">
        <template slot="nameCheck">
          <el-button type="primary" size="small" style="margin-left:10px;">校验</el-button>
        </template>
        <template slot="name-icon">
          Http://
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
export default {
  data() {
    return {
      fields: {
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
          rules: [{ required: true, message: '前/后端不能为空', trigger: 'change' }],
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
          rules: [{ required: true, trigger: 'change' }],
          options: [
            { label: 'angular', value: 'angular' },
            { label: 'react', value: 'react' },
            { label: 'vue', value: 'vue' },
            { label: 'nodejs', value: 'nodejs' },
            { label: 'mysql', value: 'mysql' },
            { label: 'java', value: 'java' }
          ]
        }
      },
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

<style></style>
