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
    scopedSlots: Object
  },
  computed: {
    elAttrs() {
      return this.fieldOptions.elAttrs || {}
    },
    elStyle() {
      return this.fieldOptions.elStyle || {}
    },
    elSlots() {
      return this.fieldOptions.elSlots || {}
    }
  },
  methods: {
    uploadEventsMixins() {
      const done = value => this.$emit('change', { value })
      return this.mixinElAttrsEvents(false, { done })
    },
    renderSlots() {
      if (this.scopedSlots) {
        const slots = []
        for (let soltName in this.elSlots) {
          const customSlotName = this.elSlots[soltName]
          if (this.scopedSlots[customSlotName]) {
            slots.push(
              this.$createElement(
                'div',
                {
                  slot: soltName
                },
                [this.scopedSlots[customSlotName]({ model: this.model })]
              )
            )
          } else {
            console.warn(`未配置 elSlots.${soltName} 对应的 ${customSlotName} 模板`)
          }
        }
        return slots
      } else {
        return []
      }
    }
  },
  render(h) {
    const { model, field, fieldOptions, ...elProps } = this.$props
    const { elTag, elAttrs, customRender, elClass } = this.fieldOptions
    return h(elTag, { props: { ...elProps, ...elAttrs, ...this.uploadEventsMixins() }, class: elClass }, [...this.renderSlots()])
  }
}
</script>

<style></style>
