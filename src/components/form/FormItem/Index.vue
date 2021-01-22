<script>
import is from 'is-type-of'
import Upload from './Upload'
import Cascader from './Cascader'
import Picker from './Picker'
export default {
  components: { Upload, Cascader, Picker },
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
    scopedSlotsFn: Function,
    disabled: Boolean
  },
  data() {
    return {
      loading: false,
      options: [],
      dataSource: []
    }
  },
  computed: {
    elAttrs() {
      return this.fieldOptions.elAttrs || {}
    },
    elStyle() {
      return this.fieldOptions.elStyle || {}
    }
  },
  methods: {
    _setDefaultPlaceholder() {
      const { elTag, label } = this.fieldOptions
      return (elTag == 'el-select' ? '请选择' : '请输入') + label
    },
    _disabledFormItem(field) {
      const { disabled } = this.elAttrs
      const model = this.model
      if (typeof disabled == 'undefined') {
        return false
      } else if (is.string(disabled)) {
        const modelVal = model[disabled]
        return !!(modelVal || modelVal === 0)
      } else if (is.boolean(disabled)) {
        return is.boolean(disabled)
      } else if (is.function(disabled)) {
        return disabled({ model })
      }
      return false
    },
    renderOptions(elTag) {
      if (!this.options || !Array.isArray(this.options)) {
        return null
      }
      const parentElTags = ['el-checkbox-group', 'el-radio-group', 'el-select']
      const optionsTags = ['el-checkbox', 'el-radio', 'el-option']
      if (!parentElTags.includes(elTag)) {
        return null
      }

      let childElTag = optionsTags[parentElTags.indexOf(elTag)]
      if (!childElTag) {
        return null
      }
      const children = []
      const valueIsLabel = function() {
        return ['el-checkbox-group', 'el-radio-group'].includes(elTag)
      }

      this.options.forEach(option => {
        children.push(
          this.$createElement(
            childElTag,
            {
              props: {
                label: valueIsLabel() ? option.value : option.label,
                value: option.value,
                disabled: option.disabled
              }
            },
            option.label
          )
        )
      })
      return children
    },
    _normalizeElTag(elTag) {
      if (elTag == 'el-checkbox') {
        return 'el-checkbox-group'
      } else if (elTag == 'el-radio') {
        return 'el-radio-group'
      }
      return elTag
    },
    lazyRemoteLoad() {
      const { isRemote, remoteMethod } = this.elAttrs
      if (!isRemote || !is.function(remoteMethod)) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      const done = (options = []) => {
        this.finishedLoad = true
        this.loading = false
        this.options = options
      }
      remoteMethod({ model: this.model, rules: this.fieldOptions.rules, done })
    },
    lazyLoad() {
      const { elTag } = this.fieldOptions
      const lazyLoad = this.elAttrs.props.lazyLoad
      return (node, resolve) => {
        const done = nodes => resolve(nodes)
        lazyLoad(done, { node, model: this.model })
      }
    },
    checkValueValid() {
      const { elTag, options } = this.fieldOptions
      if (elTag.indexOf('select') !== -1) {
        if (!this.elAttrs.multiple && Array.isArray(this.value)) {
          throw new Error(`${this.field} 设置不正确，应为 String`)
        } else if (this.elAttrs.multiple && !Array.isArray(this.value)) {
          throw new Error(`${this.field} 设置不正确，应为 Array`)
        }
      }
    },
    renderByTag(h) {
      const { elTag, elClass } = this.fieldOptions
      const standardTag = this._normalizeElTag(elTag)

      const componentNames = [Upload.name, Cascader.name, Picker.name]
      const componentName = componentNames.find(componentName => standardTag.indexOf(componentName) !== -1)
      if (componentName) {
        return h(componentName, {
          props: {
            field: this.field,
            value: this.value,
            fieldOptions: this.fieldOptions,
            model: this.model,
            scopedSlotsFn: this.scopedSlotsFn,
            disabled: this.disabled || this._disabledFormItem(this.field)
          },
          attrs: {
            ...this.elAttrs,
            placeholder: this.elAttrs.placeholder || this._setDefaultPlaceholder()
          },
          style: this.elStyle,
          on: {
            change: value => {
              this.$emit('change', value)
            }
          }
        })
      }
      return h(
        standardTag,
        {
          props: {
            ...this.elAttrs,
            loading: this.loading,
            value: this.value,
            props: this.elAttrs.props,
            disabled: this.disabled || this._disabledFormItem(this.field)
          },
          attrs: {
            ...this.elAttrs,
            placeholder: this.elAttrs.placeholder || this._setDefaultPlaceholder()
          },
          style: this.elStyle,
          on: {
            input: value => {
              this.$emit('change', value)
            },
            'visible-change': visible => {
              if (visible) {
                this.lazyRemoteLoad()
              }
            }
          }
        },
        [this.renderOptions(standardTag)]
      )
    }
  },
  render(h) {
    this.checkValueValid()
    return this.renderByTag(h)
  },
  created() {
    const { options } = this.fieldOptions
    if (Array.isArray(options)) {
      this.options = options
    }
  }
}
</script>

<style></style>
