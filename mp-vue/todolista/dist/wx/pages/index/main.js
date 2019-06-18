require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      todos: [{ text: '吃饭', done: false }, { text: '睡觉', done: false }, { text: '吃鸡', done: false }],
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640']
    };
  },

  methods: {
    addTodo: function addTodo() {
      if (!this.mytodo) return;
      this.todos.push({
        text: this.mytodo,
        done: false
      });
    },
    clearTodo: function clearTodo() {
      // filter
      this.todos = this.todos.filter(function (todo) {
        return !todo.done;
      });
    },
    toggle: function toggle(i) {
      var todos = this.todos.slice(0);
      todos[i].done = !todos[i].done;
      this.todos = todos;
    }
  },
  watch: {
    todos: function todos(_todos) {
      wx.setStorageSync('todos', _todos);
    }
  },
  created: function created() {
    this.todos = wx.getStorageSync('todos') || [];
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    attrs: {
      "indicator-dots": false,
      "autoplay": true,
      "interval": 5000,
      "duration": 1000
    }
  }, _vm._l((_vm.imgUrls), function(img, i) {
    return _c('block', {
      key: i
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + i
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": img,
        "width": "355",
        "height": "150"
      }
    })])], 1)
  })), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mytodo),
      expression: "mytodo"
    }],
    attrs: {
      "type": "text",
      "placeholder": "please input",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.mytodo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mytodo = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addTodo
    }
  }, [_vm._v("添加一条")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.clearTodo
    }
  }, [_vm._v("清除")]), _vm._v(" "), _c('ul', {
    staticClass: "todos"
  }, _vm._l((_vm.todos), function(todo, i) {
    return _c('li', {
      key: i,
      class: {
        'done': todo.done
      },
      attrs: {
        "eventid": '3_' + i
      },
      on: {
        "click": function($event) {
          _vm.toggle(i)
        }
      }
    }, [_vm._v("\n          " + _vm._s(todo.text) + "\n        ")])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2c014a22", esExports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2c014a22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(30);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2c014a22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c014a22", Component.options)
  } else {
    hotAPI.reload("data-v-2c014a22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[8]);