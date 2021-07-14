function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h3>\n        OpenEBench: the ELIXIR platform for benchmarking\n    </h3>\n    <p>\n        OpenEBench (https://openebench.bsc.es) is the ELIXIR benchmarking and\n        technical monitoring platform for bioinformatics tools, web servers and\n        workflows. OpenEBench is part of the ELIXIR Tools platform and its\n        development is led by the Barcelona Supercomputing Center (BSC) in\n        collaboration with partners within ELIXIR and beyond.\n    </p>\n    <p>\n        Within the ELIXIR project, OpenEBench is being developed under the Tools\n        Platform at the Work Package 2 (WP2: Benchmarking)\n        (https://elixir-europe.org/platforms/tools).\n    </p>\n\n    <p>\n        All OpenEBench components have been designed and implemented following\n        the recommendations made by the ELIXIR tools platform e.g. making code\n        available in public repositories from day 1; are available as software\n        containers, and use workflow managers promoted by ELIXIR. Next figure\n        illustrates the interconnection of OpenEBench to other ELIXIR tools\n        platforms systems and platforms and beyond.\n    </p>\n    <div>\n        <img src=\"assets/img/oeb-tools-platform.png\" alt=\"Diagram\" />\n    </div>\n    <h4>The goals of OpenEBench</h4>\n    <ul>\n        <li>\n            Provide guidance and software infrastructure for Benchmarking and\n            Techincal monitoring of bioinformatics tools.\n        </li>\n        <li>\n            Engage with existing benchmark initiatives making different\n            communities aware of the platform.\n        </li>\n        <li>\n            Maintain a data warehouse infrastructure to keep record of\n            Benchmarking initiatives.\n        </li>\n        <li>\n            Expose benchmarking and technical monitoring results to Elixir Tools\n            registry.\n        </li>\n        <li>\n            Establish and refine communication protocols with communities and/or\n            infrastructure projects willing to have a unified benchmark\n            infrastructure Coordinate with Elixir.\n        </li>\n        <li>\n            Work with the ELIXIR Interoperability Platform to keep FAIR data\n            principles on the Benchmarking data warehouse.\n        </li>\n    </ul>\n    <h3>Technical monitoring</h3>\n    <p>\n        OpenEBench, holds a specific infrastructure to monitor software quality.\n        In an initial analysis phase BSC has put together a series of quality\n        metrics taken from a number of sources. The source of such metrics\n        includes documents by the Software Sustainability Institute,\n        recommendations for open source software development, or for software\n        quality metrics. For each metric, a specific source of information have\n        been chosen and the necessary interface implemented.\n    </p>\n    <h3>Scientific benchmarking</h3>\n    <p>\n        Scientific benchmarking helps determine the precision, recall and other\n        metrics of bioinformatics resources in unbiased scenarios, which have\n        been set up through reference databases, ad-hoc input and test data sets\n        reflecting specifying scientific challenges. Chosen metrics allow us to\n        objectively evaluate the relative scientific performance of the\n        different participating resources. It is even possible to understand\n        what are the software potential biases, strengths and weaknesses and/or\n        under which conditions do they perform better or worse.\n    </p>\n    <h4>OEB architecture levels</h4>\n    <p>\n        OpenEBench scientific benchmarking architecture has three different\n        levels that allow communities at different maturity stages to make use\n        of the platform.\n    </p>\n    <ul>\n        <li>\n            <h5>Level 1</h5>\n            Used for the long-term storage of benchmarking events and challenges\n            aiming at reproducibility and provenance.\n        </li>\n        <li>\n            <h5>Level 2</h5>\n            Allows the community to use benchmarking workflows to assess\n            participants’ performance. Those workflows compute one or more\n            evaluation metrics given one or more reference datasets.\n        </li>\n        <li>\n            <h5>Level 3</h5>\n            Goes further by getting workflows specifications from participants,\n            and then evaluating them in terms of technical and scientific\n            performance. At this level, the whole benchmarking experiment is\n            performed at OpenEBench; first, the predictions are made using the\n            software provided by the participants, then, those predictions are\n            evaluated with the benchmarking workflows, and, finally, the results\n            are stored and visualized in the web server.\n        </li>\n    </ul>\n    <div>\n        <img src=\"assets/img/oeb-levels.png\" alt=\"Diagram\" />\n    </div>\n    <h3>OpenEBench public API's</h3>\n    <p>\n        Although the OpenEBench website gives access to all information stored\n        in the data warehouse in a friendly manner, the platform is designed to\n        provide information in a way that can be integrated in other\n        infrastructures. To this end a series of RESTful API’s have been\n        developed. Information from these APIs is obtained in JSON format.\n    </p>\n    <ul>\n        <li>\n            OpeneBench tools API:\n            <a href=\"https://openebench.bsc.es/monitor/tool?from=0&to=10\"\n                >https://openebench.bsc.es/monitor/tool</a\n            >\n        </li>\n        <li>\n            OpeneBench scientific API:\n            <a href=\"https://openebench.bsc.es/sciapi/\"\n                >https://openebench.bsc.es/sciapi/</a\n            >\n        </li>\n    </ul>\n    <p class=\"text-center\">\n        <b>The white paper for this project is available </b\n        ><a\n            target=\"_blank\"\n            href=\"https://www.biorxiv.org/content/early/2017/08/31/181677\"\n            >here</a\n        >\n    </p>\n</div>\n\n<!-- <div>\n    <img class=\"diagram\" src=\"assets/img/dashboard_diagram.svg\" alt=\"Diagram\" />\n</div>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <app-top-menu></app-top-menu>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <div class=\"card-group\">\n        <div class=\"card border-light\">\n            <img class=\"main-logo\" src=\"assets/img/opeb_logo.gif\" alt=\"Card image cap\">\n        </div>\n    </div>\n\n    <form class=\"main-search-div\">\n        <input type=\"text\" class=\"main-search\" name='text' [(ngModel)]=\"model\" />\n        <button class=\"main-submit\" type=\"submit\" (click)='submitForm()'>Go!</button>\n    </form>\n\n    <div class=\"card-group\">\n        <div class=\"card border-light\">\n            <a routerLink='/scientific' class=\"card-icon\">\n                <img class=\"card-img-top\" src=\"assets/img/scientific_benchmarking.svg\" alt=\"Card image cap\">\n            </a>\n            <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Scientific Benchmark</h5>\n                <!-- <p class=\"card-text\">\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam natus accusamus aut atque magnam ad\n                    ipsam\n                    nulla recusandae voluptas molestiae corporis suscipit, voluptate quam velit quibusdam doloribus\n                    beatae\n                    eos sunt!\n                </p> -->\n            </div>\n\n\n        </div>\n        <div class=\"card border-light\">\n            <a routerLink='/tool' class=\"card-icon\">\n                <img class=\"card-img-top\" src=\"assets/img/technical_monitoring.svg\" alt=\"Card image cap\">\n            </a>\n            <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Technical Monitoring</h5>\n                <!-- <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero, illo\n                    excepturi\n                    beatae doloribus\n                    nobis amet mollitia temporibus dolorem! Tempora at deleniti dolores aut assumenda repudiandae\n                    voluptatibus eius ad qui.\n\n                </p> -->\n            </div>\n\n\n        </div>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDocsDocsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>docs works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr />\n<div class=\"flex-container\">\n    <div class=\"flex-item\">\n        <img class=\"eu-flag\" src=\"assets/img/eu.png\" alt=\"\" />\n    </div>\n    <div class=\"flex-item\">\n        <small>\n            ELIXIR is partly funded by the European Commission within the\n            Research Infraestructure programme of Horizon 2020, contract no.\n            676559.\n        </small>\n        <br />\n        <small\n            >The sole responsibility for the content of this webpage lies with\n            BSC. It does not necessarily reflect the opinion of the European\n            Union and the European Commission is not responsible for any use\n            that may be made of the information contained therein.\n        </small>\n        <br />\n        <small>\n            Copyright © <a href=\"https://www.bsc.es/\">BSC-CNS</a> 2019\n        </small>\n        <br />\n        <small>\n            Contact\n            <a href=\"mailto:openebench-support@bsc.es\"\n                >openebench-support@bsc.es</a\n            >\n        </small>\n    </div>\n</div>\n<!-- <p class=\"flex-item\">ELIXIR Excelerate is funded by the European Comission, contract no. 676559 </p> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"circletag\" id=\"nay\">\n        <!-- <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"> -->\n        <h1>Page not found</h1>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/private/private.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/private/private.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrivatePrivateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-actions\">\n      <div class=\"userDetails\" *ngIf=\"userDetails\">     \n        <h3 class=\"text-center\">Welcome {{userDetails.firstName}} !</h3>\n        <p class=\"text-center\">{{userDetails.email}}</p>\n        \n\n      <button mat-raised-button (click)=\"logout()\">Log out</button>\n\n      </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStatisticsStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"containerflex\" *ngIf=\"loading==true; else loading \">\n   \n    \n</div>\n<ng-template #loading>loading...</ng-template> -->\n<!-- <div id=\"chart\" style=\"width: 900;height: 500\"></div> -->\n\n\n<!-- loading true -->\n<div *ngIf=\"loading\">\n    loading...\n</div>\n\n<!-- loading false -->\n<div class=\"containerflex\">\n    <div class=\"item\" id=\"toolspublications\"></div>\n    <div class=\"item\" id=\"toolsbioschemas\"></div>\n    <div class=\"item\" id=\"toolsopensource\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopMenuTopMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-white\">\n    <a\n        [hidden]=\"getPath()\"\n        [routerLink]=\"dashboardLink.path\"\n        class=\"navbar-brand\"\n    >\n        <img width=\"100px\" src=\"assets/img/opeb_logo.gif\" alt=\"OpEB\" />\n    </a>\n    <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n    >\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li *ngFor=\"let link of navLinks\" class=\"nav-item\">\n                <a\n                    *ngIf=\"link.path != ''\"\n                    [routerLink]=\"link.path\"\n                    class=\"nav-link\"\n                    >{{ link.label }}</a\n                >\n                <a\n                    *ngIf=\"link.path == ''\"\n                    href=\"{{ link.href }}\"\n                    target=\"_blank\"\n                    class=\"nav-link\"\n                    >{{ link.label }} &nbsp;</a\n                >\n            </li>\n        </ul>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * About component
     */


    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(titleService) {
        _classCallCheck(this, AboutComponent);

        this.titleService = titleService;
        /**
         * Constructor
         */

        this.pageTitle = "About";
      }
      /**
       * Initializer
       */


      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle(this.pageTitle);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _docs_docs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./docs/docs.component */
    "./src/app/docs/docs.component.ts");
    /* harmony import */


    var _private_private_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./private/private.component */
    "./src/app/private/private.component.ts");
    /* harmony import */


    var _app_authguard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.authguard */
    "./src/app/app.authguard.ts"); // import { ToolModule } from './tool/tool.module';
    // import { ScientificModule } from './scientific/scientific.module';

    /**
     * Routes to componentes, ToolComponent and Scientific component have there own specific routeing.modules
     */


    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'tool',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tool-tool-module */
        "tool-tool-module").then(__webpack_require__.bind(null,
        /*! ./tool/tool.module */
        "./src/app/tool/tool.module.ts")).then(function (m) {
          return m.ToolModule;
        });
      }
    }, {
      path: 'scientific',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | scientific-scientific-module */
        "scientific-scientific-module").then(__webpack_require__.bind(null,
        /*! ./scientific/scientific.module */
        "./src/app/scientific/scientific.module.ts")).then(function (m) {
          return m.ScientificModule;
        });
      }
    }, {
      path: 'stats',
      component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'docs',
      component: _docs_docs_component__WEBPACK_IMPORTED_MODULE_7__["DocsComponent"]
    }, {
      path: 'private',
      component: _private_private_component__WEBPACK_IMPORTED_MODULE_8__["PrivateComponent"],
      canActivate: [_app_authguard__WEBPACK_IMPORTED_MODULE_9__["AppAuthGuard"]]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];
    /**
     * root module for routing
     */

    var AppRoutingModule =
    /**
     * export routing module
     */
    function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      // This is a root module so we use forRoot, ,  { enableTracing: true }  is for debuging
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload',
        anchorScrolling: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_authguard__WEBPACK_IMPORTED_MODULE_9__["AppAuthGuard"]]
    })
    /**
     * export routing module
     */
    ], AppRoutingModule);
    /**
     *  routing component
     *  so we dont have to import everything in the module.ts again
     */

    var routingComponents = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _private_private_component__WEBPACK_IMPORTED_MODULE_8__["PrivateComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]];
    /***/
  },

  /***/
  "./src/app/app.authguard.ts":
  /*!**********************************!*\
    !*** ./src/app/app.authguard.ts ***!
    \**********************************/

  /*! exports provided: AppAuthGuard */

  /***/
  function srcAppAppAuthguardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAuthGuard", function () {
      return AppAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! keycloak-angular */
    "./node_modules/keycloak-angular/fesm2015/keycloak-angular.js");
    /**
     * Class Appauthguard extends keycloakauthguard
    */


    var AppAuthGuard = /*#__PURE__*/function (_keycloak_angular__WE) {
      _inherits(AppAuthGuard, _keycloak_angular__WE);

      var _super = _createSuper(AppAuthGuard);

      // tslint:disable-next-line:max-line-length

      /**
       * Construtor method
      */
      function AppAuthGuard(router, keycloakAngular) {
        var _this;

        _classCallCheck(this, AppAuthGuard);

        _this = _super.call(this, router, keycloakAngular);
        _this.router = router;
        _this.keycloakAngular = keycloakAngular;
        return _this;
      }
      /**
       * Checks for user access
      */


      _createClass(AppAuthGuard, [{
        key: "isAccessAllowed",
        value: function isAccessAllowed(route, state) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var keycloakLoginOptions = {
              redirectUri: window.location.origin + '/private'
            };

            if (!_this2.authenticated) {
              _this2.keycloakAngular.login(keycloakLoginOptions);

              return;
            }

            var requiredRoles = route.data.roles;

            if (!requiredRoles || requiredRoles.length === 0) {
              return resolve(true);
            } else {
              if (!_this2.roles || _this2.roles.length === 0) {
                resolve(false);
              }

              var granted = false;

              var _iterator = _createForOfIteratorHelper(requiredRoles),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var requiredRole = _step.value;

                  if (_this2.roles.indexOf(requiredRole) > -1) {
                    granted = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              resolve(granted);
            }
          });
        }
      }]);

      return AppAuthGuard;
    }(keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakAuthGuard"]);

    AppAuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]
      }];
    };

    AppAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]])], AppAuthGuard);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * main app component
     */


    var AppComponent =
    /*#__PURE__*/

    /**
     * expot app angular
     */
    function () {
      function AppComponent(router, titleService) {
        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        /**
         * title
         */

        this.pageTitle = "OpenEBench ";
        var navEndEvents = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        }));
        navEndEvents.subscribe(function (event) {
          gtag("config", "UA-143782781-1", {
            page_path: event.urlAfterRedirects
          });
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle(this.pageTitle);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })
    /**
     * expot app angular
     */
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createApollo, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! keycloak-angular */
    "./node_modules/keycloak-angular/fesm2015/keycloak-angular.js");
    /* harmony import */


    var _utils_app_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils/app-init */
    "./src/app/utils/app-init.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/statistics.service */
    "./src/app/shared/statistics.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./top-menu/top-menu.component */
    "./src/app/top-menu/top-menu.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _docs_docs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./docs/docs.component */
    "./src/app/docs/docs.component.ts"); // Material designe
    // env variable to a local variable


    var envurl = _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].SCIENTIFIC_SERVICE_URL; // function to create apollo client

    function createApollo(httpLink) {
      return {
        link: httpLink.create({
          uri: envurl
        }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_18__["InMemoryCache"]()
      };
    }
    /**
     * Main app module
     */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_11__["TopMenuComponent"], // all the pages that are in top menu
      _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"], _docs_docs_component__WEBPACK_IMPORTED_MODULE_20__["DocsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakAngularModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_16__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_17__["HttpLinkModule"]],
      providers: [_shared_statistics_service__WEBPACK_IMPORTED_MODULE_9__["StatisticsService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: _utils_app_init__WEBPACK_IMPORTED_MODULE_4__["initializer"],
        multi: true,
        deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]]
      }, {
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_16__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_17__["HttpLink"]]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-search-div {\n    padding: 1vh 0 1vh 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    position: relative;\n}\n\n.main-submit {\n    background-color: #FFFFFF;\n    border: solid 1px #EF7500;\n    padding: 15px 32px;\n    text-align: center;\n    width: 20%;\n    height: 60px;\n    cursor: not-allowed;\n}\n\n.main-submit:enabled {\n    cursor: pointer;\n    color: #EF7500;\n}\n\n.border-light {\n    border-color: white !important;\n}\n\n.main-logo {\n    width: 40%;\n    align-self: center\n}\n\n.card-icon {\n    width: 25%;\n    height: auto;\n    align-self: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWFyY2gtZGl2IHtcbiAgICBwYWRkaW5nOiAxdmggMCAxdmggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0VGNzUwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tYWluLXN1Ym1pdDplbmFibGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNFRjc1MDA7XG59XG5cbi5ib3JkZXItbGlnaHQge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tbG9nbyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbn1cblxuLmNhcmQtaWNvbiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _elasticsearch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elasticsearch.service */
    "./src/app/dashboard/elasticsearch.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * Elastic search url to server
     */
    // const ES_URL = environment.ES_URL;
    // /**
    //  * http params for the search
    //  */
    // const PARAMS = new HttpParams({});

    /**
     * Injectable
     */
    // @Injectable()
    // export class OpebService {
    //   /**
    //    * Constructor for the injectable class
    //    */
    //   constructor(private http: HttpClient) {}
    //   /**
    //    * Serch function
    //    */
    //   search(term: string) {
    //     if (term === '') {
    //       return of([]);
    //     }
    //     return this.http
    //       .get(ES_URL, {params: PARAMS.set('text', term)}).pipe(
    //         map(response =>
    //           $.map(response['hits'].hits, function(tool) {
    //             const t = [];
    //             t.push(tool['_source'].name);
    //             return t;
    //           }
    //         )
    //       ));
    //   }
    // }

    /**
     * Dashboard component
     */


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(_service, router, titleService) {
        var _this3 = this;

        _classCallCheck(this, DashboardComponent);

        this._service = _service;
        this.router = router;
        this.titleService = titleService;
        /**
         * searching
         */

        this.searching = false;
        /**
         * searchFailed
         */

        this.searchFailed = false;
        /**
         * Constructor
         */

        this.pageTitle = "OpenEBench";
        /**
         * search for elastic search
         */

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            return _this3.searching = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
            return _this3._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this3.searchFailed = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              _this3.searchFailed = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            return _this3.searching = false;
          }));
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle(this.pageTitle);
        }
        /**
         * Naviage to searched tool via URL
         */

      }, {
        key: "goToToolsPage",
        value: function goToToolsPage(term) {
          this.router.navigate(["/tool"], {
            queryParams: {
              search: term
            },
            queryParamsHandling: ""
          });
        }
        /**
         * Submit the search
         */

      }, {
        key: "submitForm",
        value: function submitForm() {
          this.goToToolsPage(this.model);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _elasticsearch_service__WEBPACK_IMPORTED_MODULE_5__["ElasticsearchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      providers: [_elasticsearch_service__WEBPACK_IMPORTED_MODULE_5__["ElasticsearchService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_elasticsearch_service__WEBPACK_IMPORTED_MODULE_5__["ElasticsearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/elasticsearch.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/elasticsearch.service.ts ***!
    \****************************************************/

  /*! exports provided: ElasticsearchService */

  /***/
  function srcAppDashboardElasticsearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElasticsearchService", function () {
      return ElasticsearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);

    var ElasticsearchService = /*#__PURE__*/function () {
      function ElasticsearchService(http) {
        _classCallCheck(this, ElasticsearchService);

        this.http = http;
        this.ES_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ES_URL;
        this.PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({});
      }
      /**
       * Serch function
       */


      _createClass(ElasticsearchService, [{
        key: "search",
        value: function search(term) {
          if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          }

          return this.http.get(this.ES_URL, {
            params: this.PARAMS.set('text', term)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return jquery__WEBPACK_IMPORTED_MODULE_6__["map"](response['hits'].hits, function (tool) {
              var t = [];
              t.push(tool['_source'].name);
              return t;
            });
          }));
        }
      }]);

      return ElasticsearchService;
    }();

    ElasticsearchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ElasticsearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ElasticsearchService);
    /***/
  },

  /***/
  "./src/app/docs/docs.component.css":
  /*!*****************************************!*\
    !*** ./src/app/docs/docs.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDocsDocsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3MvZG9jcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/docs/docs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/docs/docs.component.ts ***!
    \****************************************/

  /*! exports provided: DocsComponent */

  /***/
  function srcAppDocsDocsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponent", function () {
      return DocsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponent = /*#__PURE__*/function () {
      function DocsComponent() {
        _classCallCheck(this, DocsComponent);
      }

      _createClass(DocsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocsComponent;
    }();

    DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-docs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./docs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./docs.component.css */
      "./src/app/docs/docs.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DocsComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".eu-flag{\n    padding-top: 0.4em;\n    height: 4em;\n}\n.flex-container{\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: nowrap;\n}\n.flex-item{\n    padding: 0.2em;\n    -webkit-box-ordinal-group: 1;\n            order: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNEJBQVE7WUFBUixRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXUtZmxhZ3tcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XG4gICAgaGVpZ2h0OiA0ZW07XG59XG4uZmxleC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5mbGV4LWl0ZW17XG4gICAgcGFkZGluZzogMC4yZW07XG4gICAgb3JkZXI6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * Footer Component
     */


    var FooterComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      /**
       * Initializer
       */


      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js"); // import { CommonModule } from '@angular/common';

    /**
     * Common Material Design modules.
     */


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatPseudoCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]],
      exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatPseudoCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * 404 Component
     */


    var PageNotFoundComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }
      /**
       * Initializer
       */


      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/private/private.component.css":
  /*!***********************************************!*\
    !*** ./src/app/private/private.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrivatePrivateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/private/private.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/private/private.component.ts ***!
    \**********************************************/

  /*! exports provided: PrivateComponent */

  /***/
  function srcAppPrivatePrivateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivateComponent", function () {
      return PrivateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! keycloak-angular */
    "./node_modules/keycloak-angular/fesm2015/keycloak-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * Private area Component
     */


    var PrivateComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function PrivateComponent(keycloakService, router, location) {
        _classCallCheck(this, PrivateComponent);

        this.keycloakService = keycloakService;
        this.router = router;
        this.location = location;
      }
      /**
       * Initializer async
       */


      _createClass(PrivateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.keycloakService.isLoggedIn();

                  case 2:
                    if (!_context.sent) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 5;
                    return this.keycloakService.loadUserProfile();

                  case 5:
                    this.userDetails = _context.sent;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * logout function
         */

      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var redirectUri;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    redirectUri = window.location.origin + '/dashboard';
                    _context2.next = 3;
                    return this.keycloakService.logout(redirectUri);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return PrivateComponent;
    }();

    PrivateComponent.ctorParameters = function () {
      return [{
        type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    PrivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-private',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./private.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/private/private.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./private.component.css */
      "./src/app/private/private.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], PrivateComponent);
    /***/
  },

  /***/
  "./src/app/shared/statistics.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/statistics.service.ts ***!
    \**********************************************/

  /*! exports provided: StatisticsService */

  /***/
  function srcAppSharedStatisticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsService", function () {
      return StatisticsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /**
     * injectable statistics
     */


    var StatisticsService = /*#__PURE__*/function () {
      /**
       * constructor
       */
      function StatisticsService(http) {
        _classCallCheck(this, StatisticsService);

        this.http = http;
        /**
         * url
         */

        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].METRICS_STATISTICS_URL;
      }
      /**
       * get stats from server
       */


      _createClass(StatisticsService, [{
        key: "getStats",
        value: function getStats() {
          return this.http.get(this.URL);
        }
        /**
         * error handle
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return StatisticsService;
    }();

    StatisticsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    StatisticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], StatisticsService);
    /***/
  },

  /***/
  "./src/app/statistics/statistics.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/statistics/statistics.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStatisticsStatisticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.containerflex {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.item{\n    margin: 5px;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lcmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbXtcbiAgICBtYXJnaW46IDVweDsgICBcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/statistics/statistics.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/statistics/statistics.component.ts ***!
    \****************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/statistics.service */
    "./src/app/shared/statistics.service.ts");
    /* harmony import */


    var c3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! c3 */
    "./node_modules/c3/c3.js");
    /* harmony import */


    var c3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     *
     * Componet for Statistics
     */


    var StatisticsComponent = /*#__PURE__*/function () {
      function StatisticsComponent(statsService, titleService) {
        _classCallCheck(this, StatisticsComponent);

        this.statsService = statsService;
        this.titleService = titleService;
        /**
         * Visual loading flag
         */

        this.loading = false;
        /**
         * constructor function
         */

        this.pageTitle = "Statistics";
      }
      /**
       * initializer
       */


      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle(this.pageTitle);
          this.fetchdata();
        }
        /**
         * fetches the data and generates the statistics charts
         */

      }, {
        key: "fetchdata",
        value: function fetchdata() {
          var _this4 = this;

          this.loading = true;
          this.statsService.getStats().subscribe( // 1
          function (data) {
            _this4.data = data;
          }, // 2
          function (err) {
            return console.log(err);
          }, // 3
          function () {
            var statistics = {
              tools: _this4.data["/@timestamp"],
              publications: _this4.data["/project/publications"],
              bioschemas: _this4.data["/project/website/bioschemas:true"],
              opensource: _this4.data["/project/license/open_source:true"]
            };

            _this4.generateChart(statistics);
          });
        }
        /**
         * helper method for the fechdata
         */

      }, {
        key: "generateChart",
        value: function generateChart(data) {
          this.loading = false;
          c3__WEBPACK_IMPORTED_MODULE_3__["generate"]({
            size: {
              height: 340,
              width: 680
            },
            title: {
              text: "Publications"
            },
            data: {
              columns: [["Tools with no publications ", data.tools - data.publications], ["Tools with publications", data.publications]],
              type: "pie"
            },
            tooltip: {
              format: {
                value: function value(_value) {
                  return d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(_value) + " / " + d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(data.tools);
                }
              }
            },
            bindto: "#toolspublications"
          });
          c3__WEBPACK_IMPORTED_MODULE_3__["generate"]({
            size: {
              height: 340,
              width: 680
            },
            title: {
              text: "Bioschemas"
            },
            data: {
              columns: [["Tools with bioschemas", data.bioschemas], ["Tools without bioschemas ", data.tools - data.bioschemas]],
              type: "pie"
            },
            tooltip: {
              format: {
                value: function value(_value2) {
                  return d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(_value2) + " / " + d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(data.tools);
                }
              }
            },
            bindto: "#toolsbioschemas"
          });
          c3__WEBPACK_IMPORTED_MODULE_3__["generate"]({
            size: {
              height: 340,
              width: 680
            },
            data: {
              columns: [["Tools with opensource license", data.opensource], ["Tools without opensource license ", data.tools - data.opensource]],
              type: "pie"
            },
            title: {
              text: "Open Source"
            },
            tooltip: {
              format: {
                value: function value(_value3) {
                  return d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(_value3) + " / " + d3__WEBPACK_IMPORTED_MODULE_4__["format"](",")(data.tools);
                }
              }
            },
            bindto: "#toolsopensource"
          });
        }
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ctorParameters = function () {
      return [{
        type: _shared_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
      }];
    };

    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-statistics",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistics.component.css */
      "./src/app/statistics/statistics.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])], StatisticsComponent);
    /***/
  },

  /***/
  "./src/app/top-menu/top-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/top-menu/top-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopMenuTopMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/top-menu/top-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/top-menu/top-menu.component.ts ***!
    \************************************************/

  /*! exports provided: TopMenuComponent */

  /***/
  function srcAppTopMenuTopMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function () {
      return TopMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! keycloak-angular */
    "./node_modules/keycloak-angular/fesm2015/keycloak-angular.js");
    /**
     * This component is where the we specify the top menu paths
     */


    var TopMenuComponent =
    /*#__PURE__*/

    /**
     * Class top menu component
     */
    function () {
      /**
       * Construtor method
       */
      function TopMenuComponent(location, keycloakService) {
        _classCallCheck(this, TopMenuComponent);

        this.location = location;
        this.keycloakService = keycloakService;
        /**
         * Navigation links and labels for the menu on the right (LOGO)
         */

        this.dashboardLink = {
          label: "Dashboard",
          path: "dashboard"
        };
      }
      /**
       * Call the getProfileName function on start
       */


      _createClass(TopMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navLinks = [{
            label: "Scientific Benchmarking",
            path: "/scientific"
          }, {
            label: "Technical Monitoring",
            path: "/tool"
          }, {
            label: "Statistics",
            path: "/stats"
          }, {
            label: "About",
            path: "/about"
          }, {
            label: "Docs",
            path: "",
            href: "https://openebench.bsc.es/docs/"
          }];
          this.getProfileName();
        }
        /**
         * Gets the name of the user to add toggle between login and username
         */

      }, {
        key: "getProfileName",
        value: function getProfileName() {
          var _this5 = this;

          this.keycloakService.isLoggedIn().then(function (res) {
            if (res) {
              _this5.keycloakService.loadUserProfile().then(function (resp) {
                _this5.navLinks.push({
                  label: resp.username,
                  path: "/private"
                });
              });
            } else {
              _this5.navLinks.push({
                label: "Login",
                path: "/private"
              });
            }
          });
        }
        /**
         * Get URL path
         */

      }, {
        key: "getPath",
        value: function getPath() {
          return this.location.isCurrentPathEqualTo(this.dashboardLink.path);
        }
      }]);

      return TopMenuComponent;
    }();

    TopMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]
      }];
    };

    TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-top-menu",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-menu/top-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-menu.component.css */
      "./src/app/top-menu/top-menu.component.css"))["default"]]
    })
    /**
     * Class top menu component
     */
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], keycloak_angular__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"]])], TopMenuComponent);
    /***/
  },

  /***/
  "./src/app/utils/app-init.ts":
  /*!***********************************!*\
    !*** ./src/app/utils/app-init.ts ***!
    \***********************************/

  /*! exports provided: initializer */

  /***/
  function srcAppUtilsAppInitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializer", function () {
      return initializer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /**
     * Keycloak config file.
     */


    function initializer(keycloak) {
      var _this6 = this;

      return function () {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(function (resolve, reject) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return keycloak.init({
                      config: {
                        url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].AUTH_SERVER,
                        realm: 'openebench',
                        clientId: 'oeb-frontend'
                      },
                      enableBearerInterceptor: false,
                      bearerExcludedUrls: ['/stats', '/tool', '/scientific']
                    });

                  case 3:
                    resolve();
                    _context3.next = 9;
                    break;

                  case 6:
                    _context3.prev = 6;
                    _context3.t0 = _context3["catch"](0);
                    reject(_context3.t0);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 6]]);
          }));
        });
      };
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      ES_URL: 'https://dev-openebench.bsc.es/esapi/filter',
      AUTH_SERVER: 'https://inb.bsc.es/auth',
      TOOL_SEARCH_URL: 'https://dev-openebench.bsc.es/monitor/rest/edam/aggregate',
      TOOL_SERVICE_URL: 'https://dev-openebench.bsc.es/monitor/rest/aggregate',
      TOOL_STATISTICS_URL: 'https://dev-openebench.bsc.es/monitor/rest/statistics',
      METRICS_STATISTICS_URL: 'https://dev-openebench.bsc.es/monitor/rest/metrics/statistics',
      SCIENTIFIC_SERVICE_URL: 'https://dev-openebench.bsc.es/sciapi/graphql'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/user/openEbench-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map