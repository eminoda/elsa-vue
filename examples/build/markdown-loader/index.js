const highlight = require('./hightlight')
// const md = require('markdown-it')({ highlight })
const { demoPlugins } = require('./middleware')
const parser = require('./parser')
const Config = require('markdown-it-chain')
const config = new Config()
const options = {
  componentName: 'demo-template', // 示例代码组件名称
  componentTagName: 'component-demo', // 标识
  slotName: 'source'
}
module.exports = source => {
  config.options
    .html(true)
    .highlight(highlight)
    .end()
    .plugin('containers')
    .use(demoPlugins(options))
    .end()
  const md = config.toMd()
  const content = md.render(source)
  return parser(content, options)
}
