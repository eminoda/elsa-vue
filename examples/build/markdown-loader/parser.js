const { stripScript, stripTemplate, genInlineComponentText } = require('./util')

module.exports = (content, options = {}) => {
  const startTag = `<!--${options.componentTagName}:`
  const endTag = `:${options.componentTagName}-->`
  const startTagLen = startTag.length
  const endTagLen = endTag.length

  let componenetsString = ''
  let id = 0 // demo 的 id
  let output = [] // 输出的内容
  let start = 0 // 字符串开始位置

  // '<!--component-demo:' 起始位置
  let commentStart = content.indexOf(startTag)
  // '<!--component-demo:' 结束位置
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen)

  const _getVueTemplate = () => {
    const commentContent = content.slice(commentStart + startTagLen, commentEnd)
    const html = stripTemplate(commentContent)
    const script = stripScript(commentContent)
    return genInlineComponentText(html, script)
  }
  const _setComponents = (template, id) => {
    const componentName = `component-${id}`
    const slotTemplate = `<template slot="${options.slotName}"><${componentName} /></template>`
    output.push(slotTemplate)
    componenetsString += `${JSON.stringify(componentName)}: ${template},`
  }
  const _getScriptTemplate = () => {
    if (!componenetsString) {
      return ''
    }
    return `<script>
        export default {
          components: {
            ${componenetsString}
          }
        }
    </script>`
  }

  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart))

    // 1. 从 options.componentTagName 中，提取 vue 模块内容
    const demoComponentContent = _getVueTemplate()
    // 2. 定义组件 demo-template 插槽结构，构造内联组件内容
    _setComponents(demoComponentContent, id)

    id++
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }

  output.push(content.slice(start))
  return `
      <template>
        <section class="content">
          ${output.join('')}
        </section>
      </template>
      ${_getScriptTemplate()}
    `
}
