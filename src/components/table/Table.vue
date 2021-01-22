<script>
import { toHyphenateEvent } from '../utils'
import { prefix } from '../config'

export default {
  name: `${prefix}-table`,
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    dataSource: {
      type: Array,
      default() {
        return []
      }
    },
    pagination: Object
  },
  methods: {
    buildElColumnRender(column) {
      const { customRender, ...rest } = column
      if (customRender) {
        // 获取 <easy-table>...</easy-table> 内声明的非匿名插槽
        const customRenderFn = this.$scopedSlots[customRender]
        if (customRenderFn) {
          return this.$createElement('el-table-column', {
            props: rest,
            scopedSlots: {
              default: ({ row, column, $index }) => {
                return customRenderFn({ row, column, $index })
              }
            }
          })
        } else {
          console.warn(`未正确配置自定义 customRender 模板: ${customRender}`)
        }
      }
      return this.$createElement('el-table-column', { props: rest })
    },
    renderTable() {
      const { dataSource, columns } = this.$props
      // https://element.eleme.io/#/zh-CN/component/table#table-attributes
      const elProps = this.$attrs
      elProps.data = dataSource

      const tableRows = columns.reduce((acc, column) => {
        acc.push(this.buildElColumnRender(column))
        return acc
      }, [])
      return this.$createElement(
        'el-table',
        {
          props: elProps,
          on: toHyphenateEvent(this.$listeners)
        },
        tableRows
      )
    },
    renderPagination() {
      if (this.pagination) {
        return this.$createElement(`${prefix}-pagination`, {
          props: this.pagination
        })
      }
      return ''
    }
  },
  render: function(h) {
    return h('div', [this.renderTable(), this.renderPagination()])
  }
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
