export const fields = {
  name: {
    label: '用户名',
    elTag: 'el-input',
    elAttrs: {
      placeholder: '请输入用户名',
      clearable: true
    },
    elStyle: {
      width: '80%'
    },
    elSlots: {
      prepend: 'name-icon'
    },
    customRender: 'nameCheck',
    rules: [{ required: true, message: '用户名不能为空', trigger: 'change' }]
  },
  password: {
    label: '密码',
    elTag: 'el-input',
    elAttrs: {
      type: 'password',
      showPassword: true
    },
    rules: [{ required: true, trigger: 'change' }]
  },
  desc: {
    label: '个人描述',
    elTag: 'el-input',
    elAttrs: {
      type: 'textarea',
      rows: 3
    }
  },
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
}
