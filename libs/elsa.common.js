module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("is-type-of");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".extra-wrap[data-v-72d28285] {\n  font-size: 13px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.45);\n}\n.extra-wrap i[data-v-72d28285] {\n  margin-right: 5px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(3);
var external_element_ui_default = /*#__PURE__*/__webpack_require__.n(external_element_ui_);

// CONCATENATED MODULE: ./src/components/elsa/utils/scroll-to.js
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;

  if (t < 1) {
    return c / 2 * t * t + b;
  }

  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}; // requestAnimationFrame for Smart Animating http://goo.gl/sx5sts


var requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();
/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */


function move(amount) {
  document.documentElement.scrollTop = amount;
  document.body.parentNode.scrollTop = amount;
  document.body.scrollTop = amount;
}

function position() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
}
/**
 * @param {number} to
 * @param {number} duration
 * @param {Function} callback
 */


function scrollTo(to, duration, callback) {
  var start = position();
  var change = to - start;
  var increment = 20;
  var currentTime = 0;
  duration = typeof duration === 'undefined' ? 500 : duration;

  var animateScroll = function animateScroll() {
    // increment the time
    currentTime += increment; // find the value with the quadratic in-out easing function

    var val = Math.easeInOutQuad(currentTime, start, change, duration); // move the document.body

    move(val); // do the animation unless its over

    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof callback === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };

  animateScroll();
}
// CONCATENATED MODULE: ./src/components/elsa/utils/index.js

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
function toHyphenateEvent(listeners) {
  var eventListeners = {};

  var _loop = function _loop(eventName) {
    var kebabCaseEventName = hyphenate(eventName);

    if (kebabCaseEventName != eventName) {
      listeners[kebabCaseEventName] = listeners[eventName];
    }

    var eventFn = function eventFn() {
      // console.debug(kebabCaseEventName)
      if (listeners[kebabCaseEventName]) {
        return listeners[kebabCaseEventName].apply(listeners, arguments);
      }
    };

    eventListeners[kebabCaseEventName] = eventFn;
  };

  for (var eventName in listeners) {
    _loop(eventName);
  }

  return eventListeners;
}

// CONCATENATED MODULE: ./src/components/elsa/config.js
var prefix = 'elsa';
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/table/Table.vue?vue&type=script&lang=js&
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
  name: "".concat(prefix, "-table"),
  props: {
    columns: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    dataSource: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    pagination: Object,
    // https://element.eleme.io/#/zh-CN/component/table#table-attributes
    border: Boolean,
    height: [String, Number],
    size: String,
    rowKey: String,
    treeProps: Object,
    load: Function,
    lazy: Boolean,
    indent: Number,
    fit: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    buildElColumnRender: function buildElColumnRender(column) {
      var customRender = column.customRender,
          rest = _objectWithoutProperties(column, ["customRender"]);

      if (customRender) {
        // 获取 <easy-table>...</easy-table> 内声明的非匿名插槽
        var customRenderFn = this.$scopedSlots[customRender];

        if (customRenderFn) {
          return this.$createElement('el-table-column', {
            props: rest,
            scopedSlots: {
              "default": function _default(_ref) {
                var row = _ref.row,
                    column = _ref.column,
                    $index = _ref.$index;
                return customRenderFn({
                  row: row,
                  column: column,
                  $index: $index
                });
              }
            }
          });
        } else {
          console.warn("\u672A\u6B63\u786E\u914D\u7F6E\u81EA\u5B9A\u4E49 customRender \u6A21\u677F: ".concat(customRender));
        }
      }

      return this.$createElement('el-table-column', {
        props: rest
      });
    },
    renderTable: function renderTable() {
      var _this = this;

      var _this$$props = this.$props,
          dataSource = _this$$props.dataSource,
          columns = _this$$props.columns,
          elProps = _objectWithoutProperties(_this$$props, ["dataSource", "columns"]);

      elProps.data = dataSource;
      var tableRows = columns.reduce(function (acc, column) {
        acc.push(_this.buildElColumnRender(column));
        return acc;
      }, []);
      return this.$createElement('el-table', {
        props: elProps,
        on: toHyphenateEvent(this.$listeners)
      }, tableRows);
    },
    renderPagination: function renderPagination() {
      if (this.pagination) {
        return this.$createElement("".concat(prefix, "-pagination"), {
          props: this.pagination
        });
      }

      return '';
    }
  },
  render: function render(h) {
    return h('div', [this.renderTable(), this.renderPagination()]);
  }
});
// CONCATENATED MODULE: ./src/components/elsa/table/Table.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/elsa/table/Table.vue
var Table_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  table_Tablevue_type_script_lang_js_,
  Table_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/elsa/table/Table.vue"
/* harmony default export */ var Table = (component.exports);
// CONCATENATED MODULE: ./src/components/elsa/table/index.js


Table.install = function (Vue) {
  Vue.component(Table.name, Table);
};

/* harmony default export */ var table = (Table);
// EXTERNAL MODULE: external "is-type-of"
var external_is_type_of_ = __webpack_require__(0);
var external_is_type_of_default = /*#__PURE__*/__webpack_require__.n(external_is_type_of_);

// CONCATENATED MODULE: ./src/components/elsa/mixins/UtilMixins.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var UtilMixins = ({
  methods: {
    mixinElAttrsEvents: function mixinElAttrsEvents(isHyphenate) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var elAttrs = this.fieldOptions.elAttrs;
      var events = {};
      Object.keys(elAttrs).forEach(function (prop) {
        if (external_is_type_of_default.a["function"](elAttrs[prop])) {
          events[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            elAttrs[prop].apply(elAttrs, args.concat([_objectSpread({
              model: _this.model
            }, options)]));
          };
        }
      });

      if (isHyphenate) {
        return toHyphenateEvent(events);
      }

      return events;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/FormItem/Upload.vue?vue&type=script&lang=js&
function Uploadvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Uploadvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Uploadvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Uploadvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Uploadvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Uploadvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Uploadvue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Uploadvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Uploadvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ var Uploadvue_type_script_lang_js_ = ({
  name: 'upload',
  mixins: [UtilMixins],
  props: {
    model: Object,
    fieldOptions: {
      type: Object,
      "default": function _default() {
        return {
          elAttrs: {}
        };
      }
    },
    value: [Number, String, Array, Date],
    field: String,
    disabled: Boolean,
    scopedSlotsFn: Function
  },
  methods: {
    uploadEventsMixins: function uploadEventsMixins() {
      var _this = this;

      var done = function done(value) {
        return _this.$emit('change', value);
      };

      return this.mixinElAttrsEvents(false, {
        done: done
      });
    }
  },
  render: function render(h) {
    var _this$$props = this.$props,
        model = _this$$props.model,
        field = _this$$props.field,
        fieldOptions = _this$$props.fieldOptions,
        elProps = Uploadvue_type_script_lang_js_objectWithoutProperties(_this$$props, ["model", "field", "fieldOptions"]);

    var _this$fieldOptions = this.fieldOptions,
        elTag = _this$fieldOptions.elTag,
        elAttrs = _this$fieldOptions.elAttrs,
        customRender = _this$fieldOptions.customRender,
        elClass = _this$fieldOptions.elClass;
    return h(elTag, {
      props: Uploadvue_type_script_lang_js_objectSpread(Uploadvue_type_script_lang_js_objectSpread(Uploadvue_type_script_lang_js_objectSpread({}, elProps), elAttrs), this.uploadEventsMixins()),
      "class": elClass
    }, [this.scopedSlotsFn({
      model: this.model
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_Uploadvue_type_script_lang_js_ = (Uploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Upload.vue
var Upload_render, Upload_staticRenderFns




/* normalize component */

var Upload_component = normalizeComponent(
  FormItem_Uploadvue_type_script_lang_js_,
  Upload_render,
  Upload_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Upload_api; }
Upload_component.options.__file = "src/components/elsa/form/FormItem/Upload.vue"
/* harmony default export */ var Upload = (Upload_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/FormItem/Cascader.vue?vue&type=script&lang=js&
function Cascadervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Cascadervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Cascadervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Cascadervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Cascadervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Cascadervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Cascadervue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Cascadervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Cascadervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ var Cascadervue_type_script_lang_js_ = ({
  name: 'cascader',
  mixins: [UtilMixins],
  props: {
    model: Object,
    fieldOptions: {
      type: Object,
      "default": function _default() {
        return {
          elAttrs: {}
        };
      }
    },
    value: [Number, String, Array, Date],
    field: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      // https://element.eleme.cn/2.15/#/zh-CN/component/cascader#props
      props: {}
    };
  },
  methods: {
    lazyLoadWrap: function lazyLoadWrap() {
      var _this = this;

      var props = this.fieldOptions.elAttrs.props || {};
      var lazy = props.lazy,
          lazyLoad = props.lazyLoad;

      if (lazy && lazyLoad) {
        this.props.lazy = lazy;

        this.props.lazyLoad = function (node, resolve) {
          var done = function done(nodes) {
            return resolve(nodes);
          };

          lazyLoad(node, resolve, {
            model: _this.model,
            done: done
          });
        };
      }

      return this.props;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var _this$$props = this.$props,
        model = _this$$props.model,
        field = _this$$props.field,
        fieldOptions = _this$$props.fieldOptions,
        elProps = Cascadervue_type_script_lang_js_objectWithoutProperties(_this$$props, ["model", "field", "fieldOptions"]);

    var _this$fieldOptions = this.fieldOptions,
        elTag = _this$fieldOptions.elTag,
        elAttrs = _this$fieldOptions.elAttrs,
        elClass = _this$fieldOptions.elClass;

    var props = elAttrs.props,
        restElProps = Cascadervue_type_script_lang_js_objectWithoutProperties(elAttrs, ["props"]);

    return h(elTag, {
      props: Object.assign({}, elProps, restElProps, {
        props: this.lazyLoadWrap()
      }),
      attrs: this.$attrs,
      "class": elClass,
      on: Cascadervue_type_script_lang_js_objectSpread(Cascadervue_type_script_lang_js_objectSpread({}, this.mixinElAttrsEvents(true)), {}, {
        input: function input(value) {
          _this2.$emit('change', value);
        }
      })
    });
  }
});
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_Cascadervue_type_script_lang_js_ = (Cascadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Cascader.vue
var Cascader_render, Cascader_staticRenderFns




/* normalize component */

var Cascader_component = normalizeComponent(
  FormItem_Cascadervue_type_script_lang_js_,
  Cascader_render,
  Cascader_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Cascader_api; }
Cascader_component.options.__file = "src/components/elsa/form/FormItem/Cascader.vue"
/* harmony default export */ var Cascader = (Cascader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/FormItem/Picker.vue?vue&type=script&lang=js&
function Pickervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Pickervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Pickervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Pickervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Pickervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Pickervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Pickervue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Pickervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Pickervue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ var Pickervue_type_script_lang_js_ = ({
  name: 'picker',
  mixins: [UtilMixins],
  props: {
    model: Object,
    fieldOptions: {
      type: Object,
      "default": function _default() {
        return {
          elAttrs: {}
        };
      }
    },
    value: [Number, String, Array, Date],
    field: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      pickerOptions: {}
    };
  },
  methods: {
    pickerOptionsWrap: function pickerOptionsWrap() {
      var _this = this;

      var elAttrs = this.fieldOptions.elAttrs;

      if (elAttrs.pickerOptions) {
        var _elAttrs$pickerOption = elAttrs.pickerOptions,
            disabledDate = _elAttrs$pickerOption.disabledDate,
            pickerOptions = Pickervue_type_script_lang_js_objectWithoutProperties(_elAttrs$pickerOption, ["disabledDate"]);

        if (disabledDate) {
          this.pickerOptions.disabledDate = function (value) {
            return disabledDate(value, {
              model: _this.model
            });
          };
        }

        this.pickerOptions = Object.assign(this.pickerOptions, pickerOptions);
      }

      return this.pickerOptions;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var _this$$props = this.$props,
        model = _this$$props.model,
        field = _this$$props.field,
        fieldOptions = _this$$props.fieldOptions,
        elProps = Pickervue_type_script_lang_js_objectWithoutProperties(_this$$props, ["model", "field", "fieldOptions"]);

    var _this$fieldOptions = this.fieldOptions,
        elTag = _this$fieldOptions.elTag,
        elAttrs = _this$fieldOptions.elAttrs,
        elClass = _this$fieldOptions.elClass;

    var props = elAttrs.props,
        restElProps = Pickervue_type_script_lang_js_objectWithoutProperties(elAttrs, ["props"]);

    return h(elTag, {
      props: Object.assign({}, elProps, restElProps, {
        pickerOptions: this.pickerOptionsWrap()
      }),
      attrs: this.$attrs,
      "class": elClass,
      on: Pickervue_type_script_lang_js_objectSpread(Pickervue_type_script_lang_js_objectSpread({}, this.mixinElAttrsEvents(true)), {}, {
        input: function input(value) {
          _this2.$emit('change', value);
        }
      })
    });
  }
});
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_Pickervue_type_script_lang_js_ = (Pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Picker.vue
var Picker_render, Picker_staticRenderFns




/* normalize component */

var Picker_component = normalizeComponent(
  FormItem_Pickervue_type_script_lang_js_,
  Picker_render,
  Picker_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Picker_api; }
Picker_component.options.__file = "src/components/elsa/form/FormItem/Picker.vue"
/* harmony default export */ var Picker = (Picker_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/FormItem/Index.vue?vue&type=script&lang=js&
function Indexvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Indexvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Indexvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Indexvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Indexvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Indexvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  components: {
    Upload: Upload,
    Cascader: Cascader,
    Picker: Picker
  },
  props: {
    model: Object,
    fieldOptions: {
      type: Object,
      "default": function _default() {
        return {
          elAttrs: {}
        };
      }
    },
    value: [Number, String, Array, Date],
    field: String,
    scopedSlotsFn: Function
  },
  data: function data() {
    return {
      loading: false,
      options: [],
      dataSource: []
    };
  },
  computed: {
    elAttrs: function elAttrs() {
      return this.fieldOptions.elAttrs;
    }
  },
  methods: {
    _setDefaultPlaceholder: function _setDefaultPlaceholder() {
      var _this$fieldOptions = this.fieldOptions,
          elTag = _this$fieldOptions.elTag,
          label = _this$fieldOptions.label;
      return (elTag == 'el-select' ? '请选择' : '请输入') + label;
    },
    _disabledFormItem: function _disabledFormItem(field) {
      var disabled = this.elAttrs.disabled;
      var model = this.model;

      if (typeof disabled == 'undefined') {
        return false;
      } else if (external_is_type_of_default.a.string(disabled)) {
        var modelVal = model[disabled];
        return !!(modelVal || modelVal === 0);
      } else if (external_is_type_of_default.a["boolean"](disabled)) {
        return external_is_type_of_default.a["boolean"](disabled);
      } else if (external_is_type_of_default.a["function"](disabled)) {
        return disabled({
          model: model
        });
      }

      return false;
    },
    renderOptions: function renderOptions(elTag) {
      var _this = this;

      if (!this.options || !Array.isArray(this.options)) {
        return null;
      }

      var parentElTags = ['el-checkbox-group', 'el-radio-group', 'el-select'];
      var optionsTags = ['el-checkbox', 'el-radio', 'el-option'];

      if (!parentElTags.includes(elTag)) {
        return null;
      }

      var childElTag = optionsTags[parentElTags.indexOf(elTag)];

      if (!childElTag) {
        return null;
      }

      var children = [];

      var valueIsLabel = function valueIsLabel() {
        return ['el-checkbox-group', 'el-radio-group'].includes(elTag);
      };

      this.options.forEach(function (option) {
        children.push(_this.$createElement(childElTag, {
          props: {
            label: valueIsLabel() ? option.value : option.label,
            value: option.value,
            disabled: option.disabled
          }
        }, option.label));
      });
      return children;
    },
    _normalizeElTag: function _normalizeElTag(elTag) {
      if (elTag == 'el-checkbox') {
        return 'el-checkbox-group';
      } else if (elTag == 'el-radio') {
        return 'el-radio-group';
      }

      return elTag;
    },
    lazyRemoteLoad: function lazyRemoteLoad() {
      var _this2 = this;

      var elAttrs = this.fieldOptions.elAttrs;
      var isRemote = elAttrs.isRemote,
          remoteMethod = elAttrs.remoteMethod;

      if (!isRemote || !external_is_type_of_default.a["function"](remoteMethod)) {
        return;
      }

      if (this.loading) {
        return;
      }

      this.loading = true;
      remoteMethod(function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _this2.finishedLoad = true;
        _this2.loading = false;
        _this2.options = options;
      }, {
        model: this.model,
        rules: this.fieldOptions.rules
      });
    },
    lazyLoad: function lazyLoad() {
      var _this3 = this;

      var _this$fieldOptions2 = this.fieldOptions,
          elTag = _this$fieldOptions2.elTag,
          elAttrs = _this$fieldOptions2.elAttrs;
      var lazyLoad = elAttrs.props.lazyLoad;
      return function (node, resolve) {
        var done = function done(nodes) {
          return resolve(nodes);
        };

        lazyLoad(done, {
          node: node,
          model: _this3.model
        });
      };
    },
    checkValueValid: function checkValueValid() {
      var _this$fieldOptions3 = this.fieldOptions,
          elTag = _this$fieldOptions3.elTag,
          elAttrs = _this$fieldOptions3.elAttrs,
          options = _this$fieldOptions3.options;

      if (elTag.indexOf('select') !== -1) {
        if (!elAttrs.multiple && Array.isArray(this.value)) {
          throw new Error("".concat(this.field, " \u8BBE\u7F6E\u4E0D\u6B63\u786E\uFF0C\u5E94\u4E3A String"));
        } else if (elAttrs.multiple && !Array.isArray(this.value)) {
          throw new Error("".concat(this.field, " \u8BBE\u7F6E\u4E0D\u6B63\u786E\uFF0C\u5E94\u4E3A Array"));
        }
      }
    },
    renderByTag: function renderByTag(h) {
      var _this4 = this;

      var _this$fieldOptions4 = this.fieldOptions,
          elTag = _this$fieldOptions4.elTag,
          elAttrs = _this$fieldOptions4.elAttrs,
          elClass = _this$fieldOptions4.elClass;

      var standardTag = this._normalizeElTag(elTag);

      var componentNames = [Upload.name, Cascader.name, Picker.name];
      var componentName = componentNames.find(function (componentName) {
        return standardTag.indexOf(componentName) !== -1;
      });

      if (componentName) {
        return h(componentName, {
          props: {
            field: this.field,
            value: this.value,
            fieldOptions: this.fieldOptions,
            model: this.model,
            scopedSlotsFn: this.scopedSlotsFn,
            disabled: this._disabledFormItem(this.field)
          },
          attrs: Indexvue_type_script_lang_js_objectSpread(Indexvue_type_script_lang_js_objectSpread({}, elAttrs), {}, {
            placeholder: elAttrs.placeholder || this._setDefaultPlaceholder()
          }),
          on: {
            change: function change(value) {
              _this4.$emit('change', value);
            }
          }
        });
      }

      return h(standardTag, {
        props: Indexvue_type_script_lang_js_objectSpread(Indexvue_type_script_lang_js_objectSpread({}, this.elAttrs), {}, {
          loading: this.loading,
          value: this.value,
          props: elAttrs.props,
          disabled: this._disabledFormItem(this.field),
          "class": elClass
        }),
        attrs: Indexvue_type_script_lang_js_objectSpread(Indexvue_type_script_lang_js_objectSpread({}, elAttrs), {}, {
          placeholder: elAttrs.placeholder || this._setDefaultPlaceholder()
        }),
        on: {
          input: function input(value) {
            _this4.$emit('change', value);
          },
          'visible-change': function visibleChange(visible) {
            if (visible) {
              _this4.lazyRemoteLoad();
            }
          }
        }
      }, [this.renderOptions(standardTag)]);
    }
  },
  render: function render(h) {
    this.checkValueValid();
    return this.renderByTag(h);
  },
  created: function created() {
    var options = this.fieldOptions.options;

    if (Array.isArray(options)) {
      this.options = options;
    }
  }
});
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormItem_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elsa/form/FormItem/Index.vue
var Index_render, Index_staticRenderFns




/* normalize component */

var Index_component = normalizeComponent(
  FormItem_Indexvue_type_script_lang_js_,
  Index_render,
  Index_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Index_api; }
Index_component.options.__file = "src/components/elsa/form/FormItem/Index.vue"
/* harmony default export */ var Index = (Index_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/Form.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Formvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Formvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Formvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Formvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Formvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Formvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Formvue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Formvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Formvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/* harmony default export */ var Formvue_type_script_lang_js_ = ({
  name: "".concat(prefix, "-form"),
  components: {
    FormItem: Index
  },
  props: {
    config: Object,
    layout: Array
  },
  computed: {
    rules: function rules() {
      var _this = this;

      return Object.keys(this.config).reduce(function (acc, field, index) {
        acc[field] = _this.config[field].rules;
        return acc;
      }, {});
    },
    elFormOptions: function elFormOptions() {
      return this.$attrs;
    }
  },
  methods: {
    _$render: function _$render(a, b, c, d) {
      return this.$createElement(a, b, c, d);
    },
    _setDefaultRule: function _setDefaultRule(field) {
      var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var label = this.config[field].label;
      rules.forEach(function (rule) {
        if (rule.required && !rule.message) {
          rule.message = label + '不能为空';
        }

        if (!rule.trigger) {
          rule.trigger = 'change';
        }
      });
    },
    getPathValue: function getPathValue(path) {
      var props = path.split('.');

      if (props.length > 1) {
        return props.reduce(function (model, prop, index) {
          if (index < props.length - 1 && typeof model == 'undefined') {
            console.warn("model.".concat(props[index - 1], " \u58F0\u660E\u503C\u9519\u8BEF\uFF0C\u5E94\u4E3A\u5BF9\u8C61"));
            model[prop] = {};
          }

          return model[prop];
        }, this.elFormOptions.model);
      }

      return this.elFormOptions.model[path];
    },
    setPathValue: function setPathValue(path, value) {
      var props = path.split('.');

      if (props.length > 1) {
        props.reduce(function (model, prop, index) {
          if (index == props.length - 1) {
            model[prop] = value;
          }

          return model[prop];
        }, this.elFormOptions.model);
      } else {
        this.elFormOptions.model[path] = value;
      }
    },
    visibleElFormItem: function visibleElFormItem(field) {
      var visible = this.config[field].visible;
      var model = this.elFormOptions.model;

      if (typeof visible == 'undefined') {
        return true;
      } else if (external_is_type_of_default.a["boolean"](visible) && visible) {
        return true;
      } else if (external_is_type_of_default.a["function"](visible)) {
        return visible({
          model: model
        });
      } else if (external_is_type_of_default.a.string(visible)) {
        var modelVal = model[visible];
        return !!(modelVal || modelVal === 0);
      }

      return false;
    },

    /**
     * 覆写 el-form validate
     * @return Function(callback: Function(errors, model))
     */
    validate: function validate(cb) {
      var _this2 = this;

      this.$refs.elFormRef.validate(function (valid, errors) {
        if (valid) {
          cb(null, _this2.elFormOptions.model);
        } else {
          cb(errors, _this2.elFormOptions.model);
        }
      });
    },

    /**
     * 覆写 el-form validateField
     * @return Function(props, callback: Function(error))
     */
    validateField: function validateField(props, cb) {
      this.$refs.elFormRef.validateField(props, cb);
    },

    /**
     * 覆写 el-form resetFields，扩展支持单个表单项清除
     */
    resetFields: function resetFields() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!props) {
        this.$refs.elFormRef.resetFields();
      } else {
        var fieldRefs = this.$refs.elFormRef.fields;
        var curFields = Array.isArray(props) ? props : [props];
        curFields.forEach(function (curField) {
          for (var i = 0; i < fieldRefs.length; i++) {
            var field = fieldRefs[i].prop;

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
    clearValidate: function clearValidate(props) {
      this.$refs.elFormRef.clearValidate(props);
    },
    _validPathValue: function _validPathValue(path) {
      var props = path.split('.');
      var model = this.elFormOptions.model;

      if (props.length > 1) {
        var isValid = true;
        var count = 0;
        var modelVal = null;

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
    _isValidField: function _isValidField(field) {
      var fieldOptions = this.config[field];

      if (!this._validPathValue(field)) {
        console.warn("model \u672A\u58F0\u660E ".concat(field, " \u5C5E\u6027"));
        return false;
      } else if (!fieldOptions) {
        console.warn("config \u672A\u8BBE\u7F6E ".concat(field, " \u914D\u7F6E"));
        return false;
      }

      return true;
    },
    renderExtraTip: function renderExtraTip(field) {
      var _this$config$field = this.config[field],
          extra = _this$config$field.extra,
          extraIcon = _this$config$field.extraIcon;

      if (extra) {
        return this._$render('div', {
          "class": 'extra-wrap'
        }, [this._$render('i', {
          "class": extraIcon || 'el-icon-warning-outline'
        }), extra]);
      } else {
        return '';
      }
    },
    renderElFormItem: function renderElFormItem(field) {
      var _this$config$field2 = this.config[field],
          elTag = _this$config$field2.elTag,
          elAttrs = _this$config$field2.elAttrs,
          options = _this$config$field2.options,
          visible = _this$config$field2.visible,
          customRender = _this$config$field2.customRender,
          extraRender = _this$config$field2.extraRender,
          elFormItemOptions = Formvue_type_script_lang_js_objectWithoutProperties(_this$config$field2, ["elTag", "elAttrs", "options", "visible", "customRender", "extraRender"]);

      var rules = elFormItemOptions.rules;

      this._setDefaultRule(field, rules); // https://element.eleme.io/#/zh-CN/component/form#form-item-attributes


      var props = Formvue_type_script_lang_js_objectSpread(Formvue_type_script_lang_js_objectSpread({}, elFormItemOptions), {}, {
        prop: field
      });

      return this._$render('el-form-item', {
        props: props
      }, [this.renderFormItem(field), this.customRender(field), this.renderExtraTip(field)]);
    },
    customRender: function customRender(field) {
      var customRender = this.config[field].customRender;

      if (this.$scopedSlots && this.$scopedSlots[customRender]) {
        return this.$scopedSlots[customRender]({
          model: this.model
        });
      }

      return null;
    },
    getSlotRender: function getSlotRender(field) {
      var slotRender = this.config[field].slotRender;

      if (this.$scopedSlots && this.$scopedSlots[slotRender]) {
        return this.$scopedSlots[slotRender];
      }

      return null;
    },
    renderFormItem: function renderFormItem(field) {
      var _this3 = this;

      var _this$config$field3 = this.config[field],
          elTag = _this$config$field3.elTag,
          changeMethod = _this$config$field3.changeMethod;

      if (!elTag) {
        console.warn("\u8BF7\u8BBE\u7F6E config[".concat(field, "].elTag"));
        return '';
      }

      return this._$render('form-item', {
        props: {
          field: field,
          value: this.getPathValue(field),
          fieldOptions: this.config[field],
          model: this.elFormOptions.model,
          scopedSlotsFn: this.getSlotRender(field)
        },
        on: {
          change: function change(value) {
            // this.elFormOptions.model[field] = value
            _this3.setPathValue(field, value);

            if (changeMethod) {
              changeMethod.bind(_this3)({
                value: value,
                model: _this3.elFormOptions.model,
                field: field,
                rules: _this3.rules
              });
            }
          }
        }
      });
    },
    drawLayout: function drawLayout() {
      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var renders = [];

      if (layout.length > 0) {
        var _iterator = _createForOfIteratorHelper(layout),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var layoutOptions = _step.value;
            var elTag = layoutOptions.elTag,
                elAttrs = layoutOptions.elAttrs,
                field = layoutOptions.field,
                _layoutOptions$childr = layoutOptions.children,
                children = _layoutOptions$childr === void 0 ? [] : _layoutOptions$childr;

            if (elTag && !['el-row', 'el-col'].includes(elTag)) {
              console.warn('elTag 建议为 el-row，el-col');
            }

            if (field) {
              var fieldOptions = this.config[field];

              if (!this._isValidField(field)) {
                continue;
              }

              if (!this.visibleElFormItem(field)) {
                continue;
              }

              var formItemRender = this.renderElFormItem(field);

              if (elTag) {
                renders.push(this._$render(elTag, {
                  props: elAttrs
                }, [formItemRender]));
              } else {
                renders.push(formItemRender);
              }
            } else if (elTag) {
              renders.push(this._$render(elTag, {
                props: elAttrs
              }, this.drawLayout(children)));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        for (var _field in this.elFormOptions.model) {
          if (!this._isValidField(_field)) {
            continue;
          }

          var _fieldOptions = this.config[_field];

          if (!this.visibleElFormItem(_field)) {
            continue;
          }

          var _formItemRender = this.renderElFormItem(_field);

          renders.push(_formItemRender);
        }
      }

      return renders;
    },
    renderActionBar: function renderActionBar() {
      if (this.$scopedSlots["default"]) {
        return this.$scopedSlots["default"]();
      }

      return '';
    }
  },
  render: function render(h) {
    return h('el-form', {
      props: this.elFormOptions,
      on: toHyphenateEvent(this.$listeners),
      ref: 'elFormRef'
    }, [].concat(_toConsumableArray(this.drawLayout(this.layout)), _toConsumableArray(this.renderActionBar())));
  }
});
// CONCATENATED MODULE: ./src/components/elsa/form/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/Form.vue?vue&type=style&index=0&id=72d28285&lang=less&scoped=true&
var Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/form/Form.vue?vue&type=style&index=0&id=72d28285&lang=less&scoped=true&

            

var Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_options = {};

Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_options.insert = "head";
Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_["a" /* default */], Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_options);



/* harmony default export */ var form_Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_ = (Formvue_type_style_index_0_id_72d28285_lang_less_scoped_true_["a" /* default */].locals || {});
// CONCATENATED MODULE: ./src/components/elsa/form/Form.vue?vue&type=style&index=0&id=72d28285&lang=less&scoped=true&

// CONCATENATED MODULE: ./src/components/elsa/form/Form.vue
var Form_render, Form_staticRenderFns





/* normalize component */

var Form_component = normalizeComponent(
  form_Formvue_type_script_lang_js_,
  Form_render,
  Form_staticRenderFns,
  false,
  null,
  "72d28285",
  null
  
)

/* hot reload */
if (false) { var Form_api; }
Form_component.options.__file = "src/components/elsa/form/Form.vue"
/* harmony default export */ var Form = (Form_component.exports);
// CONCATENATED MODULE: ./src/components/elsa/form/index.js


Form.install = function (Vue) {
  Vue.component(Form.name, Form);
};

/* harmony default export */ var elsa_form = (Form);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elsa/pagination/Pagination.vue?vue&type=script&lang=js&
function Paginationvue_type_script_lang_js_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Paginationvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Paginationvue_type_script_lang_js_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: "".concat(prefix, "-pagination"),
  props: {
    total: {
      type: Number,
      "default": 0
    },
    currentPage: {
      type: Number,
      "default": 1
    },
    pageSize: {
      type: Number,
      "default": 10
    },
    pageSizes: {
      type: Array,
      "default": function _default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      "default": 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      "default": true
    },
    autoScroll: {
      type: Boolean,
      "default": true
    },
    hidden: {
      type: Boolean,
      "default": false
    },
    currentChange: Function,
    prevClick: Function,
    nextClick: Function,
    sizeChange: Function
  },
  render: function render(h) {
    var _this$$props = this.$props,
        hidden = _this$$props.hidden,
        autoScroll = _this$$props.autoScroll,
        currentChange = _this$$props.currentChange,
        prevClick = _this$$props.prevClick,
        nextClick = _this$$props.nextClick,
        sizeChange = _this$$props.sizeChange,
        elProps = Paginationvue_type_script_lang_js_objectWithoutProperties(_this$$props, ["hidden", "autoScroll", "currentChange", "prevClick", "nextClick", "sizeChange"]);

    return h('el-pagination', {
      style: {
        'margin-top': '10px'
      },
      props: elProps,
      on: toHyphenateEvent({
        currentChange: currentChange,
        prevClick: prevClick,
        nextClick: nextClick,
        sizeChange: sizeChange
      })
    });
  }
});
// CONCATENATED MODULE: ./src/components/elsa/pagination/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagination_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elsa/pagination/Pagination.vue
var Pagination_render, Pagination_staticRenderFns




/* normalize component */

var Pagination_component = normalizeComponent(
  pagination_Paginationvue_type_script_lang_js_,
  Pagination_render,
  Pagination_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Pagination_api; }
Pagination_component.options.__file = "src/components/elsa/pagination/Pagination.vue"
/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./src/components/elsa/pagination/index.js


Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination);
};

/* harmony default export */ var pagination = (Pagination);
// CONCATENATED MODULE: ./src/main.js





external_vue_default.a.use(external_element_ui_default.a);
var components = [table, elsa_form, pagination];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var main = __webpack_exports__["default"] = ({
  ElsaTable: table,
  ElsaForm: elsa_form,
  ElsaPagination: pagination,
  install: install
});

/***/ })
/******/ ])["default"];