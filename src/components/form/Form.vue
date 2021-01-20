<script>
import is from 'is-type-of';
import { toHyphenateEvent } from '../utils';
import FormItem from './FormItem/Index';
import { prefix } from '../config';

export default {
  name: `${prefix}-form`,
  components: { FormItem },
  props: {
    config: Object,
    layout: Array,
  },
  computed: {
    rules() {
      return Object.keys(this.config).reduce((acc, field, index) => {
        acc[field] = this.config[field].rules;
        return acc;
      }, {});
    },
    elFormOptions() {
      return this.$attrs;
    },
  },
  methods: {
    _$render(a, b, c, d) {
      return this.$createElement(a, b, c, d);
    },
    _setDefaultRule(field, rules = []) {
      const { label } = this.config[field];
      rules.forEach((rule) => {
        if (rule.required && !rule.message) {
          rule.message = label + '不能为空';
        }
        if (!rule.trigger) {
          rule.trigger = 'change';
        }
      });
    },
    getPathValue(path) {
      const props = path.split('.');
      if (props.length > 1) {
        return props.reduce((model, prop, index) => {
          if (index < props.length - 1 && typeof model == 'undefined') {
            console.warn(`model.${props[index - 1]} 声明值错误，应为对象`);
            model[prop] = {};
          }
          return model[prop];
        }, this.elFormOptions.model);
      }
      return this.elFormOptions.model[path];
    },
    setPathValue(path, value) {
      const props = path.split('.');
      if (props.length > 1) {
        props.reduce((model, prop, index) => {
          if (index == props.length - 1) {
            model[prop] = value;
          }
          return model[prop];
        }, this.elFormOptions.model);
      } else {
        this.elFormOptions.model[path] = value;
      }
    },
    visibleElFormItem(field) {
      const { visible } = this.config[field];
      const model = this.elFormOptions.model;
      if (typeof visible == 'undefined') {
        return true;
      } else if (is.boolean(visible) && visible) {
        return true;
      } else if (is.function(visible)) {
        return visible({ model });
      } else if (is.string(visible)) {
        const modelVal = model[visible];
        return !!(modelVal || modelVal === 0);
      }
      return false;
    },
    /**
     * 覆写 el-form validate
     * @return Function(callback: Function(errors, model))
     */
    validate(cb) {
      this.$refs.elFormRef.validate((valid, errors) => {
        if (valid) {
          cb(null, this.elFormOptions.model);
        } else {
          cb(errors, this.elFormOptions.model);
        }
      });
    },
    /**
     * 覆写 el-form validateField
     * @return Function(props, callback: Function(error))
     */
    validateField(props, cb) {
      this.$refs.elFormRef.validateField(props, cb);
    },
    /**
     * 覆写 el-form resetFields，扩展支持单个表单项清除
     */
    resetFields(props) {
      if (!props) {
        this.$refs.elFormRef.resetFields();
      } else {
        const fieldRefs = this.$refs.elFormRef.fields;
        const curFields = Array.isArray(props) ? props : [props];
        curFields.forEach((curField) => {
          for (let i = 0; i < fieldRefs.length; i++) {
            const field = fieldRefs[i].prop;
            if (field == curField) {
              fieldRefs[i].resetField();
            }
          }
        });
      }
    },
    /**
     * 覆写 el-form clearValidate
     */
    clearValidate(props) {
      this.$refs.elFormRef.clearValidate(props);
    },
    _validPathValue(path) {
      const props = path.split('.');
      let { model } = this.elFormOptions;
      if (props.length > 1) {
        let isValid = true;
        let count = 0;
        let modelVal = null;
        while (count < props.length) {
          modelVal = model[props[count]];
          if (typeof modelVal === 'undefined') {
            isValid = false;
            break;
          }
          model = modelVal;
          count++;
        }
        return typeof modelVal === 'undefined' ? false : true;
      } else {
        return typeof model[path] === 'undefined' ? false : true;
      }
    },
    _isValidField(field) {
      const fieldOptions = this.config[field];
      if (!this._validPathValue(field)) {
        console.warn(`model 未声明 ${field} 属性`);
        return false;
      } else if (!fieldOptions) {
        console.warn(`config 未设置 ${field} 配置`);
        return false;
      }
      return true;
    },
    renderExtraTip(field) {
      const { extra, extraIcon } = this.config[field];
      if (extra) {
        return this._$render('div', { class: 'extra-wrap' }, [this._$render('i', { class: extraIcon || 'el-icon-warning-outline' }), extra]);
      } else {
        return '';
      }
    },
    renderElFormItem(field) {
      const { elTag, elAttrs, options, visible, customRender, extraRender, ...elFormItemOptions } = this.config[field];
      const { rules } = elFormItemOptions;
      this._setDefaultRule(field, rules);
      // https://element.eleme.io/#/zh-CN/component/form#form-item-attributes
      const props = { ...elFormItemOptions, prop: field };
      return this._$render('el-form-item', { props }, [this.renderFormItem(field), this.customRender(field), this.renderExtraTip(field)]);
    },
    customRender(field) {
      const { customRender } = this.config[field];
      if (this.$scopedSlots && this.$scopedSlots[customRender]) {
        return this.$scopedSlots[customRender]({ model: this.model });
      }
      return null;
    },
    getSlotRender(field) {
      const { slotRender } = this.config[field];
      if (this.$scopedSlots && this.$scopedSlots[slotRender]) {
        return this.$scopedSlots[slotRender];
      }
      return null;
    },
    renderFormItem(field) {
      const { elTag, changeMethod } = this.config[field];
      if (!elTag) {
        console.warn(`请设置 config[${field}].elTag`);
        return '';
      }
      return this._$render('form-item', {
        props: {
          field,
          value: this.getPathValue(field),
          fieldOptions: this.config[field],
          model: this.elFormOptions.model,
          scopedSlotsFn: this.getSlotRender(field),
        },
        on: {
          change: (value) => {
            // this.elFormOptions.model[field] = value
            this.setPathValue(field, value);
            if (changeMethod) {
              changeMethod.bind(this)({ value, model: this.elFormOptions.model, field, rules: this.rules });
            }
          },
        },
      });
    },
    drawLayout(layout = []) {
      const renders = [];
      if (layout.length > 0) {
        for (const layoutOptions of layout) {
          const { elTag, elAttrs, field, children = [] } = layoutOptions;
          if (elTag && !['el-row', 'el-col'].includes(elTag)) {
            console.warn('elTag 建议为 el-row，el-col');
          }
          if (field) {
            const fieldOptions = this.config[field];
            if (!this._isValidField(field)) {
              continue;
            }
            if (!this.visibleElFormItem(field)) {
              continue;
            }
            const formItemRender = this.renderElFormItem(field);
            if (elTag) {
              renders.push(this._$render(elTag, { props: elAttrs }, [formItemRender]));
            } else {
              renders.push(formItemRender);
            }
          } else if (elTag) {
            renders.push(this._$render(elTag, { props: elAttrs }, this.drawLayout(children)));
          }
        }
      } else {
        for (let field in this.elFormOptions.model) {
          if (!this._isValidField(field)) {
            continue;
          }
          const fieldOptions = this.config[field];
          if (!this.visibleElFormItem(field)) {
            continue;
          }
          const formItemRender = this.renderElFormItem(field);
          renders.push(formItemRender);
        }
      }
      return renders;
    },
    renderActionBar() {
      if (this.$scopedSlots.default) {
        return this.$scopedSlots.default();
      }
      return '';
    },
  },
  render(h) {
    return h(
      'el-form',
      {
        props: this.elFormOptions,
        on: toHyphenateEvent(this.$listeners),
        ref: 'elFormRef',
      },
      [...this.drawLayout(this.layout), ...this.renderActionBar()]
    );
  },
};
</script>

<style lang="less" scoped>
.extra-wrap {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
  i {
    margin-right: 5px;
  }
}
</style>
