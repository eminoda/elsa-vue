import is from 'is-type-of'
import { toHyphenateEvent } from '../utils/index'

export default {
  methods: {
    mixinElAttrsEvents(isHyphenate, options = {}) {
      const { elAttrs } = this.fieldOptions
      const events = {}
      Object.keys(elAttrs).forEach(prop => {
        if (is.function(elAttrs[prop])) {
          events[prop] = (...args) => {
            elAttrs[prop](...args, { model: this.model, ...options })
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
