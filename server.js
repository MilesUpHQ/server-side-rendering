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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class CommentList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    if (!this.props.comments) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h4",
        null,
        "loading.."
      );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        null,
        this.props.comments.map(comment => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          { key: comment },
          comment
        ))
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (CommentList);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_App__ = __webpack_require__(8);










const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("public"));

const comments = ["Comment from server 1", "Comment from server 2"];

app.get("*", (request, response, next) => {
  const reducer = (state, action) => {
    return state;
  };
  const store = Object(__WEBPACK_IMPORTED_MODULE_6_redux__["createStore"])(reducer, { comments: ["Redux"] });

  const context = {};
  const markup = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["StaticRouter"],
      { location: request.url, context: context },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__shared_App__["a" /* default */], null)
    )
  ));

  response.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__DATA__ = ${__WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default()(comments)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CommentsPage__ = __webpack_require__(10);





class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
            { to: "/" },
            "Home"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
            { to: "/comments" },
            "Comments"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: "/", exact: true, component: __WEBPACK_IMPORTED_MODULE_2__Container__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: "/comments", component: __WEBPACK_IMPORTED_MODULE_3__CommentsPage__["a" /* default */] })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_CommentList__ = __webpack_require__(2);



class Container extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = () => {
      this.setState({
        commentInput: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      this.setState({
        comments: [...this.state.comments, this.state.commentInput],
        commentInput: ""
      });
    };

    let data;

    if (false) {
      data = window.__DATA__;
    } else {
      data = [];
    }

    this.state = {
      commentInput: "",
      comments: data
    };
  }

  componentDidMount() {
    console.log(this.state.comments);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "form",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
          onChange: this.handleChange,
          type: "text",
          className: "form-control",
          value: this.state.commentInput,
          placeholder: "comment"
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          { onClick: this.handleSubmit, className: "btn btn-primary" },
          "Add"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__browser_CommentList__["a" /* default */], { comments: this.state.comments })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_CommentList__ = __webpack_require__(2);




class CommentsPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      commentInput: ""
    }, this.handleChange = () => {
      this.setState({
        commentInput: event.target.value
      });
    }, _temp;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        onChange: this.handleChange,
        type: "text",
        className: "form-control",
        value: this.state.commentInput,
        placeholder: "comment"
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        {
          onClick: () => this.props.addComment(this.state.commentInput),
          className: "btn btn-primary"
        },
        "Add"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__browser_CommentList__["a" /* default */], { comments: this.props.comments })
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addComment: comment => {
      dispatch({ type: "ADD_COMMENT", comment: comment });
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(CommentsPage));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })
/******/ ]);