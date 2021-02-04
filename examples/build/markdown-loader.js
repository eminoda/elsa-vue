var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt()
module.exports = (source) => {
  console.log(source)
  const content = md.render(source)
  console.log(content)

  return `
    <template>
        <div>Test</div>
    </template>

    <script>
        export default {

        }
    </script>

    <style>
    </style>
  `
}
