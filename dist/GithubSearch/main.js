(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-landing></app-landing>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyGitSearch';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_gitsearch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/gitsearch.service */ "./src/app/service/gitsearch.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_service_gitsearch_service__WEBPACK_IMPORTED_MODULE_4__["GitsearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.background = 'green';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding-bottom: 40px;\n}\n#search{\n  margin: 8%;\n}\n"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <h1>GitHub Search</h1>\n  </div>\n  <div class=\"row\">\n\n      <div class=\"col-md-4\">\n        <div id=\"search\">\n\n\n          <form (ngSubmit)=search(formSearch)  #formSearch=\"ngForm\">\n            <label for=\"search\">Search:</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" method=\"get\" placeholder=\"search username/repository\"\n              [(ngModel)]='username' (keyup)=\"userSearch()\">\n\n              <label for=\"search\">Search Repo:</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" method=\"get\" placeholder=\"search username/repository\"\n                [(ngModel)]='reponame' (keyup)=\"repoSearch()\">\n          </form>\n        </div>\n      </div>\n\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <p appHighlight>Name:  {{user.login}}</p>\n          Repositories : {{user.public_repos}}<br>\n          created: {{user.created_at}}\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"{{user.avatar_url}}\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div *ngFor=\"let rep of repositories\" class=\"card-body\">\n\n        <li>{{rep.name}}<br>\n            {{rep.description}}<br>\n        </li>\n\n\n    </div>\n  </div>\n  <div *ngFor=\"let lis of repo['items']\" class=\"row\">\n    <li>{{lis['name']}}</li>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_gitsearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/gitsearch.service */ "./src/app/service/gitsearch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(GitsearchService, gitsearch, http) {
        this.GitsearchService = GitsearchService;
        this.gitsearch = gitsearch;
        this.http = http;
        this.user = [];
        this.repositories = [];
        this.repo = [];
    }
    LandingComponent.prototype.search = function (name) {
        name = name || "kimani-njoroge";
        this.gitsearch.outcome = [];
        this.gitsearch.outcome1 = [];
        this.gitsearch.outcome2 = [];
        this.gitsearch.outcome3 = [];
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search("kimani-njoroge");
        this.GitsearchService.getUser().subscribe(function (users) {
            _this.user = users;
        });
        this.GitsearchService.getRepo().subscribe(function (repositories) {
            _this.repositories = repositories;
        });
    };
    LandingComponent.prototype.userSearch = function () {
        var _this = this;
        this.GitsearchService.updateUser(this.username);
        this.GitsearchService.getUser().subscribe(function (users) {
            console.log(users);
            _this.user = users;
        });
        this.GitsearchService.getRepo().subscribe(function (repositories) {
            // console.log(repositories);
            _this.repositories = repositories;
        });
    };
    LandingComponent.prototype.repoSearch = function () {
        var _this = this;
        console.log(this.reponame);
        var res = this.GitsearchService.searchRepo(this.reponame);
        res.then(function (response) {
            _this.repo = response;
            console.log(response);
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_service_gitsearch_service__WEBPACK_IMPORTED_MODULE_2__["GitsearchService"], _service_gitsearch_service__WEBPACK_IMPORTED_MODULE_2__["GitsearchService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/service/gitsearch.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/gitsearch.service.ts ***!
  \**********************************************/
/*! exports provided: GitsearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitsearchService", function() { return GitsearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GitsearchService = /** @class */ (function () {
    function GitsearchService(http) {
        this.http = http;
        this.access_token = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].access_token;
        this.username = 'kimani-njoroge';
        // this.reponame = '';
        this.outcome = [];
        this.outcome1 = [];
        this.outcome2 = [];
        this.outcome3 = [];
    }
    GitsearchService.prototype.getUser = function () {
        return this.http.get('https://api.github.com/users/' + this.username + '?access_token=' + this.access_token)
            .map(function (outcome) { return outcome; });
    };
    GitsearchService.prototype.getRepo = function () {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + this.access_token)
            .map(function (outcome) { return outcome; });
    };
    GitsearchService.prototype.updateUser = function (username) {
        this.username = username;
    };
    GitsearchService.prototype.isEmptyObject = function (obj) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                return false;
            }
        }
        return true;
    };
    GitsearchService.prototype.search = function (name) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "users/" + name, httpOptions).toPromise().then(function (response) {
                if (_this.isEmptyObject(response)) {
                }
                else {
                    _this.outcome2.push(response);
                }
                resolve();
            }, function (err) { return console.log('Error occured'); }),
                _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "search/repositories?q=" + name, httpOptions).toPromise().then(function (response) {
                    if (_this.isEmptyObject(response['items'])) {
                    }
                    else {
                        _this.outcome1.push(response);
                        _this.outcome3 = response.items;
                    }
                    resolve();
                }, function (err) { return console.log('error ocurred'); });
        });
        return promise;
    };
    GitsearchService.prototype.searchRepo = function (reponame) {
        var _this = this;
        var mypromise = new Promise(function (resolve, reject) {
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "search/repositories?q=" + reponame).toPromise().then(function (response) {
                _this.profileUser = response;
                console.log(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
        return mypromise;
    };
    GitsearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GitsearchService);
    return GitsearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "https:api.github.com/",
    access_token: '5e22e14d0ed1b7d92caf76fdc92f65ad0d10421f'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sam/angular/GithubSearch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map