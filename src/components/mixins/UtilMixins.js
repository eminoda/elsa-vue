import is from 'is-type-of'
import { toHyphenateEvent } from '../utils/index'

export default {
  methods: {
    mixinElAttrsEvents(isHyphenate, options = {}) {
      const { elAttrs } = this.fieldOptions
      const events = {}
      const self = this
      Object.keys(elAttrs).forEach(prop => {
        if (is.function(elAttrs[prop])) {
          events[prop] = function mixinWrap(...args) {
            return elAttrs[prop].bind(self)(...args, { model: self.model, ...options })
          }
        }
      })
      if (isHyphenate) {
        return toHyphenateEvent(events)
      }
      return events
    }
  }
}
