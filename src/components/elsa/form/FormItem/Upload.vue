<script>
import UtilMixins from '../../mixins/UtilMixins'
import is from 'is-type-of'
export default {
  name: 'upload',
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
    disabled: Boolean,
    scopedSlotsFn: Function
  },
  methods: {
    uploadEventsMixins() {
      const done = value => this.$emit('change', value)
      return this.mixinElAttrsEvents(false, { done })
    }
  },
  render(h) {
    const { model, field, fieldOptions, ...elProps } = this.$props
    const { elTag, elAttrs, customRender, elClass } = this.fieldOptions
    return h(elTag, { props: { ...elProps, ...elAttrs, ...this.uploadEventsMixins() }, class: elClass }, [this.scopedSlotsFn({ model: this.model })])
  }
}
</script>

<style></style>
