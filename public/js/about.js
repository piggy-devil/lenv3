"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      todos: [],
      todoText: ""
    });

    function addTodo() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.VUE_APP_BASE_API_URL + '/store-todo', {
        text: state.todoText
      }).then(function () {
        state.todoText = "";
        getTodos();
      });
    }

    function markAsDone(todo) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.VUE_APP_BASE_API_URL + '/todo/mark-as-done', {
        id: todo.id
      }).then(function () {
        return getTodos();
      });
    }

    function markAsUndone(todo) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.VUE_APP_BASE_API_URL + '/todo/mark-as-undone', {
        id: todo.id
      }).then(function () {
        return getTodos();
      });
    }

    function removeTodo(todo) {
      if (!confirm("Are you sure?")) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.VUE_APP_BASE_API_URL + '/delete-todo', {
        id: todo.id
      }).then(function () {
        return getTodos();
      });
    }

    function getTodos() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get(process.env.VUE_APP_BASE_API_URL + '/todos').then(function (response) {
        state.todos = response.data;
      });
    }

    getTodos();
    return {
      state: state,
      addTodo: addTodo,
      markAsDone: markAsDone,
      markAsUndone: markAsUndone,
      removeTodo: removeTodo
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=template&id=63a1714d":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=template&id=63a1714d ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-auto"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "mt-8 text-2xl"
}, "Todos", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mt-3"
};
var _hoisted_4 = {
  "class": "grid grid-cols-12 gap-4"
};
var _hoisted_5 = {
  "class": "col-span-6 space-y-4 px-1",
  style: {
    "height": "500px"
  }
};
var _hoisted_6 = {
  "class": "text-gray-500 text-sm"
};
var _hoisted_7 = {
  "class": "space-x-2"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  key: 0,
  "class": "px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm"
};
var _hoisted_12 = {
  "class": "col-span-6"
};
var _hoisted_13 = {
  "class": "p-8 bg-white shadow-md rounded"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-xl"
}, "Add a todo", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.state.todos, function (todo, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["p-8 bg-white shadow-md rounded flex items-center justify-between", {
        'bg-green-200': todo.done
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(todo.text), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(todo.created_at), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "px-2 text-red-600",
      onClick: function onClick($event) {
        return _ctx.removeTodo(todo);
      },
      title: "Remove todo"
    }, "×", 8
    /* PROPS */
    , _hoisted_8), !todo.done ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "px-2 text-green-600",
      onClick: function onClick($event) {
        return _ctx.markAsDone(todo);
      },
      title: "Mark as done"
    }, "✓", 8
    /* PROPS */
    , _hoisted_9)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      "class": "px-2 text-orange-600",
      onClick: function onClick($event) {
        return _ctx.markAsUndone(todo);
      },
      title: "Mark as undone"
    }, "↶", 8
    /* PROPS */
    , _hoisted_10))])], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), _ctx.state.todos.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, " You dont have any task to do. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.state.todoText = $event;
    }),
    onKeydown: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return _ctx.addTodo && _ctx.addTodo.apply(_ctx, arguments);
    }, ["enter"])),
    "class": "p-2 mt-4 border rounded w-full"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.state.todoText]])])])])])]);
}

/***/ }),

/***/ "./resources/views/components/Todos.vue":
/*!**********************************************!*\
  !*** ./resources/views/components/Todos.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todos_vue_vue_type_template_id_63a1714d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos.vue?vue&type=template&id=63a1714d */ "./resources/views/components/Todos.vue?vue&type=template&id=63a1714d");
/* harmony import */ var _Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos.vue?vue&type=script&lang=js */ "./resources/views/components/Todos.vue?vue&type=script&lang=js");



_Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Todos_vue_vue_type_template_id_63a1714d__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/views/components/Todos.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/views/components/Todos.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/views/components/Todos.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Todos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Todos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/views/components/Todos.vue?vue&type=template&id=63a1714d":
/*!****************************************************************************!*\
  !*** ./resources/views/components/Todos.vue?vue&type=template&id=63a1714d ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Todos_vue_vue_type_template_id_63a1714d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Todos_vue_vue_type_template_id_63a1714d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Todos.vue?vue&type=template&id=63a1714d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/views/components/Todos.vue?vue&type=template&id=63a1714d");


/***/ })

}]);