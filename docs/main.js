(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\billy\code\GitHub\heads-up-chat\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JmOG":
/*!******************************!*\
  !*** ./src/assets/swears.js ***!
  \******************************/
/*! exports provided: swears, lesserSwears, deplorable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swears", function() { return swears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lesserSwears", function() { return lesserSwears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deplorable", function() { return deplorable; });
const swears = [
  "anal",
  "anus",
  "arse",
  "asshole",
  "ballsack",
  "balls",
  "bastard",
  "bitch",
  "biatch",
  "bloody",
  "blowjob",
  "blow job",
  "bollock",
  "bollok",
  "boob",
  "bugger",
  "bum",
  "butt",
  "buttplug",
  "clitoris",
  "cock",
  "coon",
  "cuck",
  "cunt",
  "damn",
  "dick",
  "dildo",
  "doodyhead",
  "dyke",
  " fag ",
  "faggot",
  "fellate",
  "fellatio",
  "felching",
  "fuck",
  "f u c k",
  "fudgepacker",
  "fudge packer",
  "flange",
  "goddamn",
  "god damn",
  "hell",
  "homo",
  "jerk",
  "jizz",
  "knobend",
  "knob end",
  "labia",
  "muff",
  "nigger",
  "nigga",
  "penis",
  "piss",
  "prick",
  "pube",
  "pussy",
  "queer",
  "retard",
  " rarted ",
  "ritard",
  "scrote",
  "scrotum",
  "shitty",
  "shit ",
  "sh1t",
  "slut",
  "smegma",
  "spunk",
  "tit ",
  "tits ",
  "titties ",
  "tiddies ",
  "turd",
  "twat",
  "vagina",
  "wank",
  "whore",
];
const lesserSwears = [
  "butt",
  "butts",
  "boner biter",
  "crap",
  "feck",
  "poop",
  "tosser",
];
const deplorable = "nigger";


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_swears_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/swears.js */ "JmOG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-autosize */ "5eqV");






const _c0 = ["mainInputForm"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Silenced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.mainInputText = '';
        this.isObscene = false;
        this.isQuestionable = false;
        this.totalObsceneWordsFound = 0;
        this.silenced = false;
        this.willSilence = false;
        this.silenceCounter = 0; // Persist per account
    }
    ngOnInit() {
        this.mainInputForm.form.valueChanges.subscribe(formData => {
            if (formData.mainInput) {
                const mainFormData = formData.mainInput.toLowerCase();
                this.checkObscene(mainFormData);
            }
        });
    }
    checkObscene(chatInput) {
        this.isObscene = false;
        this.isQuestionable = false;
        this.totalObsceneWordsFound = 0;
        if (chatInput.includes(_assets_swears_js__WEBPACK_IMPORTED_MODULE_1__["deplorable"])) {
            this.willSilence = true;
        }
        else {
            this.willSilence = false;
        }
        _assets_swears_js__WEBPACK_IMPORTED_MODULE_1__["swears"].forEach(word => {
            if (chatInput.includes(word)) {
                this.isObscene = true;
                this.totalObsceneWordsFound++;
                return;
            }
        });
        if (!this.isObscene) {
            this.checkQuestionable(chatInput);
        }
    }
    checkQuestionable(chatInput) {
        _assets_swears_js__WEBPACK_IMPORTED_MODULE_1__["lesserSwears"].forEach(word => {
            if (chatInput.includes(word)) {
                this.isQuestionable = true;
            }
        });
    }
    checkForSend(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            this.sendChatMessage();
        }
    }
    sendChatMessage() {
        if (this.totalObsceneWordsFound > 9 || this.willSilence) {
            this.silenced = true;
        }
        if (this.silenced) {
            this.silenceCounter++;
            this.silenceTimeout();
        }
        this.mainInputForm.reset();
    }
    silenceTimeout() {
        let silenceTimer = 3000;
        if (this.silenceCounter < 9) {
            if (this.silenceCounter < 3) {
                silenceTimer == 3000;
            }
            else {
                switch (this.silenceCounter) {
                    case 3:
                        silenceTimer = 5000;
                        break;
                    case 4:
                        silenceTimer = 7500;
                        break;
                    case 5:
                        silenceTimer = 10000;
                        break;
                    default:
                        silenceTimer = 30000;
                        break;
                }
            }
            setTimeout(() => this.liftSilence(), silenceTimer);
        }
        else {
            // ban
        }
    }
    liftSilence() {
        this.silenced = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainInputForm = _t.first);
    } }, decls: 10, vars: 7, consts: [[1, "silence-container"], ["class", "silenced", 4, "ngIf"], [1, "main-event-container"], ["mainInputForm", "ngForm"], ["autosize", "", "type", "text", "placeholder", "Your objectionable text here", "rows", "auto", "name", "mainInput", "id", "main-input", "autofocus", "", 1, "main-event", 3, "minRows", "maxRows", "ngModel", "disabled", "ngModelChange", "keydown"], ["mainInputEle", ""], [3, "click"], [1, "button-info-text"], [1, "silenced"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.mainInputText = $event; })("keydown", function AppComponent_Template_textarea_keydown_4_listener($event) { return ctx.checkForSend($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.sendChatMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shortcut: Ctrl-Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.silenced);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isObscene ? "red" : ctx.isQuestionable ? "yellow" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minRows", 2)("maxRows", 24)("ngModel", ctx.mainInputText)("disabled", ctx.silenced);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".main-event-container[_ngcontent-%COMP%] {\n  height: auto;\n  width: 50vw;\n  position: fixed;\n  left: 25vw;\n  top: 10vh;\n}\n\n.main-event[_ngcontent-%COMP%] {\n  resize: none;\n  width: 100%;\n  max-height: 80vh;\n  font-size: 1.6rem;\n  background: rgba(102, 51, 153, 0.24);\n  overflow-y: auto;\n}\n\n.silence-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 5vh;\n  left: 25%;\n  width: 50%;\n}\n\n.silenced[_ngcontent-%COMP%] {\n  text-align: center;\n  font-variant: small-caps;\n  font-size: 1.3rem;\n  color: tomato;\n  letter-spacing: 2px;\n}\n\n.button-info-text[_ngcontent-%COMP%] {\n  display: inline;\n  color: grey;\n  font-size: 0.9rem;\n  padding: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ldmVudC1jb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNTB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMjV2dztcclxuICB0b3A6IDEwdmg7XHJcbn1cclxuXHJcbi5tYWluLWV2ZW50IHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogODB2aDtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgNTEsIDE1MywgMC4yNCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNpbGVuY2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1dmg7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zaWxlbmNlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogdG9tYXRvO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5idXR0b24taW5mby10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, { mainInputForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainInputForm', { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-autosize */ "5eqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_4__["AutosizeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map