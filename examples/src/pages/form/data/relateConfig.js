export const layout = [
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
  { field: 'end' },
  { field: 'skill' }
]

export const fields = {
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
    extra: '根据"前/后端"过滤"技术栈"选项',
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
    extra: '示例：延迟加载',
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
  }
}
