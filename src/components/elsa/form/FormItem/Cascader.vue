<script>
import UtilMixins from '../../mixins/UtilMixins'
import is from 'is-type-of'
export default {
  name: 'cascader',
  mixins: [UtilMixins],
  props: {
    model: Object,
    fieldOptions: {
      type: Object,
      default() {
        return { elAttrs: {} }
      }
    },
    value: [Number, String, Array, Date],
    field: String,
    disabled: Boolean
  },
  data() {
    return {
      // https://element.eleme.cn/2.15/#/zh-CN/component/cascader#props
      props: {}
    }
  },
  methods: {
    lazyLoadWrap() {
      const props = this.fieldOptions.elAttrs.props || {}
      const { lazy, lazyLoad } = props
      if (lazy && lazyLoad) {
        this.props.lazy = lazy
        this.props.lazyLoad = (node, resolve) => {
          const done = nodes => resolve(nodes)
          lazyLoad(node, resolve, { model: this.model, done })
        }
      }
      return this.props
    }
  },
  render(h) {
    const { model, field, fieldOptions, ...elProps } = this.$props
    const { elTag, elAttrs, elClass } = this.fieldOptions
    const { props, ...restElProps } = elAttrs
    return h(elTag, {
      props: Object.assign({}, elProps, restElProps, { props: this.lazyLoadWrap() }),
      attrs: this.$attrs,
      class: elClass,
      on: {
        ...this.mixinElAttrsEvents(true),
        input: value => {
          this.$emit('change', value)
        }
      }
    })
  }
}
</script>

<style></style>
