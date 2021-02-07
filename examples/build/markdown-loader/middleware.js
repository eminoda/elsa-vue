const mdContainer = require('markdown-it-container')

exports.demoPlugins = function(md, options = {}) {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const isFenceType = 'fence'
      const match = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      const token = tokens[idx]
      const nextToken = tokens[idx + 1]
      // 组件 demo-template wrap
      if (token.nesting === 1) {
        const matchResult = match && match.length > 1 ? match[1] : ''
        const viewTemplate = matchResult ? `<div>${md.render(matchResult)}</div>` : ''

        const content = nextToken.type === isFenceType ? nextToken.content : ''
        const commentTemplate = `<!--${options.componentTagName}: ${content}:${options.componentTagName}-->`

        return `<${options.componentName}>
        ${viewTemplate}
        ${commentTemplate}
        `
      }
      return `</${options.componentName}>`
    }
  })
}
