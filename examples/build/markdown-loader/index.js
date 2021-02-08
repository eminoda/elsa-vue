const highlight = require('./hightlight')
// const md = require('markdown-it')({ highlight })
const { demoPlugins } = require('./middleware')
const parser = require('./parser')
const Config = require('markdown-it-chain')
const slugify = require('transliteration').slugify
const anchorPlugin = require('markdown-it-anchor')
const tocPlugin = require('markdown-it-table-of-contents')
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
    .plugin('anchor')
    .use(anchorPlugin, [
      {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true
      }
    ])
    .end()
    .plugin('table')
    .use(tocPlugin, [
      Object.assign({
        slugify,
        includeLevel: [2, 3]
        // format: parseHeaders
      })
    ])
    .end()
    .plugin('containers')
    .use(demoPlugins(options))
    .end()
  const md = config.toMd()
  const content = md.render(source)
  return parser(content, options)
}
