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
