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
