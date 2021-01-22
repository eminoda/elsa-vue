let id = 0
export const fields = {
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
    },
    rules: [{ required: true, trigger: 'change' }]
  }
}
