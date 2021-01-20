<script>
import UtilMixins from '../../mixins/UtilMixins'
import is from 'is-type-of'
export default {
  name: 'picker',
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
      pickerOptions: {}
    }
  },
  methods: {
    pickerOptionsWrap() {
      const { elAttrs } = this.fieldOptions
      if (elAttrs.pickerOptions) {
        const { disabledDate, ...pickerOptions } = elAttrs.pickerOptions
        if (disabledDate) {
          this.pickerOptions.disabledDate = (value) => {
            return disabledDate(value, { model: this.model })
          }
        }
        this.pickerOptions = Object.assign(this.pickerOptions, pickerOptions)
      }
      return this.pickerOptions
    }
  },
  render(h) {
    const { model, field, fieldOptions, ...elProps } = this.$props
    const { elTag, elAttrs, elClass } = this.fieldOptions
    const { props, ...restElProps } = elAttrs
    return h(elTag, {
      props: Object.assign({}, elProps, restElProps, { pickerOptions: this.pickerOptionsWrap() }),
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
