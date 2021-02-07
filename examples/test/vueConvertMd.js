const { stripScript, stripTemplate, genInlineComponentText } = require('./util')

const path = require('path')
const fs = require('fs')
const vueFilePath = path.join(__dirname, './demo.md')
const source = fs.readFileSync(vueFilePath, { encoding: 'utf8' })

const md = require('markdown-it')()
const mdContainer = require('markdown-it-container')

const isCode = 'fence'
md.use(mdContainer, 'demo', {
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/)
  },
  render(tokens, idx) {
    const match = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    const token = tokens[idx]
    const nextToken = tokens[idx + 1]
    if (token.nesting === 1) {
      const description = match && match.length > 1 ? match[1] : ''
      const content = nextToken.type === isCode ? nextToken.content : ''
      return `<demo-template>
      ${description ? `<div>${md.render(description)}</div>` : ''}
      <!--component-demo: ${content}:component-demo-->
      `
    }
    return '</demo-template>'
  }
})
const content = md.render(source)

// console.log(content)

const startTag = '<!--component-demo:'
const startTagLen = startTag.length
const endTag = ':component-demo-->'
const endTagLen = endTag.length

let componenetsString = ''
let id = 0 // demo 的 id
let output = [] // 输出的内容
let start = 0 // 字符串开始位置

// '<!--component-demo:' 起始位置
let commentStart = content.indexOf(startTag)
// '<!--component-demo:' 结束位置
let commentEnd = content.indexOf(endTag, commentStart + startTagLen)

while (commentStart !== -1 && commentEnd !== -1) {
  output.push(content.slice(start, commentStart))

  const commentContent = content.slice(commentStart + startTagLen, commentEnd)
  const html = stripTemplate(commentContent)
  const script = stripScript(commentContent)

  let demoComponentContent = genInlineComponentText(html, script)
  const demoComponentName = `element-demo${id}`
  output.push(`<template slot="source"><${demoComponentName} /></template>`)
  componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`
  // 重新计算下一次的位置
  id++
  start = commentEnd + endTagLen
  commentStart = content.indexOf(startTag, start)
  commentEnd = content.indexOf(endTag, commentStart + startTagLen)
}

// console.log(output)
let pageScript = ''
if (componenetsString) {
  pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`
}
output.push(content.slice(start))

const finallySource = `
<template>
  <section class="content element-doc">
    ${output.join('')}
  </section>
</template>
${pageScript}
`

console.log(finallySource)