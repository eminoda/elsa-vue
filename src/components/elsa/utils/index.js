import { scrollTo } from './scroll-to'

export function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

export function toHyphenateEvent(listeners) {
  const eventListeners = {}
  for (let eventName in listeners) {
    const kebabCaseEventName = hyphenate(eventName)
    if (kebabCaseEventName != eventName) {
      listeners[kebabCaseEventName] = listeners[eventName]
    }
    const eventFn = (...args) => {
      // console.debug(kebabCaseEventName)
      if (listeners[kebabCaseEventName]) {
        return listeners[kebabCaseEventName](...args)
      }
    }
    eventListeners[kebabCaseEventName] = eventFn
  }
  return eventListeners
}

export { scrollTo }
