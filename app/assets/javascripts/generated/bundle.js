webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var browser_1 = __webpack_require__(1);
	var app_1 = __webpack_require__(218);
	var core_1 = __webpack_require__(22);
	var router_1 = __webpack_require__(219);
	var ROUTER_PROVIDERS = [
	    router_1.ROUTER_PROVIDERS,
	    core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, {
	        useValue: app_1.App
	    }),
	    core_1.provide(router_1.APP_BASE_HREF, {
	        useValue: '/'
	    })
	];
	var APP_PROVIDERS = [
	    ROUTER_PROVIDERS
	];
	window.addEventListener("load", function (e) {
	    browser_1.bootstrap(app_1.App, APP_PROVIDERS);
	});


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var common_1 = __webpack_require__(115);
	var router_1 = __webpack_require__(219);
	var AppComponent_1 = __webpack_require__(243);
	var App = (function () {
	    function App(router, location) {
	        console.log('app.ts');
	        this.router = router;
	        this.location = location;
	    }
	    App = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app',
	            encapsulation: core_1.ViewEncapsulation.Emulated,
	            template: "\n    <h1>This is Root Component</h1>\n    <router-outlet></router-outlet>\n  ",
	            directives: [
	                common_1.CORE_DIRECTIVES,
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }),
	        router_1.RouteConfig([
	            { path: '/', name: 'AppComponent', component: AppComponent_1.AppComponent }
	        ]), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(22);
	var AppComponent = (function () {
	    function AppComponent() {
	        console.log('AppComponent.ts');
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            template: '<h1>This is AppComponent</h1>'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


/***/ }

});
//# sourceMappingURL=bundle.js.map