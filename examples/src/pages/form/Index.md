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

### 布局

示例几种自定义布局场景：

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

### 下拉框

示例几种场景：

1. 通过 **options** 预设下拉框数据
2. 数据通过后端接口 **异步加载** 获得
3. 通过 **multiple** 属性，定义多选
4. **级联树型数据** 的下拉框

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
  let id = 0
  const fields = {
    company: {
      label: '就职公司',
      elTag: 'el-select',
      elAttrs: {},
      options: [
        { label: 'alibaba', value: 'alibaba' },
        { label: 'tencent', value: 'tencent' },
        { label: 'baidu', value: 'baidu' }
      ]
    },
    city: {
      label: '城市',
      extra: '示例：延迟加载',
      elTag: 'el-select',
      elAttrs: {},
      elAttrs: {
        isRemote: true,
        remoteMethod: function({ done, model }) {
          setTimeout(() => {
            done([
              { label: '上海', value: 'shanghai' },
              { label: '北京', value: 'beijing' }
            ])
          }, 500)
        }
      }
    },
    skill: {
      label: '技术栈',
      extra: '示例：多选',
      elTag: 'el-select',
      elAttrs: {
        multiple: true
      },
      options: [
        { label: 'angular', value: 'angular' },
        { label: 'react', value: 'react' },
        { label: 'vue', value: 'vue' },
        { label: 'nodejs', value: 'nodejs' },
        { label: 'mysql', value: 'mysql' },
        { label: 'java', value: 'java' }
      ]
    },
    tree: {
      label: '树型数据',
      elTag: 'el-cascader',
      extra: '示例：级联选择',
      elAttrs: {
        visibleChange(...args) {},
        props: {
          lazy: true,
          lazyLoad(node, resolve, { done }) {
            const { level } = node
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 }).map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }))
              done(nodes)
            }, 1000)
          }
        }
      }
    }
  }

  export default {
    data() {
      return {
        fields,
        model: {
          company: '',
          city: '',
          skill: [],
          tree: []
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

### 文件上传

::: demo 提供 **elSlots** 设置 **default** 属性（默认插槽），给上传组件内嵌操作模板

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <template slot="upload" :slot-scope="{ model }">
          <el-button size="small" type="primary">上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
  const fields = {
    filePath: {
      label: '上传文件',
      elTag: 'el-upload',
      elSlots: {
        default: 'upload'
      },
      limit: 1,
      elClass: 'upload-wrap',
      elAttrs: {
        action: '',
        onExceed(files, fileList) {
          this.$message.warning('上传文件数量超过限制（取 limit 字段）')
        },
        onPreview(file) {},
        beforeUpload(file) {
          const fileSize = 10
          if (file.size / 1024 / 1024 > fileSize) {
            this.$message.error(`上传文件不能超过 ${fileSize} MB`)
            return false
          }
        },
        onChange(file, fileList) {
          // console.log(file, fileList)
        },
        onSuccess(response, file, fileList, { done }) {
          if (response && response.data.url) {
            done(response.data.url)
          } else {
            done()
          }
        },
        onError(err, file, fileList) {
          this.$message.error(err.message)
        },
        onProgress(event, file, fileList) {
          event.percent = parseInt(Math.round((event.loaded / event.total) * 100))
        },
        httpRequest({ action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials }) {
          let formData = new FormData()
          formData.append('file', file)

          this.$http({
            // url: '/api/upload',
            url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // antd upload api
            method: 'post',
            data: formData,
            onUploadProgress(progressEvent) {
              onProgress(progressEvent)
            }
          })
            .then(response => {
              onSuccess(response)
            })
            .catch(err => {
              onError(err)
            })
        }
      },
      rules: [{ required: true }]
    }
  }

  export default {
    data() {
      return {
        fields,
        model: {
          filePath: ''
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

多文件上传

::: demo 提供 **elSlots** 设置 **default** 属性（默认插槽），给上传组件内嵌操作模板

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <template slot="upload" :slot-scope="{ model }">
          <i class="el-icon-plus"></i>
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
  const fields = {
    filePath: {
      label: '上传文件',
      elTag: 'el-upload',
      elSlots: {
        default: 'upload'
      },
      elClass: 'upload-wrap',
      elAttrs: {
        action: '',
        listType: 'picture-card',
        limit: 3,
        fileList: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
        onExceed(file, fileList) {
          this.$message.warning('上传文件数量超过限制（取 limit 字段）')
        },
        onPreview(file, { model }) {
          console.log('预览', file.url)
        },
        beforeRemove(file, fileList) {},
        beforeUpload(file) {
          const fileSize = 10
          if (file.size / 1024 / 1024 > fileSize) {
            this.$message.error(`上传文件不能超过 ${fileSize} MB`)
            return false
          }
        },
        onChange(file, fileList) {
          // console.log(file, fileList)
        },
        onSuccess(response, file, fileList, { done }) {
          if (response && response.data.url) {
            fileList[fileList.length - 1].url = response.data.url
            done(fileList.map(item => item.url))
          } else {
            done()
          }
        },
        onError(err, file, fileList) {
          this.$message.error(err.message)
        },
        onProgress(event, file, fileList) {
          event.percent = parseInt(Math.round((event.loaded / event.total) * 100))
        },
        httpRequest({ action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials }) {
          let formData = new FormData()
          formData.append('file', file)

          this.$http({
            // url: '/api/upload',
            url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // antd upload api
            method: 'post',
            data: formData,
            onUploadProgress(progressEvent) {
              onProgress(progressEvent)
            }
          })
            .then(response => {
              onSuccess(response)
            })
            .catch(err => {
              onError(err)
            })
        }
      },
      rules: [{ required: true }]
    }
  }

  export default {
    data() {
      return {
        fields,
        model: {
          filePath: []
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

### 联动关系

::: demo

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="14">
      <elsa-form ref="myFormRef" :layout="layout" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
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
        type: 'flex',
        justify: 'start'
      },
      children: [{ elTag: 'el-col', field: 'name', elAttrs: { span: 12 } }]
    },
    {
      elTag: 'el-row',
      elAttrs: {
        type: 'flex',
        justify: 'start',
        gutter: 10
      },
      children: [
        { elTag: 'el-col', field: 'age', elAttrs: { span: 12 } },
        { elTag: 'el-col', field: 'idCard', elAttrs: { span: 12 } }
      ]
    },
    { field: 'company' },
    { field: 'end' },
    { field: 'skill' }
  ]

  const fields = {
    name: {
      label: '用户名',
      extra: '未输入用户名，不能填写年龄',
      elTag: 'el-input',
      elAttrs: {
        placeholder: '请输入用户名',
        clearable: true
      },
      rules: [{ required: true, message: '用户名不能为空', trigger: 'change' }]
    },
    // 示例：默认值（placeholder，rules）
    age: {
      label: '年龄',
      elTag: 'el-input',
      extra: '当年龄大于18岁时，显示身份证号',
      elAttrs: {
        disabled({ model }) {
          return !model.name ? true : false
        }
      },
      rules: [{ required: true }, { pattern: /\d+/, message: '年龄必须为数字', trigger: 'change' }]
    },
    // 示例：表单项依赖其他项，显示/隐藏
    idCard: {
      label: '身份证号',
      elTag: 'el-input',
      elAttrs: {},
      rules: [{ required: true }],
      visible({ model }) {
        return Number(model.age) >= 18
      }
    },
    // 示例：radio
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
    // 示例：延迟加载 + disabled
    skill: {
      label: '技术栈',
      elTag: 'el-select',
      extra: '根据"前/后端"过滤"技术栈"选项',
      elAttrs: {
        isRemote: true,
        remoteMethod: function({ model, done }) {
          setTimeout(() => {
            done([
              { label: 'angular', value: 'angular', disabled: !model.end ? true : model.end == 2 },
              { label: 'react', value: 'react', disabled: !model.end ? true : model.end == 2 },
              { label: 'vue', value: 'vue', disabled: !model.end ? true : model.end == 2 },
              { label: 'nodejs', value: 'nodejs', disabled: !model.end ? true : model.end == 1 },
              { label: 'mysql', value: 'mysql', disabled: !model.end ? true : model.end == 1 },
              { label: 'java', value: 'java', disabled: !model.end ? true : model.end == 1 }
            ])
          }, 500)
        }
      },
      rules: [{ required: true, message: '技术栈不能为空', trigger: 'change' }]
    },
    company: {
      label: '就职公司',
      elTag: 'el-checkbox',
      elAttrs: {},
      rules: [{ required: true, trigger: 'change' }],
      options: [
        { label: 'alibaba', value: 'alibaba' },
        { label: 'tencent', value: 'tencent', disabled: true },
        { label: 'baidu', value: 'baidu', disabled: true }
      ],
      extra: '只有输入首个后，余下才能选择',
      changeMethod({ model, options }) {
        if (model.company && model.company[0]) {
          options = options.map(item => {
            item.disabled = false
            return item
          })
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
          name: '',
          age: '',
          idCard: '',
          end: '',
          skill: '',
          company: []
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

### elSlots 模板说明

::: demo

```html
<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <elsa-form ref="myFormRef" :config="fields" :model="model" labelWidth="auto" label-suffix=":">
        <template slot="prepend-icon-user" :slot-scope="{ model }">
          <i class="el-icon-tickets"></i>
        </template>
        <template slot="prepend-icon-pwd" :slot-scope="{ model }">
          <i class="el-icon-setting"></i>
        </template>
      </elsa-form>
    </el-col>
  </el-row>
</template>

<script>
  const fields = {
    username: {
      label: '用户名',
      elTag: 'el-input',
      elAttrs: {},
      elSlots: {
        prepend: 'prepend-icon-user'
      }
    },
    password: {
      label: '密码',
      elTag: 'el-input',
      elAttrs: {},
      elSlots: {
        prepend: 'prepend-icon-pwd'
      }
    }
  }

  export default {
    data() {
      return {
        fields,
        model: {
          username: '',
          password: ''
        }
      }
    },
    methods: {}
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
