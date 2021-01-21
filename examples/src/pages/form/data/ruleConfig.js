export const fields = {
  name: {
    label: '用户名',
    extra: '示例：异步校验。输入"eminoda"将提示错误',
    elTag: 'el-input',
    elAttrs: {
      placeholder: '请输入用户名',
      clearable: true,
    },
    elStyle: {
      width: '80%',
    },
    customRender: 'nameCheck',
    rules: [
      { required: true, message: '用户名不能为空', trigger: 'change' },
      {
        validator: (rule, value, callback) => {
          if (value == 'eminoda') {
            callback(new Error('用户名重复'));
          } else {
            callback();
          }
        },
        trigger: 'change',
      },
    ],
  },
  password: {
    label: '密码',
    extra: '示例：正则校验',
    elTag: 'el-input',
    elAttrs: {
      type: 'password',
      showPassword: true,
    },
    rules: [
      { required: true, message: '密码不能为空', trigger: 'change' },
      { pattern: /^[A-Za-z0-9]{10,16}$/, message: '密码输入格式错误', trigger: 'change' },
    ],
  },
  desc: {
    label: '个人描述',
    elTag: 'el-input',
    extra: '示例：强校验',
    elAttrs: {
      type: 'textarea',
      rows: 3,
    },
    rules: [{ required: true, message: '个人描述不能为空', trigger: 'change' }],
  },
};
