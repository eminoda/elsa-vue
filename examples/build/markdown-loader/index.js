const highlight = require('./hightlight')
const md = require('markdown-it')({ highlight })
const { demoPlugins } = require('./middleware')
const parser = require('./parser')

const options = {
  componentName: 'demo-template', // 示例代码组件名称
  componentTagName: 'component-demo', // 标识
  slotName: 'source'
}
module.exports = source => {
  demoPlugins(md, options)
  const content = md.render(source)
  return parser(content, options)
}
