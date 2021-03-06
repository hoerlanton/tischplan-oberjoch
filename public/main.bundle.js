webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__ = __webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__ = __webpack_require__("./src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_digitalerTischplan_tableplan_tableplan_component__ = __webpack_require__("./src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_navigation_navigation_component__ = __webpack_require__("./src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_print_print_component__ = __webpack_require__("./src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_form_form_component__ = __webpack_require__("./src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_departments_departments_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_departmentmenu_departmentmenu_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_departments_feuerstein_feuerstein_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/feuerstein/feuerstein.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_departments_panoramaRestaurant1_panoramaRestaurant1_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant1/panoramaRestaurant1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departments_panoramaRestaurant2_panoramaRestaurant2_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant2/panoramaRestaurant2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_departments_panoramaRestaurant3_panoramaRestaurant3_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant3/panoramaRestaurant3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_departments_iselerRestaurant_iselerRestaurant_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/iselerRestaurant/iselerRestaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_departments_alle_alle_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_login_login_component__ = __webpack_require__("./src/app/components/digitalerTischplan/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_digitalerTischplan_register_register_component__ = __webpack_require__("./src/app/components/digitalerTischplan/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_digitalerTischplan_profile_profile_component__ = __webpack_require__("./src/app/components/digitalerTischplan/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_25__components_digitalerTischplan_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_26__components_digitalerTischplan_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_digitalerTischplan_tischplan_component__["a" /* TischplanComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_digitalerTischplan_im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_digitalerTischplan_tableplan_tableplan_component__["a" /* TableplanComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_digitalerTischplan_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_digitalerTischplan_print_print_component__["a" /* PrintComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_digitalerTischplan_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_digitalerTischplan_departments_departments_component__["a" /* DepartmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_digitalerTischplan_departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_digitalerTischplan_departments_feuerstein_feuerstein_component__["a" /* FeuersteinComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_digitalerTischplan_departments_panoramaRestaurant1_panoramaRestaurant1_component__["a" /* PanoramaRestaurant1Component */],
            __WEBPACK_IMPORTED_MODULE_18__components_digitalerTischplan_departments_panoramaRestaurant2_panoramaRestaurant2_component__["a" /* PanoramaRestaurant2Component */],
            __WEBPACK_IMPORTED_MODULE_19__components_digitalerTischplan_departments_panoramaRestaurant3_panoramaRestaurant3_component__["a" /* PanoramaRestaurant3Component */],
            __WEBPACK_IMPORTED_MODULE_20__components_digitalerTischplan_departments_iselerRestaurant_iselerRestaurant_component__["a" /* IselerRestaurantComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_digitalerTischplan_departments_alle_alle_component__["a" /* AlleComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_digitalerTischplan_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_digitalerTischplan_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_digitalerTischplan_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22_ng2_search_filter__["Ng2SearchPipeModule"],
            __WEBPACK_IMPORTED_MODULE_23__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_28__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_29__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css":
/***/ (function(module, exports) {

module.exports = ".row4 {\n  margin-top: 90px;\n}\n\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n  .btn-send {\n    display: block;\n  }\n  .row4 {\n    margin-top: 0px;\n  }\n\n}\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row4\" style=\"min-height: 80px;\">\n  <div class=\"col-md-3 col-xs-3\" style=\"width: 35%; min-height: 80px\">\n    <div class=\"btn-group-departments\" style=\" width: auto; margin: 0px 10px 5px 0px; float: left; text-align: right; display:table-cell; vertical-align:middle;\" dropdown>\n      <button dropdownToggle type=\"button\" style=\" color: #FFFFFF; border: none\" [ngStyle]=\"{'background-color': '#' + buttonBgColorDropdownToggle}\"   (mouseenter)=\"mouseEnterDropdownToggle()\"  (mouseleave)=\"mouseLeaveDropdownToggle()\" class=\"btn btn-group-departments\">\n        <div *ngIf=\"showAbteilungen\">\n          Abteilungen <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesAlle\">\n          Alle <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesFeuerstein\">\n          Feuerstein <br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesPanoramaRestaurant1\">\n          Panorama<br>Restaurant 1<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesPanoramaRestaurant2\">\n          Panorama <br>Restaurant 2<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesPanoramaRestaurant3\">\n          Panorama <br>Restaurant 3<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n        <div *ngIf=\"showTablesIselerRestaurant\">\n          Iseler<br>Restaurant<br><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </div>\n      </button>\n      <ul *dropdownMenu class=\"dropdown-menu\"  role=\"menu\" style=\"overflow: auto; margin: 0 0 0 20px; width: 200px;\">\n        <li role=\"menuitem\" class=\"tablesFeuerstein\" style=\"padding: 10px\"  (click)=\"showFeuersteinFunction()\" (mouseenter)=\"mouseEnterFeuerstein()\"  (mouseleave)=\"mouseLeaveFeuerstein()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor1}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor1}\">Feuerstein</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"tablesIselerRestaurant\" style=\"padding: 10px\"  (click)=\"showIselerRestaurantFunction()\" (mouseenter)=\"mouseEnterIselerRestaurant()\"  (mouseleave)=\"mouseLeaveIselerRestaurant()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor2}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor2}\">Iseler<br>Restaurant <br></p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"tablesPanoramaRestaurant2\" style=\"padding: 10px\"  (click)=\"showPanoramaRestaurant2Function()\" (mouseenter)=\"mouseEnterPanoramaRestaurant2()\"  (mouseleave)=\"mouseLeavePanoramaRestaurant2()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor4}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor4}\">Panorama <br>Restaurant 2</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"tablesPanoramaRestaurant1\" style=\"padding: 10px\" (click)=\"showPanoramaRestaurant1Function()\" (mouseenter)=\"mouseEnterPanoramaRestaurant1()\"  (mouseleave)=\"mouseLeavePanoramaRestaurant1()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor3}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor3}\">Panorama<br>Restaurant 1</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"tablesPanoramaRestaurant3\" style=\"padding: 10px\" (click)=\"showPanoramaRestaurant3Function()\" (mouseenter)=\"mouseEnterPanoramaRestaurant3()\"  (mouseleave)=\"mouseLeavePanoramaRestaurant3()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor6}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor6}\">Panorama<br>Restaurant 3</p>\n        </li>\n        <li style=\"margin: 0px\" class=\"divider dropdown-divider\"></li>\n        <li role=\"menuitem\" class=\"tablesAlle\" style=\"padding: 10px\"  (click)=\"showAlleFunction()\" (mouseenter)=\"mouseEnterAlle()\"  (mouseleave)=\"mouseLeaveAlle()\" [ngStyle]=\"{'background-color': '#' + buttonBgColor5}\">\n          <p [ngStyle]=\"{'color': '#' + fontColor5}\">Alle</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-3 col-xs-3\" style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showInfoForm()\"  (mouseenter)=\"mouseEnterShowInfoForm()\"  (mouseleave)=\"mouseLeaveShowInfoForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorInfoForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorInfoForm}\">Trace</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px\" (click)=\"showNotizForm()\"  (mouseenter)=\"mouseEnterShowNotizForm()\"  (mouseleave)=\"mouseLeaveShowNotizForm()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorNotizForm}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorNotizForm}\">Notiz</p>\n  </div>\n  <div class=\"col-md-3 col-xs-3\"  style=\"min-height: 40px; width: 21%; border-radius: 3px; padding-left: 5px\" (click)=\"showTablePlan()\"  (mouseenter)=\"mouseEnterShowTablePlan()\"  (mouseleave)=\"mouseLeaveShowTablePlan()\" [ngStyle]=\"{'background-color': '#' + buttonBgColorShowTablePlan}\">\n    <p style=\"margin: 8px 0px 0px 0px; text-align: center\" [ngStyle]=\"{'color': '#' + fontColorShowTablePlan}\">Tischplan</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentmenuComponent = (function () {
    function DepartmentmenuComponent() {
        this.showFeuersteinBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPanoramaRestaurant1BoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPanoramaRestaurant2BoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPanoramaRestaurant3BoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showIselerRestaurantBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showTeeStubeBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAlleBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showNotizFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showInfoFormBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showTablePlanBoolChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAbteilungen = true;
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.buttonBgColorDropdownToggle = "0a7a74";
    }
    DepartmentmenuComponent.prototype.ngOnInit = function () {
    };
    DepartmentmenuComponent.prototype.showFeuersteinFunction = function () {
        //console.log("showFeuerstein!");
        this.showTablesFeuerstein = true;
        this.showTablesPanoramaRestaurant1 = false;
        this.showTablesIselerRestaurant = false;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesAlle = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor1 === "154846") {
            this.buttonBgColor1 = "0d2f2e";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor1 = "0a7a74";
        }
        if (this.fontColor1 === "f3efe4") {
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor1 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showIselerRestaurantFunction = function () {
        //console.log("showPanoramRestaurant1!");
        this.showAbteilungen = false;
        this.showTablesFeuerstein = false;
        this.showTablesPanoramaRestaurant1 = false;
        //console.log(this.showPanoramaRestaurant1);
        this.showTablesIselerRestaurant = true;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesAlle = false;
        if (this.buttonBgColor2 === "154846") {
            this.buttonBgColor2 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor2 = "0a7a74";
        }
        if (this.fontColor2 === "f3efe4") {
            this.fontColor2 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor2 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showPanoramaRestaurant1Function = function () {
        //console.log("showIselerRestaurant!");
        this.showTablesFeuerstein = false;
        this.showTablesPanoramaRestaurant1 = true;
        this.showTablesIselerRestaurant = false;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesAlle = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor3 === "154846") {
            this.buttonBgColor3 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor3 = "0a7a74";
        }
        if (this.fontColor3 === "f3efe4") {
            this.fontColor3 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor4 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor3 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showPanoramaRestaurant2Function = function () {
        //console.log("showPanoramaRestaurant2!");
        this.showTablesFeuerstein = false;
        this.showTablesPanoramaRestaurant1 = false;
        this.showTablesIselerRestaurant = false;
        this.showTablesPanoramaRestaurant2 = true;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesAlle = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor4 === "154846") {
            this.buttonBgColor4 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor4 = "0a7a74";
        }
        if (this.fontColor4 === "f3efe4") {
            this.fontColor4 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor4 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showPanoramaRestaurant3Function = function () {
        //console.log("showPanoramaRestaurant2!");
        this.showTablesFeuerstein = false;
        this.showTablesPanoramaRestaurant1 = false;
        this.showTablesIselerRestaurant = false;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = true;
        this.showTablesAlle = false;
        this.showAbteilungen = false;
        if (this.buttonBgColor6 === "154846") {
            this.buttonBgColor6 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor5 = "0a7a74";
        }
        else {
            this.buttonBgColor6 = "0a7a74";
        }
        if (this.fontColor6 === "f3efe4") {
            this.fontColor6 = "0a7a74";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor5 = "f3efe4";
            this.fontColor4 = "f3efe4";
        }
        else {
            this.fontColor6 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showAlleFunction = function () {
        //console.log("showAlle!");
        this.showTablesFeuerstein = false;
        this.showTablesPanoramaRestaurant1 = false;
        this.showTablesIselerRestaurant = false;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesAlle = true;
        if (this.buttonBgColor5 === "154846") {
            this.buttonBgColor5 = "0d2f2e";
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor4 = "0a7a74";
            this.buttonBgColor6 = "0a7a74";
        }
        else {
            this.buttonBgColor5 = "0a7a74";
        }
        if (this.fontColor5 === "f3efe4") {
            this.fontColor5 = "0a7a74";
            this.fontColor4 = "f3efe4";
            this.fontColor1 = "f3efe4";
            this.fontColor2 = "f3efe4";
            this.fontColor3 = "f3efe4";
            this.fontColor6 = "f3efe4";
        }
        else {
            this.fontColor5 = "f3efe4";
        }
        this.showFeuersteinBoolChange.emit(this.showTablesFeuerstein);
        this.showPanoramaRestaurant1BoolChange.emit(this.showTablesPanoramaRestaurant1);
        this.showPanoramaRestaurant2BoolChange.emit(this.showTablesPanoramaRestaurant2);
        this.showPanoramaRestaurant3BoolChange.emit(this.showTablesPanoramaRestaurant3);
        this.showIselerRestaurantBoolChange.emit(this.showTablesIselerRestaurant);
        this.showAlleBoolChange.emit(this.showTablesAlle);
    };
    DepartmentmenuComponent.prototype.showInfoForm = function () {
        //console.log("showTraceForm!");
        this.showNotizFormBool = false;
        this.showInfoFormBool = true;
        this.showTablePlanBool = false;
        if (this.buttonBgColorInfoForm === "154846") {
            this.buttonBgColorInfoForm = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorInfoForm = "0a7a74";
        }
        if (this.fontColorInfoForm === "f3efe4") {
            this.fontColorInfoForm = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorInfoForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showNotizForm = function () {
        //console.log("showNotizForm!");
        this.showNotizFormBool = true;
        this.showTablePlanBool = false;
        this.showInfoFormBool = false;
        if (this.buttonBgColorNotizForm === "154846") {
            this.buttonBgColorNotizForm = "0d2f2e";
            this.buttonBgColorInfoForm = "0a7a74";
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        else {
            this.buttonBgColorNotizForm = "0a7a74";
        }
        if (this.fontColorNotizForm === "f3efe4") {
            this.fontColorNotizForm = "0a7a74";
            this.fontColorInfoForm = "f3efe4";
            this.fontColorShowTablePlan = "f3efe4";
        }
        else {
            this.fontColorNotizForm = "f3efe4";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.showTablePlan = function () {
        //console.log("showTablePlan!");
        this.showNotizFormBool = false;
        this.showTablePlanBool = true;
        this.showInfoFormBool = false;
        if (this.buttonBgColorShowTablePlan = "154846") {
            this.buttonBgColorShowTablePlan = "0d2f2e";
            this.buttonBgColorNotizForm = "0a7a74";
            this.buttonBgColorInfoForm = "0a7a74";
        }
        else {
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
        if (this.fontColorShowTablePlan = "f3efe4") {
            this.fontColorShowTablePlan = "0a7a74";
            this.fontColorNotizForm = "f3efe4";
            this.fontColorInfoForm = "f3efe4";
        }
        else {
            this.fontColorShowTablePlan = "0a7a74";
        }
        this.showNotizFormBoolChange.emit(this.showNotizFormBool);
        this.showInfoFormBoolChange.emit(this.showInfoFormBool);
        this.showTablePlanBoolChange.emit(this.showTablePlanBool);
    };
    DepartmentmenuComponent.prototype.mouseEnterShowInfoForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorInfoForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowInfoForm = function () {
        if (this.buttonBgColorInfoForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorInfoForm = "154846";
        }
        else if (this.buttonBgColorInfoForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorInfoForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowNotizForm = function () {
        //console.log("mouse enter : ");
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse enter1 :');
            this.buttonBgColorNotizForm = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowNotizForm = function () {
        if (this.buttonBgColorNotizForm === "0a7a74") {
            //console.log('mouse leave1 :');
            this.buttonBgColorNotizForm = "154846";
        }
        else if (this.buttonBgColorNotizForm === "154846") {
            //console.log('mouse leave2 :');
            this.buttonBgColorNotizForm = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterShowTablePlan = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveShowTablePlan = function () {
        if (this.buttonBgColorShowTablePlan === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "154846";
        }
        else if (this.buttonBgColorShowTablePlan === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorShowTablePlan = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterDropdownToggle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveDropdownToggle = function () {
        if (this.buttonBgColorDropdownToggle === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "154846";
        }
        else if (this.buttonBgColorDropdownToggle === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColorDropdownToggle = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterFeuerstein = function () {
        //console.log("mouse enter mouseEnterFeuerstein: ");
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterFeuerstein:');
            this.buttonBgColor1 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveFeuerstein = function () {
        if (this.buttonBgColor1 === "0a7a74") {
            //console.log('mouse leave1 mouseLeaveFeuerstein:');
            this.buttonBgColor1 = "154846";
        }
        else if (this.buttonBgColor1 === "154846") {
            //console.log('mouse leave2 mouseLeaveFeuerstein:');
            this.buttonBgColor1 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterPanoramaRestaurant1 = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeavePanoramaRestaurant1 = function () {
        if (this.buttonBgColor3 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "154846";
        }
        else if (this.buttonBgColor3 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor3 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterIselerRestaurant = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveIselerRestaurant = function () {
        if (this.buttonBgColor2 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "154846";
        }
        else if (this.buttonBgColor2 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor2 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterPanoramaRestaurant2 = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeavePanoramaRestaurant2 = function () {
        if (this.buttonBgColor4 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "154846";
        }
        else if (this.buttonBgColor4 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor4 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterPanoramaRestaurant3 = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeavePanoramaRestaurant3 = function () {
        if (this.buttonBgColor6 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "154846";
        }
        else if (this.buttonBgColor6 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor6 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.mouseEnterAlle = function () {
        //console.log("mouse enter mouseEnterShowTablePlan: ");
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse enter1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
    };
    DepartmentmenuComponent.prototype.mouseLeaveAlle = function () {
        if (this.buttonBgColor5 === "0a7a74") {
            //console.log('mouse leave1 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "154846";
        }
        else if (this.buttonBgColor5 === "154846") {
            //console.log('mouse leave2 mouseEnterShowTablePlan:');
            this.buttonBgColor5 = "0a7a74";
        }
    };
    DepartmentmenuComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    return DepartmentmenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColor6", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor1'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor2'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor3'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor4'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor5'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColor6'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColor6", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesAlle'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablesAlle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentmenuComponent.prototype, "showFeuersteinBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentmenuComponent.prototype, "showPanoramaRestaurant1BoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentmenuComponent.prototype, "showPanoramaRestaurant2BoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentmenuComponent.prototype, "showPanoramaRestaurant3BoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], DepartmentmenuComponent.prototype, "showIselerRestaurantBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], DepartmentmenuComponent.prototype, "showTeeStubeBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], DepartmentmenuComponent.prototype, "showAlleBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorInfoForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorInfoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorNotizForm'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorNotizForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('buttonBgColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "buttonBgColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontColorShowTablePlan'),
    __metadata("design:type", String)
], DepartmentmenuComponent.prototype, "fontColorShowTablePlan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], DepartmentmenuComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], DepartmentmenuComponent.prototype, "showNotizFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], DepartmentmenuComponent.prototype, "showInfoFormBoolChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _k || Object)
], DepartmentmenuComponent.prototype, "showTablePlanBoolChange", void 0);
DepartmentmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departmentmenu',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DepartmentmenuComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=departmentmenu.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/alle/alle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesAlle\">\n  <div *ngFor=\"let table of tables; let j = index;\">\n      <h4><b> Tisch:</b>{{table.number}} </h4><br>\n      <div class='cards-container' id='containerTables' [ngStyle]=\"{'background-color': + table.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + table.bgColor}\">\n          <div *ngIf=\"table.isBesetzt === 'true'\">\n            <div [style.border]=\"getStyle(table.bemerkungValue)\">\n              <div *ngIf=\"table.nameValue\">\n                <p style=\"background-color: #FFFFFF; padding: 10px\">\n                  <b> Gast: </b> {{table.nameValue}}<br>\n                  <b> Anrede: </b> {{table.anredeValue}}<br>\n                  <b> Zimmernummer: </b> {{table.zimmernummerValue}}<br>\n                  <b> Anreise Datum: </b> {{table.anreiseValue}}<br>\n                  <b> Abreise Datum: </b> {{table.abreiseValue}}<br>\n                  <b> Personenanzahl: </b> {{table.personenAnzahlValue}}<br>\n                  <b> HP/F: </b> {{table.preisTypValue}}<br>\n                  <b> Kategorie: </b> {{table.kategorieValue}}<br>\n                  <b> Bemerkung: </b> {{table.bemerkungValue}}<br>\n                </p>\n              </div>\n            </div>\n            <div *ngIf=\"table.newTraceText\">\n              <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                <b> Zimmernummer: </b>{{table.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{table.newTraceText}} <br> <b> Tischnummer: </b>{{table.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{table.newTraceEmployee}} <br> <b> Name: </b>{{table.newTraceName}} <br> <b> Datum: </b>{{table.newTraceDate}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"table.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"tables\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{table.number}} {{table.department}} {{j}}</p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/alle/alle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlleComponent = (function () {
    function AlleComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AlleComponent.prototype.ngOnInit = function () {
    };
    AlleComponent.prototype.occupy = function (table, j) {
        this.occupied.emit({ table: table, j: j });
    };
    AlleComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    AlleComponent.prototype.transform = function (tables, term) {
        //console.log("term");
        //console.log(term);
        if (Array.isArray(tables) && tables.length && term && term.length) {
            this.tables = tables.filter(function (item) {
                //console.log(item);
                var keys = Object.keys(item);
                //console.log(keys);
                if (Array.isArray(keys) && keys.length) {
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return false;
                }
            });
        }
        else {
            return tables;
        }
    };
    return AlleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Object)
], AlleComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], AlleComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], AlleComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AlleComponent.prototype, "occupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesAlle'),
    __metadata("design:type", Boolean)
], AlleComponent.prototype, "showTablesAlle", void 0);
AlleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alle',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/alle/alle.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlleComponent);

var _a;
//# sourceMappingURL=alle.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/departments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-feuerstein [term]=\"term\" [tablesFeuerstein]=\"tablesFeuerstein\" [showTablesFeuerstein]=\"showTablesFeuerstein\" (occupied)=\"occupied($event)\"></app-feuerstein>\n<app-panorama-restaurant-1 [term]=\"term\" [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\" [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\" (occupied)=\"occupied($event)\"></app-panorama-restaurant-1>\n<app-panorama-restaurant-2 [term]=\"term\" [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\" [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\" (occupied)=\"occupied($event)\"></app-panorama-restaurant-2>\n<app-panorama-restaurant-3 [term]=\"term\" [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\" [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\" (occupied)=\"occupied($event)\"></app-panorama-restaurant-3>\n<app-iseler-restaurant [term]=\"term\" [tablesIselerRestaurant]=\"tablesIselerRestaurant\" [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\" (occupied)=\"occupied($event)\"></app-iseler-restaurant>\n<app-alle [showTablesAlle]=\"showTablesAlle\" [term]=\"term\" [tables]=\"tables\" [tablesFeuerstein]=\"tablesFeuerstein\" [tablesIselerRestaurant]=\"tablesIselerRestaurant\" [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\" [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\" [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\" (occupied)=\"occupied($event)\"></app-alle>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panoramaRestaurant1_panoramaRestaurant1_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant1/panoramaRestaurant1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panoramaRestaurant2_panoramaRestaurant2_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant2/panoramaRestaurant2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panoramaRestaurant3_panoramaRestaurant3_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant3/panoramaRestaurant3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__iselerRestaurant_iselerRestaurant_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/iselerRestaurant/iselerRestaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feuerstein_feuerstein_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/feuerstein/feuerstein.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alle_alle_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/alle/alle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DepartmentsComponent = (function () {
    function DepartmentsComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.dispensedFeuerstein = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedIselerRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedPanoramaRestaurant2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedPanoramaRestaurant3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dispensedPanoramaRestaurant1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateAzList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updateImHausListeElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parts = [];
        this.date = [];
        this.parsedDate = [];
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
    };
    DepartmentsComponent.prototype.occupied = function (table) {
        //console.log("table.j");
        //console.log(table.j);
        //console.log("table.table");
        //console.log(table.table);
        this.occupy(table.table, table.t);
    };
    DepartmentsComponent.prototype.occupy = function (table, j) {
        var _this = this;
        console.log("occupy called");
        console.log(table);
        this.tischplanService.dispenseTable(table).subscribe(function (response) {
            console.log(JSON.stringify(response));
            console.log(j);
            //console.log(j);
            //console.log("bgColor:" + JSON.stringify(response));
            //console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
            //console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
            if (typeof response == null || typeof response[j] == null) {
                return;
            }
            else {
                if (response[j].department === "iselerRestaurant") {
                    _this.dispensedIselerRestaurant.emit(response[j].tables);
                }
                else if (response[j].department === "feuerstein") {
                    _this.dispensedFeuerstein.emit(response[j].tables);
                }
                else if (response[j].department === "panoramaRestaurant1") {
                    _this.dispensedPanoramaRestaurant1.emit(response[j].tables);
                }
                else if (response[j].department === "panoramaRestaurant2") {
                    _this.dispensedPanoramaRestaurant2.emit(response[j].tables);
                }
                else if (response[j].department === "panoramaRestaurant3") {
                    _this.dispensedPanoramaRestaurant3.emit(response[j].tables);
                }
            }
        }, function (error) { return console.log("Error: ", error); }, function () {
            console.log(table);
            _this.updateAzList.emit();
            if (table.length > 1) {
                for (var i = 0; i < table.length; i++) {
                    _this.updateImHausListeElement.emit(table[i].table);
                }
            }
            else {
                if (table.constructor === Array) {
                    console.log("isarray");
                    _this.updateImHausListeElement.emit(table[0].table);
                }
                else {
                    _this.updateImHausListeElement.emit(table);
                }
            }
        });
        this.tischplanService.addPlaceholder(table).subscribe(function (response) {
            console.log("Add placeholder!");
            //console.log("Add placeholder! table ... " + JSON.stringify(table));
            //console.log("placeholder:" + JSON.stringify(response));
            /*
            if (typeof response == null) {
              return;
            } else {
              if (response[j].department === "panoramaRestaurant1") {
                this.dispensedIselerRestaurant.emit(response[j].tables);
              }
              else if (response[j].department === "Feuerstein") {
                this.dispensedFeuerstein.emit(response[j].tables);
              }
              else if (response[j].department === "PanoramaRestaurant1") {
                this.dispensedPanoramaRestaurant1.emit(response[j].tables);
              }
              else if (response[j].department === "panoramaRestaurant2") {
                this.dispensedPanoramaRestaurant2.emit(response[j].tables);
              }
              else if (response[j].department === "teestubeTeelounge") {
                this.dispensedTeestubeTeelounge.emit(response[j].tables);
              }
            }
            */
        });
    };
    DepartmentsComponent.prototype.addInformationToTable = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("dataString");
        //console.log(dataString);
        this.tischplanService.addInformationToTable(dataString)
            .subscribe(function (response) {
            // let arrayIndex = response[1];
            //console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response[0].department === "panoramaRestaurant1") {
                    _this.dispensedPanoramaRestaurant1.emit(response[0].tables);
                }
                else if (response[0].department === "feuerstein") {
                    _this.dispensedFeuerstein.emit(response[0].tables);
                }
                else if (response[0].department === "iselerRestaurant") {
                    _this.dispensedIselerRestaurant.emit(response[0].tables);
                }
                else if (response[0].department === "panoramaRestaurant2") {
                    _this.dispensedPanoramaRestaurant2.emit(response[0].tables);
                }
                else if (response[0].department === "panoramaRestaurant3") {
                    _this.dispensedPanoramaRestaurant3.emit(response[0].tables);
                }
            }
            // //console.log(this.tablesIselerRestaurant[arrayIndex]);
        });
        this.updateAzList.emit();
    };
    DepartmentsComponent.prototype.occupyTableOnDrop = function (dataString, arrayIndex) {
        var _this = this;
        //console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
            .subscribe(function (response) {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            //console.log("Response occupyTable:" + JSON.stringify(response));
            if (response === null) {
                return;
            }
            else {
                if (response.tables[0].department === "panoramaRestaurant1") {
                    _this.tablesPanoramaRestaurant1[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "feuerstein") {
                    _this.tablesFeuerstein[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "iselerRestaurant") {
                    _this.tablesIselerRestaurant[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "panoramaRestaurant2") {
                    _this.tablesPanoramaRestaurant2[arrayIndex] = response.tables[0];
                }
                else if (response.tables[0].department === "panoramaRestaurant3") {
                    _this.tablesPanoramaRestaurant3[arrayIndex] = response.tables[0];
                }
            }
            //console.log("bgColor:" + JSON.stringify(this.tablesIselerRestaurant[arrayIndex]));
        });
        //console.log("placeholder:" + JSON.stringify(this.tablesIselerRestaurant[arrayIndex]));
    };
    DepartmentsComponent.prototype.changeBgColorIfAnreise = function () {
        var _this = this;
        setTimeout(function () {
            _this.tablesChangeBgColorIfAnreise = _this.tablesTempAbreise;
            //console.log('=================================================changeBgColorIfAnreise');
            //console.log(this.tablesChangeBgColorIfAnreise);
            _this.dateTodayGenerated = new Date();
            _this.parts = [];
            _this.parsedDate = [];
            _this.date = [];
            for (var a = 0; a < _this.tablesChangeBgColorIfAnreise.length; a++) {
                for (var b = 0; b < _this.tablesChangeBgColorIfAnreise[a].tables.length; b++) {
                    if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups) {
                        for (var c = 0; c < _this.tablesChangeBgColorIfAnreise[a].tables[b].groups.length; c++) {
                            if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c]) {
                                if (_this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue) {
                                    //console.log('tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue: ' + c + " " + this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue);
                                    _this.parts[0] = _this.tablesChangeBgColorIfAnreise[a].tables[b].groups[c].anreiseValue.match(/(\d+)/g);
                                }
                                else {
                                    _this.parts[0] = "undefined";
                                }
                                if (_this.parts[0]) {
                                    _this.date[0] = new Date(2018, _this.parts[0][1] - 1, _this.parts[0][0]);
                                    _this.parsedDate[0] = String(_this.date[0]).substring(0, 15);
                                    console.log('changeBgColorIfAnreise this.parsedDate[0]');
                                    console.log(_this.parsedDate[0]);
                                }
                                // note parts[1]-1
                                // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
                                // Mon May 31 2010 00:00:00
                                // this.tablesRestaurant[j].anreiseValue
                                var dateToday = String(_this.dateTodayGenerated).substring(0, 15);
                                //console.log('Parsed Date --->: ' + this.parsedDate[0]);
                                //console.log('this.dateGenerated --->: ' + dateToday);
                                if (dateToday.indexOf(_this.parsedDate[0]) !== -1) {
                                    if (_this.tablesChangeBgColorIfAnreise[a].department === "iselerRestaurant") {
                                        if (_this.tablesIselerRestaurant[b]) {
                                            _this.tablesIselerRestaurant[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "feuerstein") {
                                        if (_this.tablesFeuerstein[b]) {
                                            _this.tablesFeuerstein[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "panoramaRestaurant1") {
                                        if (_this.tablesPanoramaRestaurant1[b]) {
                                            _this.tablesPanoramaRestaurant1[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "panoramaRestaurant2") {
                                        if (_this.tablesPanoramaRestaurant2[b]) {
                                            _this.tablesPanoramaRestaurant2[b].bgColor = "#0a7a74";
                                        }
                                    }
                                    else if (_this.tablesChangeBgColorIfAnreise[a].department === "panoramaRestaurant3") {
                                        if (_this.tablesPanoramaRestaurant3[b]) {
                                            _this.tablesPanoramaRestaurant3[b].bgColor = "#0a7a74";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 1000);
    };
    DepartmentsComponent.prototype.transform = function (term) {
        if (this.showTablesAlle) {
            this.alleComponent.transform(this.tables, term);
        }
        else if (this.showTablesFeuerstein) {
            this.feuersteinComponent.transform(this.tablesFeuerstein, term);
        }
        else if (this.showTablesPanoramaRestaurant1) {
            this.panoramaRestaurant1Component.transform(this.tablesPanoramaRestaurant1, term);
        }
        else if (this.showTablesPanoramaRestaurant2) {
            this.panoramaRestaurant2Component.transform(this.tablesPanoramaRestaurant2, term);
        }
        else if (this.showTablesPanoramaRestaurant3) {
            this.panoramaRestaurant3Component.transform(this.tablesPanoramaRestaurant3, term);
        }
        else if (this.showTablesIselerRestaurant) {
            this.iselerRestaurantComponent.transform(this.tablesIselerRestaurant, term);
        }
    };
    return DepartmentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], DepartmentsComponent.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], DepartmentsComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesAlle'),
    __metadata("design:type", Boolean)
], DepartmentsComponent.prototype, "showTablesAlle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTempAbreise'),
    __metadata("design:type", Object)
], DepartmentsComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DepartmentsComponent.prototype, "dispensedFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], DepartmentsComponent.prototype, "dispensedIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], DepartmentsComponent.prototype, "dispensedPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], DepartmentsComponent.prototype, "dispensedPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], DepartmentsComponent.prototype, "dispensedPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], DepartmentsComponent.prototype, "updateAzList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], DepartmentsComponent.prototype, "updateImHausListeElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__alle_alle_component__["a" /* AlleComponent */]),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__alle_alle_component__["a" /* AlleComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__alle_alle_component__["a" /* AlleComponent */]) === "function" && _h || Object)
], DepartmentsComponent.prototype, "alleComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__panoramaRestaurant1_panoramaRestaurant1_component__["a" /* PanoramaRestaurant1Component */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__panoramaRestaurant1_panoramaRestaurant1_component__["a" /* PanoramaRestaurant1Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__panoramaRestaurant1_panoramaRestaurant1_component__["a" /* PanoramaRestaurant1Component */]) === "function" && _j || Object)
], DepartmentsComponent.prototype, "panoramaRestaurant1Component", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__panoramaRestaurant2_panoramaRestaurant2_component__["a" /* PanoramaRestaurant2Component */]),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__panoramaRestaurant2_panoramaRestaurant2_component__["a" /* PanoramaRestaurant2Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__panoramaRestaurant2_panoramaRestaurant2_component__["a" /* PanoramaRestaurant2Component */]) === "function" && _k || Object)
], DepartmentsComponent.prototype, "panoramaRestaurant2Component", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__panoramaRestaurant3_panoramaRestaurant3_component__["a" /* PanoramaRestaurant3Component */]),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__panoramaRestaurant3_panoramaRestaurant3_component__["a" /* PanoramaRestaurant3Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__panoramaRestaurant3_panoramaRestaurant3_component__["a" /* PanoramaRestaurant3Component */]) === "function" && _l || Object)
], DepartmentsComponent.prototype, "panoramaRestaurant3Component", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__iselerRestaurant_iselerRestaurant_component__["a" /* IselerRestaurantComponent */]),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__iselerRestaurant_iselerRestaurant_component__["a" /* IselerRestaurantComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__iselerRestaurant_iselerRestaurant_component__["a" /* IselerRestaurantComponent */]) === "function" && _m || Object)
], DepartmentsComponent.prototype, "iselerRestaurantComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__feuerstein_feuerstein_component__["a" /* FeuersteinComponent */]),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__feuerstein_feuerstein_component__["a" /* FeuersteinComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__feuerstein_feuerstein_component__["a" /* FeuersteinComponent */]) === "function" && _o || Object)
], DepartmentsComponent.prototype, "feuersteinComponent", void 0);
DepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-departments',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/departments.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _p || Object])
], DepartmentsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=departments.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/feuerstein/feuerstein.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesFeuerstein\">\n  <div *ngFor=\"let tableFeuerstein of tablesFeuerstein; let j = index;\">\n    <div *ngIf=\"tablesFeuerstein[j] !== tablesFeuerstein[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\"  type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableFeuerstein)\">{{tableFeuerstein.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableFeuerstein.number}} </h4><br>\n      <div class='cards-container' id='containerFeuerstein' [ngStyle]=\"{'background-color': + tableFeuerstein.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableFeuerstein.bgColor}\">\n          <div *ngIf=\"tableFeuerstein.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableFeuerstein.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.bemerkungValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Gast: </b> {{group.nameValue}}<br>\n                    <b> Anrede: </b> {{group.anredeValue}}<br>\n                    <b> Zimmernummer: </b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum: </b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum: </b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl: </b> {{group.personenAnzahlValue}}<br>\n                    <b> HP/F: </b> {{group.preisTypValue}}<br>\n                    <b> Kategorie: </b> {{group.kategorieValue}}<br>\n                    <b> Bemerkung: </b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tableFeuerstein.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"Feuerstein\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tableFeuerstein.number}} {{tableFeuerstein.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/feuerstein/feuerstein.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeuersteinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeuersteinComponent = (function () {
    function FeuersteinComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.t = 1;
    }
    FeuersteinComponent.prototype.ngOnInit = function () {
    };
    FeuersteinComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    FeuersteinComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    FeuersteinComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesFeuerstein = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesFeuerstein = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return FeuersteinComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], FeuersteinComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], FeuersteinComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], FeuersteinComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FeuersteinComponent.prototype, "occupied", void 0);
FeuersteinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-feuerstein',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/feuerstein/feuerstein.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeuersteinComponent);

var _a;
//# sourceMappingURL=feuerstein.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/iselerRestaurant/iselerRestaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesIselerRestaurant\">\n  <div *ngFor=\"let tableIselerRestaurant of tablesIselerRestaurant; let j = index;\">\n    <div *ngIf=\"tablesIselerRestaurant[j] !== tablesIselerRestaurant[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tableIselerRestaurant)\">{{tableIselerRestaurant.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tableIselerRestaurant.number}} </h4><br>\n      <div class='cards-container' id='containerIselerRestaurant' [ngStyle]=\"{'background-color': + tableIselerRestaurant.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tableIselerRestaurant.bgColor}\">\n          <div *ngIf=\"tableIselerRestaurant.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tableIselerRestaurant.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.bemerkungValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Gast: </b> {{group.nameValue}}<br>\n                    <b> Anrede: </b> {{group.anredeValue}}<br>\n                    <b> Zimmernummer: </b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum: </b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum: </b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl: </b> {{group.personenAnzahlValue}}<br>\n                    <b> HP/F: </b> {{group.preisTypValue}}<br>\n                    <b> Kategorie: </b> {{group.kategorieValue}}<br>\n                    <b> Bemerkung: </b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n        </div>\n        <div *ngIf=\"tableIselerRestaurant.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"IselerRestaurant\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen! {{tableIselerRestaurant.number}} {{tableIselerRestaurant.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/iselerRestaurant/iselerRestaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IselerRestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IselerRestaurantComponent = (function () {
    function IselerRestaurantComponent() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.t = 3;
    }
    IselerRestaurantComponent.prototype.ngOnInit = function () {
    };
    IselerRestaurantComponent.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    IselerRestaurantComponent.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    IselerRestaurantComponent.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesIselerRestaurant = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesIselerRestaurant = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return IselerRestaurantComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], IselerRestaurantComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], IselerRestaurantComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], IselerRestaurantComponent.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], IselerRestaurantComponent.prototype, "occupied", void 0);
IselerRestaurantComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-iseler-restaurant',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/iselerRestaurant/iselerRestaurant.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IselerRestaurantComponent);

var _a;
//# sourceMappingURL=iselerRestaurant.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant1/panoramaRestaurant1.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesPanoramaRestaurant1\">\n  <div *ngFor=\"let tablePanoramaRestaurant1 of tablesPanoramaRestaurant1; let j = index;\">\n    <div *ngIf=\"tablesPanoramaRestaurant1[j] !== tablesPanoramaRestaurant1[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanoramaRestaurant1)\">{{tablePanoramaRestaurant1.isBesetzt === 'true' ? 'FREI MACHEN' : '' }}</button>\n      <h4><b> Tisch: </b>{{tablePanoramaRestaurant1.number}} </h4><br>\n      <div class='cards-container' id='containerPanoramaRestaurant1'  [ngStyle]=\"{'background-color': + tablePanoramaRestaurant1.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanoramaRestaurant1.bgColor}\">\n          <div *ngIf=\"tablePanoramaRestaurant1.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tablePanoramaRestaurant1.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.bemerkungValue)\">\n                <div *ngIf=\"group\">\n                  <div *ngIf=\"group.nameValue\">\n                    <p style=\"background-color: #FFFFFF; padding: 10px\">\n                      <b> Gast: </b> {{group.nameValue}}<br>\n                      <b> Anrede: </b> {{group.anredeValue}}<br>\n                      <b> Zimmernummer: </b> {{group.zimmernummerValue}}<br>\n                      <b> Anreise Datum: </b> {{group.anreiseValue}}<br>\n                      <b> Abreise Datum: </b> {{group.abreiseValue}}<br>\n                      <b> Personenanzahl: </b> {{group.personenAnzahlValue}}<br>\n                      <b> HP/F: </b> {{group.preisTypValue}}<br>\n                      <b> Kategorie: </b> {{group.kategorieValue}}<br>\n                      <b> Bemerkung: </b> {{group.bemerkungValue}}<br>\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"tablePanoramaRestaurant1.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"PanoramaRestaurant1\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tablePanoramaRestaurant1.number}} {{tablePanoramaRestaurant1.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant1/panoramaRestaurant1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramaRestaurant1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanoramaRestaurant1Component = (function () {
    function PanoramaRestaurant1Component() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.t = 1;
    }
    PanoramaRestaurant1Component.prototype.ngOnInit = function () {
    };
    PanoramaRestaurant1Component.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    PanoramaRestaurant1Component.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    PanoramaRestaurant1Component.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesPanoramaRestaurant1 = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesPanoramaRestaurant1 = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return PanoramaRestaurant1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], PanoramaRestaurant1Component.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], PanoramaRestaurant1Component.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], PanoramaRestaurant1Component.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PanoramaRestaurant1Component.prototype, "occupied", void 0);
PanoramaRestaurant1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panorama-restaurant-1',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant1/panoramaRestaurant1.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanoramaRestaurant1Component);

var _a;
//# sourceMappingURL=panoramaRestaurant1.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant2/panoramaRestaurant2.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesPanoramaRestaurant2\">\n  <div *ngFor=\"let tablePanoramaRestaurant2 of tablesPanoramaRestaurant2; let j = index;\">\n    <div *ngIf=\"tablesPanoramaRestaurant2[j] !== tablesPanoramaRestaurant2[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanoramaRestaurant2)\">{{tablePanoramaRestaurant2.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tablePanoramaRestaurant2.number}} </h4><br>\n      <div class='cards-container' id='containerPanoramaRestaurant2' [ngStyle]=\"{'background-color': + tablePanoramaRestaurant2.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanoramaRestaurant2.bgColor}\">\n          <div *ngIf=\"tablePanoramaRestaurant2.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tablePanoramaRestaurant2.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.bemerkungValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Gast: </b> {{group.nameValue}}<br>\n                    <b> Anrede: </b> {{group.anredeValue}}<br>\n                    <b> Zimmernummer: </b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum: </b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum: </b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl: </b> {{group.personenAnzahlValue}}<br>\n                    <b> HP/F: </b> {{group.preisTypValue}}<br>\n                    <b> Kategorie: </b> {{group.kategorieValue}}<br>\n                    <b> Bemerkung: </b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tablePanoramaRestaurant2.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"PanoramaRestaurant2\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tablePanoramaRestaurant2.number}} {{tablePanoramaRestaurant2.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant2/panoramaRestaurant2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramaRestaurant2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanoramaRestaurant2Component = (function () {
    function PanoramaRestaurant2Component() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.t = 4;
    }
    PanoramaRestaurant2Component.prototype.ngOnInit = function () {
    };
    PanoramaRestaurant2Component.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    PanoramaRestaurant2Component.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    PanoramaRestaurant2Component.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesPanoramaRestaurant2 = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesPanoramaRestaurant2 = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return PanoramaRestaurant2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], PanoramaRestaurant2Component.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], PanoramaRestaurant2Component.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], PanoramaRestaurant2Component.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PanoramaRestaurant2Component.prototype, "occupied", void 0);
PanoramaRestaurant2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panorama-restaurant-2',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant2/panoramaRestaurant2.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanoramaRestaurant2Component);

var _a;
//# sourceMappingURL=panoramaRestaurant2.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant3/panoramaRestaurant3.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablesPanoramaRestaurant3\">\n  <div *ngFor=\"let tablePanoramaRestaurant3 of tablesPanoramaRestaurant3; let j = index;\">\n    <div *ngIf=\"tablesPanoramaRestaurant3[j] !== tablesPanoramaRestaurant3[j+1]\">\n      <button style=\"float: right; margin: 20px 0px 20px 0px; background-color: #0a7a74; color: #FFFFFF\" type=\"button\" class=\"btn btn-send\" (click)=\"occupy(tablePanoramaRestaurant3)\">{{tablePanoramaRestaurant3.isBesetzt === 'true' ? 'FREI MACHEN' : ''}}</button>\n      <h4><b> Tisch:</b>{{tablePanoramaRestaurant3.number}} </h4><br>\n      <div class='cards-container' id='containerPanoramaRestaurant3' [ngStyle]=\"{'background-color': + tablePanoramaRestaurant3.bgColor}\">\n        <div class=\"table\" [ngStyle]=\"{'background-color': '#' + tablePanoramaRestaurant3.bgColor}\">\n          <div *ngIf=\"tablePanoramaRestaurant3.isBesetzt === 'true'\">\n            <div *ngFor=\"let group of tablePanoramaRestaurant3.groups; let j = index;\">\n              <div [style.border]=\"getStyle(group.bemerkungValue)\">\n                <div *ngIf=\"group.nameValue\">\n                  <p style=\"background-color: #FFFFFF; padding: 10px\">\n                    <b> Gast: </b> {{group.nameValue}}<br>\n                    <b> Anrede: </b> {{group.anredeValue}}<br>\n                    <b> Zimmernummer: </b> {{group.zimmernummerValue}}<br>\n                    <b> Anreise Datum: </b> {{group.anreiseValue}}<br>\n                    <b> Abreise Datum: </b> {{group.abreiseValue}}<br>\n                    <b> Personenanzahl: </b> {{group.personenAnzahlValue}}<br>\n                    <b> HP/F: </b> {{group.preisTypValue}}<br>\n                    <b> Kategorie: </b> {{group.kategorieValue}}<br>\n                    <b> Bemerkung: </b> {{group.bemerkungValue}}<br>\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"group.newTraceText\">\n                <p style=\"background-color: #FFFFFF; border: solid 3px red\">\n                  <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"tablePanoramaRestaurant3.placeholder === 'true'\">\n          <p [dragula]='\"evented-bag\"' id=\"PanoramaRestaurant3\" style=\"background-color: #9d9d9d; border: dashed 3px black; margin-top: 50px; opacity: 0.4; padding: 10px 10px 10px 10px\">Listen-Element hier hin ziehen!{{tablePanoramaRestaurant3.number}} {{tablePanoramaRestaurant3.department}} {{j}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/departments/panoramaRestaurant3/panoramaRestaurant3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramaRestaurant3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanoramaRestaurant3Component = (function () {
    function PanoramaRestaurant3Component() {
        this.occupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.t = 4;
    }
    PanoramaRestaurant3Component.prototype.ngOnInit = function () {
    };
    PanoramaRestaurant3Component.prototype.occupy = function (table) {
        var t = this.t;
        this.occupied.emit({ table: table, t: t });
    };
    PanoramaRestaurant3Component.prototype.getStyle = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    PanoramaRestaurant3Component.prototype.transform = function (tables, term) {
        console.log("term");
        console.log(term);
        if (term == "") {
            this.tablesPanoramaRestaurant3 = tables;
        }
        else {
            if (Array.isArray(tables) && tables.length && term && term.length) {
                this.tablesPanoramaRestaurant3 = tables.filter(function (item) {
                    console.log(item);
                    var keys = Object.keys(item);
                    if (item.groups) {
                        var keysGroups = Object.keys(item.groups);
                        console.log(keys);
                        console.log(keysGroups);
                        console.log();
                        if (Array.isArray(keys) && keys.length) {
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var key = keys_1[_i];
                                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                    return true;
                                }
                                else if (item.groups) {
                                    for (var _a = 0, keysGroups_1 = keysGroups; _a < keysGroups_1.length; _a++) {
                                        var keyGroups = keysGroups_1[_a];
                                        var keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                                        for (var _b = 0, keysGroupsGroups_1 = keysGroupsGroups; _b < keysGroupsGroups_1.length; _b++) {
                                            var keyGroupsGroups = keysGroupsGroups_1[_b];
                                            if (item.groups[keyGroups][keyGroupsGroups]) {
                                                if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        }
                        else {
                            return false;
                        }
                    }
                });
            }
            else {
                return tables;
            }
        }
    };
    return PanoramaRestaurant3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], PanoramaRestaurant3Component.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], PanoramaRestaurant3Component.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('term'),
    __metadata("design:type", String)
], PanoramaRestaurant3Component.prototype, "term", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PanoramaRestaurant3Component.prototype, "occupied", void 0);
PanoramaRestaurant3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panorama-restaurant-3',
        template: __webpack_require__("./src/app/components/digitalerTischplan/departments/panoramaRestaurant3/panoramaRestaurant3.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanoramaRestaurant3Component);

var _a;
//# sourceMappingURL=panoramaRestaurant3.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showNotizFormBool\">\n  <div *ngIf=\"showTablesAlle === false\">\n    <div class=\"notiz\">\n      <div *ngIf=\"showTablesFeuerstein\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Feuerstein'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> <b> Notiz: </b>{{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesPanoramaRestaurant1\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Panorama Restaurant 1'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> <b> Notiz: </b>{{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesPanoramaRestaurant2\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Panorama Restaurant 2'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> <b> Notiz: </b>{{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesPanoramaRestaurant3\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Panorama Restaurant 3'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> <b> Notiz: </b>{{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesIselerRestaurant\">\n        <div *ngFor=\"let notizElement of notizElements\">\n          <div *ngIf=\"notizElement.departmentNotizInput === 'Iseler Restaurant'\">\n            <div style=\"border: solid 3px greenyellow; padding: 10px; margin: 20px;\">\n              <p  style=\"color: white\"> <b> Notiz: </b>{{notizElement.notizInput === '' ? \"Keine Notiz\" : notizElement.notizInput}} <br><b>  Datum: </b> {{notizElement.notizInput === '' ? \"\" : notizElement.date}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form class=\"SendNotiz\"  #myForm=\"ngForm\" (submit)=\"sendNotiz($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\" style=\"min-height: 250px\">\n        <div class=\"col-lg-12\">\n          <label for=\"department\" style=\"padding-bottom: 20px\">Abteilung</label>\n          <select class=\"form-control\"  id=\"department\" style=\"margin-bottom: 10px;\" required [(ngModel)]=\"departmentNotizInput\" placeholder=\"Abteilung auswählen\" name=\"departmentNotizInput\">\n            <option *ngFor=\"let department of departments\"\n                    [value]=\"department\">\n              {{department}}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-lg-12\">\n                <textarea id=\"notizText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"notizInput\" placeholder=\"Notiz hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n<div *ngIf=\"showInfoFormBool\">\n  <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"sendInformation($event); myForm.reset() \">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"name\" [(ngModel)]=\"nameTraceInput\" name=\"Name\" placeholder=\"Name\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"roomNumber\" [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Zimmer Nummer\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"tableNumber\" [(ngModel)]=\"tableNumber\" name=\"tableNumber\" placeholder=\"Tisch Nummer\">\n          <input  class=\"form-control\" style=\"margin-top: 20px\" id=\"employee\" [(ngModel)]=\"employee\" name=\"employee\" placeholder=\"Mitarbeiter\">\n        </div>\n        <div class=\"col-lg-12 col-xs-12\">\n                <textarea id=\"informationText\" rows=\"5\" type=\"text\" style=\"margin-bottom: 10px; margin-top: 20px\" [(ngModel)]=\"title\" placeholder=\"Trace hinzufügen\" name=\"title\" class=\"form-control\" required>\n                </textarea>\n        </div>\n      </div>\n      <button type=\"button|submit|reset\" style=\"float: right; margin: 10px 20px 0px 0px;\" class=\"btn btn-primary\">Hinzufügen</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(tischplanService, _flashMessagesService) {
        this.tischplanService = tischplanService;
        this._flashMessagesService = _flashMessagesService;
        this.newInformationElements = [];
        this.notizResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeColorIfAnreiseExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.departments = [];
        this.departments = ["Feuerstein", "Panorama Restaurant 1", "Panorama Restaurant 2", "Panorama Restaurant 3", "Iseler Restaurant"];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendInformation = function (event) {
        var _this = this;
        event.preventDefault();
        this.dateGenerated = new Date();
        var newInformation = {
            text: this.title,
            roomNumber: this.roomNumber,
            tableNumber: this.tableNumber,
            date: this.dateGenerated,
            name: this.nameTraceInput,
            employee: this.employee
        };
        if (newInformation.text === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
            console.log(newInformation.tableNumber);
            if (newInformation.tableNumber) {
                this.tischplanService.sendInformation(newInformation)
                    .subscribe(function (Information) {
                    //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                    console.log('Information: ' + JSON.stringify(Information));
                    console.log(Information.tables[0]);
                    console.log("------");
                    //console.log(Information[0].tables);
                    if (Information === null) {
                        return;
                    }
                    else {
                        if (Information.tables[0].department === "feuerstein") {
                            for (var i = 0; i < _this.tablesFeuerstein.length; i++) {
                                if (_this.tablesFeuerstein[i].number === Information.tables[0].number) {
                                    _this.tablesFeuerstein[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "iselerRestaurant") {
                            for (var i = 0; i < _this.tablesIselerRestaurant.length; i++) {
                                if (_this.tablesIselerRestaurant[i].number === Information.tables[0].number) {
                                    _this.tablesIselerRestaurant[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "panoramaRestaurant1") {
                            for (var i = 0; i < _this.tablesPanoramaRestaurant1.length; i++) {
                                if (_this.tablesPanoramaRestaurant1[i].number === Information.tables[0].number) {
                                    _this.tablesPanoramaRestaurant1[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "panoramaRestaurant2") {
                            for (var i = 0; i < _this.tablesPanoramaRestaurant2.length; i++) {
                                if (_this.tablesPanoramaRestaurant2[i].number === Information.tables[0].number) {
                                    _this.tablesPanoramaRestaurant2[i] = Information.tables[0];
                                }
                            }
                        }
                        else if (Information.tables[0].department === "panoramaRestaurant3") {
                            for (var i = 0; i < _this.tablesPanoramaRestaurant3.length; i++) {
                                if (_this.tablesPanoramaRestaurant3[i].number === Information.tables[0].number) {
                                    _this.tablesPanoramaRestaurant3[i] = Information.tables[0];
                                }
                            }
                        }
                    }
                });
                this.changeColorIfAnreiseExport.emit();
            }
            this.tischplanService.sendInformationToBox(newInformation)
                .subscribe(function (Information) {
                //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
                console.log('Information: ' + JSON.stringify(Information));
                //console.log(Information.tables[0]);
                //console.log("------");
                //console.log(Information[0].tables);
                _this.newInformationElements.push(Information);
                console.log('this.newInformationElements' + _this.newInformationElements);
            });
        }
    };
    FormComponent.prototype.sendNotiz = function (event) {
        var _this = this;
        event.preventDefault();
        this.notizDate = String(new Date()).substring(0, 15);
        var newNotiz = {
            notizInput: this.notizInput,
            departmentNotizInput: this.departmentNotizInput,
            date: this.notizDate
        };
        if (newNotiz.notizInput === undefined) {
            this._flashMessagesService.show('Die Nachricht ist leer ... ', { cssClass: 'alert-danger', timeout: 20000 });
            return;
        }
        else {
            this._flashMessagesService.show('Erfolgreich Information gespeichert ... ', { cssClass: 'alert-success', timeout: 20000 });
        }
        this.tischplanService.sendInformationToNotizBlock(newNotiz)
            .subscribe(function (Notiz) {
            //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
            console.log('Information: ' + JSON.stringify(Notiz));
            //console.log(Information.tables[0]);
            //console.log("------");
            //console.log(Information[0].tables);
            _this.notizResponse.emit(Notiz);
            _this.notizElements = Notiz;
            console.log('this.newInformationElements' + _this.newInformationElements);
        });
    };
    return FormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], FormComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGenerated'),
    __metadata("design:type", Object)
], FormComponent.prototype, "dateGenerated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], FormComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('roomNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "roomNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tableNumber'),
    __metadata("design:type", String)
], FormComponent.prototype, "tableNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nameTraceInput'),
    __metadata("design:type", String)
], FormComponent.prototype, "nameTraceInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('employee'),
    __metadata("design:type", String)
], FormComponent.prototype, "employee", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTeestubeTeelounge'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesTeestubeTeelounge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], FormComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showInfoFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showInfoFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showNotizFormBool'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showNotizFormBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('notizElements'),
    __metadata("design:type", Object)
], FormComponent.prototype, "notizElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesAlle'),
    __metadata("design:type", Boolean)
], FormComponent.prototype, "showTablesAlle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FormComponent.prototype, "notizResponse", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FormComponent.prototype, "changeColorIfAnreiseExport", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("./src/app/components/digitalerTischplan/form/form.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], FormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Im-Haus-Liste</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n          <div *ngIf=\"imHausListeElement.bemerkung === '-' && !imHausListeElement.isAnreise\">\n            <div class='cards-container' id='container1' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card1\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Gast:</b> {{imHausListeElement.name}}<br>\n              <b>Anrede:</b> {{imHausListeElement.anrede}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Kategorie:</b> {{imHausListeElement.kat}}<br>\n              <b>HP/F:</b> {{imHausListeElement.preis}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"anreiseTextButton\" style=\"height: 45px\">\n  <h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74; max-width: 50%; float: left\">Anreisen</h3>\n  <div class=\"btn-group\" style=\"float: right\" dropdown>\n    <button style=\"margin: 10px 0 0 0\" dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Heute/Morgen<span class=\"caret\"></span></button>\n    <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 0px; height: auto\" role=\"menu\">\n      <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeToday\" (mouseenter)=\"mouseEnterChangeTodayButton()\"  (mouseleave)=\"mouseLeaveChangeTodayButton()\" (click)=\"changeDayToToday($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorToday}\"><p >Heute</p></div>\n      <div style=\"margin: 0 0 0 0; padding: 10px\" class=\"changeTomorrow\" (mouseenter)=\"mouseEnterChangeTomorrowButton()\"  (mouseleave)=\"mouseLeaveChangeTomorrowButton()\" (click)=\"changeDayToTomorrow($event); sortList($event)\" [ngStyle]=\"{'background-color': '#' + bgColorTomorrow}\"><p >Morgen</p></div>\n    </ul>\n  </div>\n</div>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n      <div *ngIf=\"imHausListeElement.bemerkung === '-' && imHausListeElement.isAnreise\">\n        <div class='cards-container' id='container2' [dragula]='\"evented-bag\"'>\n          <div class=\"card\" id=\"card2\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n            <p>\n              <b>Gast:</b> {{imHausListeElement.name}}<br>\n              <b>Anrede:</b> {{imHausListeElement.anrede}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Kategorie:</b> {{imHausListeElement.kat}}<br>\n              <b>HP/F:</b> {{imHausListeElement.preis}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<h3 style=\"margin-top: 0;margin-bottom: 0;color: #0a7a74;\">Gäste mit Bemerkungen</h3>\n<div class=\"row1\">\n  <div class='wrapper'>\n    <div *ngFor=\"let imHausListeElement of imHausListeElemente\">\n          <div *ngIf=\"imHausListeElement.bemerkung != '-'\">\n            <div class='cards-container' id='container3' [dragula]='\"evented-bag\"'>\n              <div class=\"card\" id=\"card3\" [ngStyle]=\"{'background-color': '#' + imHausListeElement.bgColor}\">\n            <p>\n              <b>Gast:</b> {{imHausListeElement.name}}<br>\n              <b>Anrede:</b> {{imHausListeElement.anrede}}<br>\n              <b>Personen Anzahl:</b> {{imHausListeElement.erwKi}}<br>\n              <b>Zimmernummer:</b> {{imHausListeElement.zimmernummer}}<br>\n              <b>Anreise:</b> {{imHausListeElement.anreise}}<br>\n              <b>Abreise:</b> {{imHausListeElement.abreise}}<br>\n              <b>Kategorie:</b> {{imHausListeElement.kat}}<br>\n              <b>HP/F:</b> {{imHausListeElement.preis}}<br>\n              <b>Bemerkung:</b> {{imHausListeElement.bemerkung}}<br>\n            </p>\n            <div *ngIf=\"imHausListeElement.bgColor === '0a7a74'\">\n              <i class=\"fa fa-check\" style=\"float: right; color: white\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImHausListeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImHausListeComponent = (function () {
    function ImHausListeComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.parts = [];
        this.tomorrow = false;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "ffffff";
    }
    ImHausListeComponent.prototype.ngOnInit = function () {
    };
    ImHausListeComponent.prototype.updateImHausListeElement = function (informationElements2) {
        var _this = this;
        this.tischplanService.updateImHausListeElement(informationElements2)
            .subscribe(function (response) {
            response.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = response;
            //console.log('updateImHausListeElement response: ');
            //console.log(response);
            _this.sortList();
        });
    };
    ImHausListeComponent.prototype.changeDayToToday = function () {
        this.tomorrow = null;
        this.bgColorTomorrow = "ffffff";
        this.bgColorToday = "0a7a74";
    };
    ImHausListeComponent.prototype.changeDayToTomorrow = function () {
        this.tomorrow = true;
        this.bgColorTomorrow = "0a7a74";
        this.bgColorToday = "ffffff";
    };
    ImHausListeComponent.prototype.mouseEnterChangeTodayButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorToday === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "bdbdbd";
        }
        if (this.bgColorToday === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTodayButton = function () {
        if (this.bgColorToday === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorToday = "ffffff";
        }
        if (this.bgColorToday === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorToday = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.mouseEnterChangeTomorrowButton = function () {
        //console.log("mouse enter : ");
        if (this.bgColorTomorrow === "ffffff") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "bdbdbd";
        }
        if (this.bgColorTomorrow === "0a7a74") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "05504c";
        }
    };
    ImHausListeComponent.prototype.mouseLeaveChangeTomorrowButton = function () {
        if (this.bgColorTomorrow === "bdbdbd") {
            //console.log('mouse leave1 :');
            this.bgColorTomorrow = "ffffff";
        }
        if (this.bgColorTomorrow === "05504c") {
            //console.log('mouse enter1 :');
            this.bgColorTomorrow = "0a7a74";
        }
    };
    ImHausListeComponent.prototype.sortList = function () {
        if (this.tomorrow) {
            this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        }
        else {
            this.dateTodayGenerated = new Date();
        }
        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
        //console.log("===========================ANREISEN===============================");
        //console.log(dateToday);
        for (var i = 0; i < this.imHausListeElemente.length; i++) {
            this.imHausListeElemente[i].isAnreise = false;
            if (this.imHausListeElemente[i].anreise) {
                this.parts = this.imHausListeElemente[i].anreise.match(/(\d+)/g);
                //console.log(this.parts);
            }
            if (this.parts) {
                this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
                //console.log(this.date);
                this.parsedDate = String(this.date).substring(0, 15);
                //console.log(this.parsedDate);
            }
            if (dateToday.indexOf(this.parsedDate) !== -1) {
                this.imHausListeElemente[i].isAnreise = true;
            }
        }
    };
    return ImHausListeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('imHausListeElemente'),
    __metadata("design:type", Array)
], ImHausListeComponent.prototype, "imHausListeElemente", void 0);
ImHausListeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-im-haus-liste',
        template: __webpack_require__("./src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _a || Object])
], ImHausListeComponent);

var _a;
//# sourceMappingURL=im-haus-liste.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    background-color: #0a7a74;\n}\n\n.row {\n    height: 100%;\n    background-color: #0a7a74;\n  margin: 0;\n\n}\n\n.row .container-fluid {\n    background-color: #0a7a74;\n    height: 100vh;\n\n}\n\n.row .container-fluid .col-md-4 {\n    background-color: #0a7a74;\n    height: 100%;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n<div class=\"row\">\n<div class=\"container-fluid\">\n    <div class=\"col-md-4  hidden-xs hidden-sm\">\n    </div>\n    <div class=\"col-md-4\" style=\"padding-top: 20px\">\n      <div class=\"brand\" style=\"text-align: center\"><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2017/05/servicio-logo-lang-weiss.png\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: center; display:inline-block; vertical-align:middle;\"></div>\n      <h2 style=\"color: #FFFFFF\">Login</h2>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Benutzername</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label style=\"color: #FFFFFF\">Passwort</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" style=\"background-color: #ffffff; color: #0a7a74\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4  hidden-xs  hidden-sm\">\n    </div>\n</div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {FlashMessagesService} from 'angular2-flash-messages';
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log("Login submit");
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // this.flashMessage.show('You are now logged in', {
                //   cssClass: 'alert-success',
                //   timeout: 5000});
                _this.router.navigate(['dashboard']);
            }
            else {
                //  this.flashMessage.show(data.msg, {
                //    cssClass: 'alert-danger',
                //    timeout: 5000});
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/digitalerTischplan/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-top {\n  max-width: 100%;\n  background-color: #0d2f2e;\n  border-radius: 0px;\n  max-height: 120px;\n  display: block;\n}\n\n.container {\n  max-height: 120px;\n  display: block;\n  padding: 0;\n  margin: 0\n}\n\nul.navbar-nav {\n  margin-right: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  max-height:  40px;\n}\n\n.navbar-logout {\n  float: right;\n}\n\n.brand {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 30%;\n}\n\n.Tisch {\n  color: #0a7a74;\n  float: right;\n  margin-right: 10px;\n}\n\n.TischDiv{\n  background-color: #0a7a74;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 48px;\n  max-width: 50px;\n}\n\n.TischH3 {\n  color: #eaf3f3;\n  margin: 0;\n  line-height: 29px;\n  font-size: 20px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  align: center;\n}\n\n.dropdown-toggle {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.dropdown-menu {\n  overflow: auto;\n  height: 350px;\n  width: 200px;\n  padding: 20px;\n}\n\n.xls {\n  width: 100%;\n  height: 100px;\n}\n\n.file {\n  float: left;\n  margin-top: 10px;\n  color: #0a7a74;\n}\n\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border: none;\n}\n\n.navbar-form {\n  margin: 11px 0 0 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0;\n}\n\n.btn-send {\n  background-color: #0a7a74;\n  float: right;\n  color: white;\n  margin-right: 10px;\n  display: none;\n}\n\nh6 {\n  color: #0a7a74;\n}\n\n.navbar-right{\n\n}\n\n.btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  float: left;\n  vertical-align: middle;\n  margin: 10px 10px 5px 10px;\n  border: none;\n  display: none;\n}\n\n.btn-default:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n.btn-group {\n  height: 45px;\n  width: auto;\n  margin: 10px 10px 5px 10px;\n  float: left;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.menuitem {\n  padding: 5px;\n}\n\n.navbar-left {\n  max-width: 100%;\n  display: -webkit-inline-box;\n  border: none;\n}\n\n.form-group {\n  max-height: 45px;\n  margin: 0 5px 0 0;\n}\n\n.form-group-search {\n  float: left;\n  width: calc(100% - 52px);\n}\n\n.form-control {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  height: 32px;\n  opacity: 80;\n  margin: 0px 0px 0px 0px;\n}\n\n.search-btn-default {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  border: none;\n  float: right;\n  margin-right: 10px;\n  min-width: 30px;\n  height: 32px;\n}\n\n.Partner {\n  height: 45px;\n  width: auto;\n  margin-top: 4px;\n  margin-bottom: 5px;\n  margin-right: 25px;\n  float: right;\n  text-align: right;\n  display:none;\n  vertical-align:middle;\n}\n\n.xls {\n  margin-bottom: 30px;\n}\n\n@media (max-width: 500px) {\n\n  .navbar-left {\n    display: block;\n  }\n}\n\n@media (min-width: 766px ) and  (max-width: 774px) {\n  .navbar-right {\n    margin-top: -23px;\n  }\n\n  .search-btn-default {\n    margin-top: 0px;\n    margin-left: 40px;\n    min-width: 30px;\n    min-height: 30px;\n  }\n}\n\n@media (min-width: 500px ) and  (max-width: 774px) {\n  .navbar-fixed-top {\n    display: block;\n    max-height: 56px;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: auto;\n    max-height: 55px;\n  }\n  .navbar-nav {\n    margin-top: 0;\n\n    display: -webkit-inline-box;\n\n    display: -ms-inline-flexbox;\n\n    display: inline-flex;\n    max-height: 50px;\n  }\n  .navbar-right{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    max-width: 79%;\n    margin-right: 10px;\n\n  }\n  .navbar-left{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n  .form-control{\n\n  }\n  .search-btn-default {\n    margin-top: 0px;\n  }\n}\n\n@media (min-width: 775px) {\n  .Partner {\n    display: none;\n    max-width: 100%;\n    float: right;\n  }\n\n  .form-group {\n    display: block;\n  }\n\n  .form-group-search {\n    float: none;\n    width: auto;\n  }\n\n  .navbar-left {\n    float: right;\n  }\n\n  .navbar-right {\n    max-width: 100%;\n    margin-right: 10px;\n  }\n\n  .container {\n    display: block;\n    width: auto;\n  }\n\n  .navbar-fixed-top {\n    max-height: 45px;\n    display: block;\n  }\n\n  .btn-group {\n    display:none;\n  }\n\n  .brand {\n    max-width: 100%;\n  }\n\n  .partnerLi {\n    float: right;\n  }\n\n  .navbar-left {\n    display: block;\n    margin-top: 11px;\n  }\n\n  .search-btn-default {\n    float: right;\n    margin-right: 20px;\n    margin-top: 0px;\n  }\n\n  .Tisch {\n    margin-right: 0px;\n  }\n\n  .TischDiv{\n    margin-left: 35px;\n  }\n  .navbar-nav {\n\n  }\n\n}\n\n@media (min-width: 1250px) {\n  .btn-default {\n    display: block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .row4 {\n    margin-top: 60px;\n  }\n\n  .print-col {\n    width: 32%\n  }\n\n  .search-btn-default {\n    display: block;\n  }\n\n  .btn-group {\n    display: block;\n  }\n\n  .navbar-nav {\n    display: block;\n\n  }\n\n  .container {\n    display: block;\n    width: 100%;\n  }\n\n  .navbar-right {\n    max-width: 65%;\n    min-width: 50%;\n  }\n  .form-group {\n    margin: 0;\n    width: 70%;\n    max-height: 100%;\n    margin: 0 2px 20px 10px;\n  }\n\n  .form-control {\n    background-color: #0a7a74;\n    color: #FFFFFF;\n    border: none;\n    opacity: 80;\n    width: 135px;\n    margin: 0px 0px 0px 0px;\n  }\n\n  .TischDiv{\n    margin-left: 0px;\n  }\n}\n\n@media (min-width: 1650px) {\n  .Partner {\n    display: inline-block;\n    max-width: 100%;\n    float: right;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"brand\" ><img alt=\"Brand\" href=\"http://www.servicio.io\" src=\"http://servicio.io/wp-content/uploads/2018/01/servicio-logo-neu-laden-1.png\" (click)=\"brandClick()\" style=\"height: 45px; width: auto; margin-top:0px; margin-right: 10px; text-align: left; display:inline-block; vertical-align:middle;\"></li>\n      <li class=\"Belegte Tisch\" ><div class=\"TischDiv\"><h3 class=\"TischH3\">{{tablesOccupied}}</h3></div></li>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"height: auto; padding: 0\" role=\"menu\">\n          <li class=\"printToCart1\" (click)=\"printToCart1('printSectionId1')\" (mouseenter)=\"mouseEnterprintToCart1Button()\"  (mouseleave)=\"mouseLeaveprintToCart1Button()\" [ngStyle]=\"{'background-color': '#' + printToCart1Button}\"  style=\" display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" >Tisch Übersicht Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart2\" (click)=\"printToCart2('printSectionId2')\" (mouseenter)=\"mouseEnterprintToCart2Button()\"  (mouseleave)=\"mouseLeaveprintToCart2Button()\" [ngStyle]=\"{'background-color': '#' + printToCart2Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart2\">Tisch Plan Drucken</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li class=\"printToCart3\" (click)=\"printToCart3('printSectionId3')\" (mouseenter)=\"mouseEnterprintToCart3Button()\"  (mouseleave)=\"mouseLeaveprintToCart3Button()\" [ngStyle]=\"{'background-color': '#' + printToCart3Button}\"  style=\"text-align: left; display:table-cell; vertical-align:middle; margin-top: 15px; margin-right: 0px; padding: 10px; width:200px;\" class=\"printToCart3\">A-Z Liste Drucken</li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">RTF<i class=\"fa fa-upload\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" style=\"padding: 10px; height: auto\" role=\"menu\">\n          <div class=\"xls\" (click)=\"none($event)\" ><h6 >RTF-Datei hochladen</h6>\n            <form class=\"SendMessage\" (submit)=\"sendMessage($event)\">\n              <input type=\"file\" style=\"max-width: 160px; min-height: 50px\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" />\n              <button type=\"button\" class=\"btn btn-send\" (click)=\"upload()\">RTF hochladen</button>\n            </form>\n          </div>\n        </ul>\n      </div>\n      <li class=\"navbar-logout\" *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"/\">LOGOUT</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle class=\"btn btn-primary dropdown-toggle\" type=\"button\">Abreisen entfernen <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"max-height: 130px; padding: 0\">\n          <li role=\"menuitem\" class=\"menuitem\" (mouseenter)=\"mouseEnterAbreiseAbbrechenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAbbrechenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAbbrechenButton}\" style=\"color: black;\">Abbrechen</li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseHeute()\"><b> Abreisen für Heute entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n          <li role=\"menuitem\" class=\"menuitem\" style=\"background-color: red; color: white;\" (mouseenter)=\"mouseEnterAbreiseMorgenAusfuehrenButton()\"  (mouseleave)=\"mouseLeaveAbreiseMorgenAusfuehrenButton()\" [ngStyle]=\"{'background-color': '#' + abreiseAusfuehrenMorgenButton}\" style=\"color: white;\" (click)=\"dispenseIfAbreiseMorgen()\"><b> Abreisen für Morgen entfernen</b></li>\n          <li class=\"divider dropdown-divider\" style=\"margin: 0\"></li>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Umsetzen <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i><span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"height: auto\">\n          <form class=\"SendInformation\" #myForm=\"ngForm\" (submit)=\"umsetzen($event)\">\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"quellTisch\">Quell-Tisch:</label>\n              <input class=\"form-control\" id=\"quellTisch\" [(ngModel)]=\"quellTisch\" name=\"quellTisch\" placeholder=\"Von Tischnummer:\" >\n            </div>\n            <div class=\"form-group\" (click)=\"none($event)\">\n              <label for=\"zielTisch\">Ziel-Tisch</label>\n              <input class=\"form-control\" id=\"zielTisch\" [(ngModel)]=\"zielTisch\" name=\"zielTisch\" placeholder=\"Zu Tischnummer:\" >\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Umsetzen</button>\n          </form>\n        </ul>\n      </div>\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">Traces <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i> <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" style=\"padding: 0\">\n          <div *ngFor=\"let newInformationElement of newInformationElements; let j = index;\">\n            <button type=\"submit\" style=\"margin: 10px\" class=\"btn btn-send\" (click)=\"delete(newInformationElement, j, $event)\">x</button>\n            <li role=\"menuitem\" style=\"padding: 10px;\" class=\"menuitem\" (click)=\"none($event)\"> <b>Zimmer Nummer: </b> {{newInformationElement.roomNumber}} <br><b>Trace: </b> {{newInformationElement.text}} <br><b>Tisch: </b> {{newInformationElement.tableNumber}}<br><b>Datum: </b> {{newInformationElement.date}}<br><b>Name: </b> {{newInformationElement.name}}<br><b>Mitarbeiter: </b> {{newInformationElement.employee}}</li>\n            <li class=\"divider dropdown-divider\"></li>\n          </div>\n        </ul>\n      </div>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group form-group-search\">\n          <input type=\"text\" class=\"form-control\" (keyup)=\"onKey($event)\">\n        </div>\n        <button type=\"submit\" class=\"btn search-btn-default\" ><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </form>\n      <li class=\"partnerLi\" ><img class=\"Partner\" alt=\"Partner\" href=\"http://www.salzburgerhof.servicio.io/wlanlandingpage\" src=\"http://servicio.io/wp-content/uploads/2018/03/panoramahotel-oberjoch-logo-2.jpg\" ></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationComponent = (function () {
    function NavigationComponent(tischplanService, http, _flashMessagesService, authService, router) {
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.filesToUpload = [];
        this.tablesTempAbreise = [];
        this.newInformationElements = [];
        this.umsetzenExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.abreisenExportExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.termExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.reloadLists = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.transformExport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.printToCart1Button = "ffffff";
        this.printToCart2Button = "ffffff";
        this.printToCart3Button = "ffffff";
        this.abreiseAbbrechenButton = "ffffff";
        this.abreiseAusfuehrenButton = "ff0000";
        this.abreiseAusfuehrenMorgenButton = "ff0000";
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.delete = function (informationElement, j, event) {
        var _this = this;
        console.log(informationElement);
        console.log(j);
        event.stopPropagation();
        this.tischplanService.deleteInformationElement(informationElement)
            .subscribe(function (informationElement) {
            _this.newInformationElements.splice(j, 1);
        });
    };
    NavigationComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    NavigationComponent.prototype.printToCart1 = function (printSectionId1) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId1).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
            '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
            '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart2 = function (printSectionId2) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId2).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style>  .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { position: absolute;  }  .row .t501 { position: absolute;  }  .row .t502 { position: absolute;  }  .row .t503 { position: absolute;  }  .row .t504 { position: absolute;  }  .row .t505 { position: absolute;  }  .row .t506 { position: absolute;  } .row .t507 { position: absolute;  } .row .t508 { position: absolute;  }   .row .t524 { position: absolute;  } .row .t525 { position: absolute;  } .row .t25 { position: absolute; } .row .t26 { position: absolute; } .row .t30 { position: absolute; } .row  [class~="t30.1"] { position: absolute; } [class~="t30.2"] { position: absolute; } .row  [class~="t30.3"]{ position: absolute; } .row  [class~="t30.4"] { position: absolute; }.t31 { position: absolute; } .t32 { position: absolute; } .t33 { position: absolute; } .t34 { position: absolute; } .t35 { position: absolute; } .t36 { position: absolute; } .t37 { position: absolute; } .t38 { position: absolute; }  .t90 { position: absolute; } .t91 { position: absolute; } .t92 { position: absolute; } .t93 { position: absolute; } .t94 { position: absolute; } .t95 { position: absolute; } .t96 { position: absolute; } .t97 { position: absolute; } .t98 { position: absolute; } .t99 { position: absolute; } .t1 { position: absolute; } .t2 { position: absolute; } .t3 { position: absolute; } .t4 { position: absolute; } .t5 { position: absolute; } .t6 { position: absolute; } .t7 { position: absolute; } [class~="t7.1"] { position: absolute; } [class~="t13.1"]  { position: absolute; transform: rotate(40deg);} .t701 { position: absolute; } .t702 { position: absolute; } .t703 { position: absolute; } .t704 { position: absolute; } .t705 { position: absolute; } .t706 { position: absolute; } .t707 { position: absolute; } .t708 { position: absolute; } .t709 { position: absolute; } .t710 { position: absolute; } .t711 { position: absolute; } .t712 { position: absolute; } .t713 { position: absolute; } .t714 { position: absolute; } .t201 { position: absolute;  transform: rotate(-10deg);} .t202 { position: absolute;  transform: rotate(-10deg);} .t203 { position: absolute;  transform: rotate(-10deg);} .t204 { position: absolute; } .t205 { position: absolute; } .t206 { position: absolute; } .t207 { position: absolute; } .t208 { position: absolute; } .t209 { position: absolute; } .t210 { position: absolute;  transform: rotate(-10deg);} .t211 { position: absolute; transform: rotate(-10deg); } .t212 { position: absolute;  transform: rotate(-10deg);} .t300 { position: absolute;  transform: rotate(-10deg);} .t301 { position: absolute; } .t302 { position: absolute; } .t303 { position: absolute; } .t304 { position: absolute; } .t305 { position: absolute; } .t306 { position: absolute; } .t307 { position: absolute; } .t308 { position: absolute; } .t309 { position: absolute; } .t310 { position: absolute; } .t311 { position: absolute; } .t312 { position: absolute; } .t313 { position: absolute; } .t314 { position: absolute; } .t315 { position: absolute; } .t316 { position: absolute; } .t317 { position: absolute; } .t318 { position: absolute; } .t319 { position: absolute; } .t101 { position: absolute; } .t102 { position: absolute; } [class~="t102.1"]  { position: absolute; } .t103 { position: absolute; } .t410 { position: absolute; }  .t104 { position: absolute; } .t401 { position: absolute; } .t402 { position: absolute; } .t403 { position: absolute; } .t404 { position: absolute; } .t405 { position: absolute; } .t406 { position: absolute; } .t407 { position: absolute; } .t408 { position: absolute; } .t409 { position: absolute; } .t715 { position: absolute; } [class~="t410.1"]  { position: absolute; } [class~="t403.1"]  { position: absolute; }  [class~="t406.1"]  { position: absolute; } [class~="t506.1"]  { position: absolute; } [class~="t503.1"]  { position: absolute; } </style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.printToCart3 = function (printSectionId3) {
        var popupWinindow;
        var innerContents = document.getElementById(printSectionId3).innerHTML;
        popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    NavigationComponent.prototype.neuLaden = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.umsetzen = function () {
        var _this = this;
        event.preventDefault();
        console.log("UMSETZTEN CALLED");
        var quellTisch = this.quellTisch.charAt(0).toUpperCase() + this.quellTisch.slice(1);
        var zielTisch = this.zielTisch.charAt(0).toUpperCase() + this.zielTisch.slice(1);
        this.tableInformation = [];
        //this.umsetzenExport.emit({quellTisch, zielTisch});
        // let targetTable = this.quellTisch.zielTisch;
        // let quellTischNumber = this.quellTisch.quellTisch;
        // let targetTableNumber = Number(this.quellTisch.zielTisch);
        // let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
        console.log('targetTable' + zielTisch);
        console.log('quellTischNumber' + quellTisch);
        var tableToMove = { department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty" };
        var indexZiel = 0;
        var indexQuell = 0;
        if (Number(quellTisch) >= 213 && Number(quellTisch) <= 319) {
            tableToMove.department = "panoramaRestaurant2";
            indexQuell = 1;
        }
        else if (Number(quellTisch) >= 1 && Number(quellTisch) <= 21) {
            tableToMove.department = "feuerstein";
            indexQuell = 2;
        }
        else if ((Number(quellTisch) >= 401 && Number(quellTisch) <= 508)) {
            tableToMove.department = "panoramaRestaurant1";
            indexQuell = 3;
        }
        else if ((Number(quellTisch) >= 101 && Number(quellTisch) <= 104) || (Number(quellTisch) >= 200 && Number(quellTisch) <= 212)) {
            tableToMove.department = "panoramaRestaurant3";
            indexQuell = 4;
        }
        else if (Number(quellTisch) >= 701 && Number(quellTisch) <= 715) {
            tableToMove.department = "iselerRestaurant";
            indexQuell = 5;
        }
        if (Number(zielTisch) >= 213 && Number(zielTisch) <= 319) {
            tableToMove.targetDepartment = "panoramaRestaurant2";
            indexZiel = 1;
        }
        else if (Number(zielTisch) >= 1 && Number(zielTisch) <= 21) {
            tableToMove.targetDepartment = "feuerstein";
            indexZiel = 2;
        }
        else if ((Number(zielTisch) >= 401 && Number(zielTisch) <= 508)) {
            tableToMove.targetDepartment = "panoramaRestaurant1";
            indexZiel = 3;
        }
        else if ((Number(zielTisch) >= 101 && Number(zielTisch) <= 104) || (Number(zielTisch) >= 200 && Number(zielTisch) <= 212)) {
            tableToMove.targetDepartment = "panoramaRestaurant3";
            indexZiel = 4;
        }
        else if (Number(zielTisch) >= 701 && Number(zielTisch) <= 715) {
            tableToMove.targetDepartment = "iselerRestaurant";
            indexZiel = 5;
        }
        tableToMove.number = quellTisch;
        tableToMove.targetTable = zielTisch;
        console.log(tableToMove);
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            for (var a = 0; a < tables.length; a++) {
                for (var b = 0; b < tables[a].tables.length; b++) {
                    if (tables[a].department === tableToMove.department) {
                        console.log("YEEEES BEFORE");
                        if (tables[a].tables[b].number === tableToMove.number) {
                            console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                            console.log(tables[a].tables[b]);
                            _this.tableInformation.push(tables[a].tables[b]);
                            console.log(_this.tableInformation);
                            _this.tableInformation.push(tableToMove);
                            console.log(_this.tableInformation);
                        }
                    }
                }
            }
            console.log("this.tableInformation IIIIIIIII");
            var tableInformationExport = _this.tableInformation;
            _this.umsetzenExport.emit({ tableToMove: tableToMove, indexZiel: indexZiel, indexQuell: indexQuell, tableInformationExport: tableInformationExport });
        });
    };
    ;
    NavigationComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            //alert('you just clicked enter');
            this.termExport.emit(this.term);
        }
    };
    NavigationComponent.prototype.brandClick = function () {
        window.location.reload();
    };
    NavigationComponent.prototype.onKey = function (event) {
        this.term = event.target.value;
        console.log(this.term);
        this.termExport.emit(this.term);
        this.transformExport.emit(this.term);
    };
    NavigationComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    NavigationComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        this.http.post('/upload', formData)
            .map(function (files) { return files.json(); }).map(function (res) {
            // 1st parameter is a flash message text
            // 2nd parameter is optional. You can pass object with options.
            if (res[0].originalname) {
                _this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
                    cssClass: 'alert-success',
                    timeout: 10000
                });
            }
            else {
                _this._flashMessagesService.show(JSON.stringify(res), {
                    cssClass: 'alert-danger',
                    timeout: 10000
                });
            }
        })
            .subscribe(function (files) { return console.log("files", files); });
        setTimeout(function () {
            _this.reloadLists.emit();
        }, 5000);
    };
    NavigationComponent.prototype.dispenseIfAbreiseHeute = function () {
        this.dateTodayGenerated = new Date(); //Today
        this.dispenseIfAbreise();
    };
    NavigationComponent.prototype.dispenseIfAbreiseMorgen = function () {
        console.log("dispenseIfAbreiseMorgen");
        this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
        this.dispenseIfAbreise();
        console.log(this.dateTodayGenerated);
    };
    NavigationComponent.prototype.dispenseIfAbreise = function () {
        var _this = this;
        var tables = this.tablesTempAbreise;
        var abreisenExport = [];
        var a = 0;
        console.log('=================================================dispenseIfAbreise');
        for (var a_1 = 0; a_1 < tables.length; a_1++) {
            for (var b = 0; b < tables[a_1].tables.length; b++) {
                if (tables[a_1].tables[b].groups) {
                    var abreisenExportObject = {
                        table: tables[a_1].tables[b],
                        group: [],
                        date: String(this.dateTodayGenerated).substring(0, 15)
                    };
                    for (var c = 0; c < tables[a_1].tables[b].groups.length; c++) {
                        if (tables[a_1].tables[b].groups[c].abreiseValue) {
                            this.parts[0] = tables[a_1].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
                        }
                        else {
                            this.parts[0] = "undefined";
                        }
                        if (this.parts[0]) {
                            this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                            this.parsedDate[0] = String(this.date[0]).substring(0, 15);
                        }
                        var dateToday = String(this.dateTodayGenerated).substring(0, 15);
                        if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a_1].tables[b].groups[c].newTraceText) {
                            abreisenExportObject.group.push(c);
                        }
                        if (c === (tables[a_1].tables[b].groups.length - 1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
                            console.log("abreisenExport.push(abreisenExportObject)");
                            abreisenExport.push(abreisenExportObject);
                        }
                    }
                }
            }
        }
        console.log(abreisenExport);
        setTimeout(function () {
            _this.abreisenExportExport.emit({ abreisenExport: abreisenExport, a: a });
        }, 100);
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this._flashMessagesService.show('You are logged out', {
        //  cssClass: 'alert-success',
        //  timeout: 3000
        //});
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent.prototype.mouseEnterprintToCart1Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart1Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart1Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart1Button = function () {
        if (this.printToCart1Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart1Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart2Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart2Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart2Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart2Button = function () {
        if (this.printToCart2Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart2Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterprintToCart3Button = function () {
        //console.log("mouse enter : ");
        if (this.printToCart3Button === "ffffff") {
            //console.log('mouse enter1 :');
            this.printToCart3Button = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveprintToCart3Button = function () {
        if (this.printToCart3Button === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.printToCart3Button = "ffffff";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseMorgenAusfuehrenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
            //console.log('mouse enter1 :');
            this.abreiseAusfuehrenMorgenButton = "a00000";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseMorgenAusfuehrenButton = function () {
        if (this.abreiseAusfuehrenMorgenButton === "a00000") {
            //console.log('mouse leave1 :');
            this.abreiseAusfuehrenMorgenButton = "ff0000";
        }
    };
    NavigationComponent.prototype.mouseEnterAbreiseAbbrechenButton = function () {
        //console.log("mouse enter : ");
        if (this.abreiseAbbrechenButton === "ffffff") {
            //console.log('mouse enter1 :');
            this.abreiseAbbrechenButton = "cfcfcf";
        }
    };
    NavigationComponent.prototype.mouseLeaveAbreiseAbbrechenButton = function () {
        if (this.abreiseAbbrechenButton === "cfcfcf") {
            //console.log('mouse leave1 :');
            this.abreiseAbbrechenButton = "ffffff";
        }
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesTempAbreise'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "tablesTempAbreise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('newInformationElements'),
    __metadata("design:type", Array)
], NavigationComponent.prototype, "newInformationElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesOccupied'),
    __metadata("design:type", Number)
], NavigationComponent.prototype, "tablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NavigationComponent.prototype, "umsetzenExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NavigationComponent.prototype, "abreisenExportExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], NavigationComponent.prototype, "termExport", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], NavigationComponent.prototype, "reloadLists", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], NavigationComponent.prototype, "transformExport", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("./src/app/components/digitalerTischplan/navigation/navigation.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _k || Object])
], NavigationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/print/print.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"printSectionId3\" class=\"section3\">\n  <table style=\"border: solid 1px black; border-collapse: collapse;\">\n    <tr>\n      {{dateGeneratedListe}}\n    </tr>\n    <tr style=\"border: solid 1px black;\">\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n      <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n    </tr>\n    <div *ngFor=\"let table of tables\">\n      <tr style=\"border: solid 1px black;\">\n        <div *ngIf=\"table.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.anredeValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.kategorieValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.preisTypValue}}</td>\n          </div>\n      </tr>\n    </div>\n  </table>\n</div>\n<div id=\"printSectionId1\" class=\"section3\">\n  <div *ngIf=\"showTablesFeuerstein\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Feuerstein\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      </tr>\n      <div *ngFor=\"let table of tablesFeuerstein\">\n        <div *ngFor=\"let group of table.groups\">\n        <tr style=\"border: solid 1px black;\">\n          <div *ngIf=\"group.nameValue\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anredeValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.kategorieValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.preisTypValue}}</td>\n          </div>\n          <div *ngIf=\"group.newTraceText\">\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n            <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n          </div>\n        </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTablesPanoramaRestaurant2\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Panorama Restaurant 2\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanoramaRestaurant2\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anredeValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.kategorieValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.preisTypValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTablesPanoramaRestaurant1\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Panorama Restaurant 1\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanoramaRestaurant1\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anredeValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.kategorieValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.preisTypValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTablesIselerRestaurant\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Iseler Restaurant\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      </tr>\n      <div *ngFor=\"let table of tablesIselerRestaurant\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anredeValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.kategorieValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.preisTypValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n  <div *ngIf=\"showTablesPanoramaRestaurant3\">\n    <table style=\"border: solid 1px black; border-collapse: collapse;\">\n      <tr>\n        {{dateGeneratedListe}}\n      </tr>\n      <tr>\n        Iseler Restaurant\n      </tr>\n      <tr style=\"border: solid 1px black;\">\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Tisch</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">#</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Gast</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anrede</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">PAX</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Anreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Abreise</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">KAT</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">Bemerkung</th>\n        <th style=\"border: solid 1px black; border-collapse: collapse;\">HP/F</th>\n      </tr>\n      <div *ngFor=\"let table of tablesPanoramaRestaurant3\">\n        <div *ngFor=\"let group of table.groups\">\n          <tr style=\"border: solid 1px black;\">\n            <div *ngIf=\"group.nameValue\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{table.number}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.zimmernummerValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.nameValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anredeValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.personenAnzahlValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.anreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.abreiseValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.kategorieValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.bemerkungValue}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.preisTypValue}}</td>\n            </div>\n            <div *ngIf=\"group.newTraceText\">\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceTableNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceRoomNumber}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceName}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\">{{group.newTraceText}} {{group.newTraceDate}} {{table.newTraceEmployee}}</td>\n              <td style=\"border: solid 1px black; border-collapse: collapse;\"></td>\n            </div>\n          </tr>\n        </div>\n      </div>\n    </table>\n  </div>\n</div>\n<div id=\"printSectionId2\" class=\"section2\">\n  <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n    <div *ngIf=\"showTablesPanoramaRestaurant1\">\n      <div *ngFor=\"let tablePanoramaRestaurant1 of tablesPanoramaRestaurant1; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant1.number}} table-item\"\n             [ngStyle]=\"{'top': tablePanoramaRestaurant1.topValue + 'px', 'left': tablePanoramaRestaurant1.leftValue + 'px', 'background-color': + tablePanoramaRestaurant1.bgColor, 'height': + tablePanoramaRestaurant1.height + 'px', 'width': + tablePanoramaRestaurant1.width + 'px', 'border': + tablePanoramaRestaurant1.border}\"\n             [style.border]=\"getStyle(tablesPanoramaRestaurant1[j].groups)\" dropdown>\n          <div *ngIf=\"tablesPanoramaRestaurant1[j] !== tablesPanoramaRestaurant1[j+1]\">\n            <p><b>{{tablePanoramaRestaurant1.number}} <br>{{erwPanoramaRestaurant1[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTablesFeuerstein\">\n      <div *ngFor=\"let tableFeuerstein of tablesFeuerstein; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableFeuerstein.number}} table-item\" [ngStyle]=\"{'top': tableFeuerstein.topValue + 'px', 'left': tableFeuerstein.leftValue + 'px', 'background-color': + tableFeuerstein.bgColor, 'height': + tableFeuerstein.height + 'px', 'width': + tableFeuerstein.width + 'px', 'border': + tableFeuerstein.border}\" [style.border]=\"getStyle(tablesFeuerstein[j].groups)\" dropdown>\n          <div *ngIf=\"tablesFeuerstein[j] !== tablesFeuerstein[j+1]\">\n            <p><b>{{tableFeuerstein.number}} <br>{{erwFeuerstein[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTablesPanoramaRestaurant2\">\n      <div *ngFor=\"let tablePanoramaRestaurant2 of tablesPanoramaRestaurant2; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant2.number}} table-item\" [ngStyle]=\"{'top': tablePanoramaRestaurant2.topValue + 'px', 'left': tablePanoramaRestaurant2.leftValue + 'px', 'background-color': + tablePanoramaRestaurant2.bgColor, 'height': + tablePanoramaRestaurant2.height + 'px', 'width': + tablePanoramaRestaurant2.width + 'px', 'border': + tablePanoramaRestaurant2.border}\" [style.border]=\"getStyle(tablesPanoramaRestaurant2[j].groups)\" dropdown>\n          <div *ngIf=\"tablesPanoramaRestaurant2[j] !== tablesPanoramaRestaurant2[j+1]\">\n            <p><b>{{tablePanoramaRestaurant2.number}} <br>{{erwPanoramaRestaurant2[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTablesPanoramaRestaurant3\">\n      <div *ngFor=\"let tablePanoramaRestaurant3 of tablesPanoramaRestaurant3; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant3.number}} table-item\" [ngStyle]=\"{'top': tablePanoramaRestaurant3.topValue + 'px', 'left': tablePanoramaRestaurant3.leftValue + 'px', 'background-color': + tablePanoramaRestaurant3.bgColor, 'height': + tablePanoramaRestaurant3.height + 'px', 'width': + tablePanoramaRestaurant3.width + 'px', 'border': + tablePanoramaRestaurant3.border}\" [style.border]=\"getStyle(tablesPanoramaRestaurant3[j].groups)\" dropdown>\n          <div *ngIf=\"tablesPanoramaRestaurant3[j] !== tablesPanoramaRestaurant3[j+1]\">\n            <p><b>{{tablePanoramaRestaurant3.number}} <br>{{erwPanoramaRestaurant3[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"showTablesIselerRestaurant\">\n      <div *ngFor=\"let tableIselerRestaurant of tablesIselerRestaurant; let j = index;\">\n        <div dropdownToggle type=\"button\" class=\"t{{tableIselerRestaurant.number}} table-item\" [ngStyle]=\"{'top': tableIselerRestaurant.topValue + 'px', 'left': tableIselerRestaurant.leftValue + 'px', 'background-color': + tableIselerRestaurant.bgColor, 'height': + tableIselerRestaurant.height + 'px', 'width': + tableIselerRestaurant.width + 'px', 'border': + tableIselerRestaurant.border}\" [style.border]=\"getStyle(tablesIselerRestaurant[j].groups)\" dropdown>\n          <div *ngIf=\"tablesIselerRestaurant[j] !== tablesIselerRestaurant[j+1]\">\n            <p><b>{{tableIselerRestaurant.number}} <br>{{erwIselerRestaurant[j]}}</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/print/print.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintComponent = (function () {
    function PrintComponent() {
        this.getTablesOccupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTablesforAzListe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tableTemp = [];
        this.trace = false;
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent.prototype.formatAzListe = function (tables) {
        this.tables = tables;
        this.tableNumbers = [];
        this.uniqueTables = [];
        this.tableTemp = [];
        //(<any>Object).assign( this.photos, photos )
        for (var i = 0; i < this.tables.length; i++) {
            if (this.tables[i].groups) {
                for (var j = 0; j < this.tables[i].groups.length; j++) {
                    var tempObject = {
                        number: this.tables[i].number,
                        department: this.tables[i].department,
                        bgColor: this.tables[i].bgColor,
                        isBesetzt: this.tables[i].isBesetzt,
                        placeholder: this.tables[i].placeholder,
                        border: this.tables[i].border,
                    };
                    //console.log(this.tables[i].number);
                    if (this.tables[i].groups[j]) {
                        //console.log(this.tables[i].groups[j]);
                        this.object = Object.assign(this.tables[i].groups[j], tempObject);
                        //console.log("this.object");
                        //console.log(this.object);
                        this.tableTemp.push(this.object);
                    }
                }
            }
        }
        //console.log("this.tableTemp");
        //console.log(this.tableTemp);
        this.tables = this.tableTemp.sort(function (a, b) {
            var nameA = "";
            var nameB = "";
            if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
                nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
                nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
            }
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            //}
        });
        for (var i = 0; i < this.tables.length; i++) {
            //console.log(i);
            if ("nameValue" in this.tables[i]) {
                //console.log("--->" + i);
                this.tableNumbers.push(this.tables[i].number);
            }
        }
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.uniqueTables = this.tableNumbers.filter(onlyUnique);
        this.tablesOccupied = this.uniqueTables.length;
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
        //console.log(this.tableTemp);
        //console.log(this.tables);
        //console.log("this.tablesOccupied" + this.tablesOccupied);
        //console.log(tables);
        /*
        function filterByID(obj) {
          if (obj.groups) {
            if (obj.groups in obj || obj.groups in obj) {
              return true;
            } else {
              return false;
            }
          }
        }
    
        this.tempTablesArray = this.tables.filter(filterByID);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (typeof this.tables[i].groups !== "undefined") {
            if (this.tables[i].groups[1]) {
              if (this.tables[i].groups[1].nameValue) {
                this.tables.splice(i, 1);
              }
            }
            else if (this.tables[i].groups) {
              if (this.tables[i].groups[2].nameValue) {
                this.tables.splice(i, 1);
              }
            }
          }
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray2[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray3[i] = new Table();
        }
    
        for (let i: number = 0; i < this.tempTablesArray.length; i++) {
          this.tempTablesArray1[i] = new Table();
        }
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
          if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
            this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
            this.tempTablesArray2[a].notiz1Value = this.tempTablesArray[a].notiz1Value;
            this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
            this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
            this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
            this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
            this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
            this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
            this.tempTablesArray2[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue;
            this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
            this.tables = this.tables.concat(this.tempTablesArray2[a]);
          }
        }
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
          if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
            this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
            this.tempTablesArray1[a].notiz1Value = this.tempTablesArray[a].notiz3Value;
            this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz4Value;
            this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
            this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
            this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
            this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
            this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
            this.tempTablesArray1[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue3;
            this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
            this.tables = this.tables.concat(this.tempTablesArray1[a]);
          }
        }
    
    
        for (let a: number = 0; a < this.tempTablesArray.length; a++) {
          if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
            this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
            this.tempTablesArray3[a].notiz1Value = this.tempTablesArray[a].notiz5Value;
            this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz6Value;
            this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
            this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
            this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
            this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
            this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
            this.tempTablesArray3[a].bemerkungValue = this.tempTablesArray[a].bemerkungValue6;
            this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
    
            this.tables = this.tables.concat(this.tempTablesArray3[a]);
          }
        }
        console.log(this.tempTablesArray1);
        console.log(this.tempTablesArray);
        console.log(this.tempTablesArray2);
        console.log(this.tempTablesArray3);
        console.log('this.tables before sort ');
        console.log(this.tables);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          if (!("nameValue" in this.tables[i])) {
            this.tables.splice(i,1);
          }
        }
    
        this.tables = this.tables.sort(function(a, b) {
          let nameA = "";
          let nameB = "";
          if (a.groups) {
            if (typeof a.groups.nameValue !== "undefined" && a.groups.nameValue !== null) {
              nameA = a.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
          }
          if (b.groups) {
            if (typeof b.groups.nameValue !== "undefined" && b.groups.nameValue !== null) {
              nameB = b.groups.nameValue.toUpperCase(); // ignore upper and lowercase
            }
          }
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
          //}
        });
    
        console.log('this.tables after sort: ');
    
        console.log("this.uniqueTables: ");
        console.log(this.uniqueTables);
    
        for (let i: number = 0; i < this.tables.length; i++) {
          console.log(i);
          if ("nameValue" in this.tables[i]) {
            console.log("--->" + i);
            this.tableNumbers.push(this.tables[i].number);
          }
        }
    
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
    
        this.uniqueTables = this.tableNumbers.filter( onlyUnique );
        this.tablesOccupied = this.uniqueTables.length;
    
        this.getTablesOccupied.emit(this.tablesOccupied);
        this.getTablesforAzListe.emit(this.tables);
    
        console.log(this.tables);
        console.log("this.tablesOccupied" + this.tablesOccupied);
    
        console.log(tables);
        */
    };
    PrintComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (a[b].bemerkungValue != "-" || a[b].newTraceText) {
                    this.trace = true;
                }
            }
            if (this.trace) {
                this.trace = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    return PrintComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGeneratedListe'),
    __metadata("design:type", String)
], PrintComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], PrintComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], PrintComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('erwPanoramaRestaurant2'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('kiPanoramaRestaurant2'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('erwPanoramaRestaurant3'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('kiPanoramaRestaurant3'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('erwFeuerstein'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('kiFeuerstein'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('erwPanoramaRestaurant1'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('kiPanoramaRestaurant1'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('erwIselerRestaurant'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "erwIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('kiIselerRestaurant'),
    __metadata("design:type", Object)
], PrintComponent.prototype, "kiIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PrintComponent.prototype, "getTablesOccupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PrintComponent.prototype, "getTablesforAzListe", void 0);
PrintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-print',
        template: __webpack_require__("./src/app/components/digitalerTischplan/print/print.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrintComponent);

var _a, _b;
//# sourceMappingURL=print.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/digitalerTischplan/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/digitalerTischplan/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/tableplan/tableplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showTablePlanBool\">\n  <div class=\"col-xs-12 printTwo\">\n    <div class=\"row\" style=\" border-left: 5px solid #0a7a74; border-right: 5px solid #0a7a74;\">\n      <div *ngIf=\"showTablesPanoramaRestaurant1\">\n        <div *ngFor=\"let tablePanoramaRestaurant1 of tablesPanoramaRestaurant1; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant1.number}} table-item\" [ngStyle]=\"{'top': tablePanoramaRestaurant1.topValue + 'px', 'left': tablePanoramaRestaurant1.leftValue + 'px', 'background-color': + tablePanoramaRestaurant1.bgColor, 'height': + tablePanoramaRestaurant1.height + 'px', 'width': + tablePanoramaRestaurant1.width + 'px', 'border': + tablePanoramaRestaurant1.border, 'transform':  + tablePanoramaRestaurant1.transformValue}\" [style.border]=\"getStyle(tablesPanoramaRestaurant1[j].groups)\" dropdown>\n            <div *ngIf=\"tablesPanoramaRestaurant1[j] !== tablesPanoramaRestaurant1[j+1]\">\n              <p><b>{{tablePanoramaRestaurant1.number}} <br>{{erwPanoramaRestaurant1[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tablePanoramaRestaurant1, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tablePanoramaRestaurant1, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tablePanoramaRestaurant1.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.bemerkungValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Anrede:</b> {{group.anredeValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br></div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesFeuerstein\">\n        <div *ngFor=\"let tableFeuerstein of tablesFeuerstein; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableFeuerstein.number}} table-item\" [ngStyle]=\"{'top': tableFeuerstein.topValue + 'px', 'left': tableFeuerstein.leftValue + 'px', 'background-color': + tableFeuerstein.bgColor, 'height': + tableFeuerstein.height + 'px', 'width': + tableFeuerstein.width + 'px', 'border': + tableFeuerstein.border, 'transform':  + tableFeuerstein.transformValue}\" [style.border]=\"getStyle(tablesFeuerstein[j].groups)\" dropdown>\n            <div *ngIf=\"tablesFeuerstein[j] !== tablesFeuerstein[j+1]\">\n              <p><b>{{tableFeuerstein.number}} <br>{{erwFeuerstein[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableFeuerstein, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableFeuerstein, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableFeuerstein.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.bemerkungValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Anrede:</b> {{group.anredeValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br></div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesPanoramaRestaurant3\">\n        <div *ngFor=\"let tablePanoramaRestaurant3 of tablesPanoramaRestaurant3; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant3.number}} table-item\" [ngStyle]=\"{'top': tablePanoramaRestaurant3.topValue + 'px', 'left': tablePanoramaRestaurant3.leftValue + 'px', 'background-color': + tablePanoramaRestaurant3.bgColor, 'height': + tablePanoramaRestaurant3.height + 'px', 'width': + tablePanoramaRestaurant3.width + 'px', 'border': + tablePanoramaRestaurant3.border, 'transform':  + tablePanoramaRestaurant3.transformValue}\" [style.border]=\"getStyle(tablesPanoramaRestaurant3[j].groups)\" dropdown>\n            <div *ngIf=\"tablesPanoramaRestaurant3[j] !== tablesPanoramaRestaurant3[j+1]\">\n              <p><b>{{tablePanoramaRestaurant3.number}} <br>{{erwPanoramaRestaurant3[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tablePanoramaRestaurant3, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tablePanoramaRestaurant3, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tablePanoramaRestaurant3.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.bemerkungValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Anrede:</b> {{group.anredeValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br></div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesPanoramaRestaurant2\">\n        <div *ngFor=\"let tablePanoramaRestaurant2 of tablesPanoramaRestaurant2; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tablePanoramaRestaurant2.number}} table-item\" [ngStyle]=\"{'top': tablePanoramaRestaurant2.topValue + 'px', 'left': tablePanoramaRestaurant2.leftValue + 'px', 'background-color': + tablePanoramaRestaurant2.bgColor, 'height': + tablePanoramaRestaurant2.height + 'px', 'width': + tablePanoramaRestaurant2.width + 'px', 'border': + tablePanoramaRestaurant2.border, 'transform':  + tablePanoramaRestaurant2.transformValue}\" [style.border]=\"getStyle(tablesPanoramaRestaurant2[j].groups)\" dropdown>\n            <div *ngIf=\"tablesPanoramaRestaurant2[j] !== tablesPanoramaRestaurant2[j+1]\">\n              <p><b>{{tablePanoramaRestaurant2.number}} <br>{{erwPanoramaRestaurant2[j]}}\n              </b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tablePanoramaRestaurant2, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tablePanoramaRestaurant2, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tablePanoramaRestaurant2.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.bemerkungValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Anrede:</b> {{group.anredeValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br></div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesIselerRestaurant\">\n        <div *ngFor=\"let tableIselerRestaurant of tablesIselerRestaurant; let j = index;\">\n          <div dropdownToggle type=\"button\" class=\"t{{tableIselerRestaurant.number}} table-item\" [ngStyle]=\"{'top': tableIselerRestaurant.topValue + 'px', 'left': tableIselerRestaurant.leftValue + 'px', 'background-color': + tableIselerRestaurant.bgColor, 'height': + tableIselerRestaurant.height + 'px', 'width': + tableIselerRestaurant.width + 'px', 'border': + tableIselerRestaurant.border, 'transform':  + tableIselerRestaurant.transformValue}\" [style.border]=\"getStyle(tablesIselerRestaurant[j].groups)\" dropdown>\n            <div *ngIf=\"tablesIselerRestaurant[j] !== tablesIselerRestaurant[j+1]\">\n              <p><b>{{tableIselerRestaurant.number}} <br>{{erwIselerRestaurant[j]}}</b></p>\n            </div>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div dropdownToggle type=\"button\" style=\"color: white; padding: 10px;\" (mouseenter)=\"mouseEnterMoveTableButton()\"  (mouseleave)=\"mouseLeaveMoveTableButton()\" [ngStyle]=\"{'background-color': '#' + buttonMoveTable}\" (click)=\"none($event)\" class=\"dropdownMoveTable\" dropdown><b>Tisch verschieben</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; margin: 0px;  padding: 0px; overflow: auto\">\n                  <li class=\"dropdown-item\" (click)=\"addTable(tableIselerRestaurant, j)\" style=\"color: black; padding: 10px;\" (mouseenter)=\"mouseEnterHinzufuegenButton()\"  (mouseleave)=\"mouseLeaveHinzufuegenButton()\" [ngStyle]=\"{'background-color': '#' + buttonHinzufuegen}\" ><b>Tisch hinzufügen</b></li>\n                  <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0; \"></li>\n                  <li class=\"dropdown-item\" (click)=\"removeTable(tableIselerRestaurant, j)\" (mouseenter)=\"mouseEnterEntfernenButton()\"  (mouseleave)=\"mouseLeaveEntfernenButton()\" [ngStyle]=\"{'background-color': '#' + buttonEntfernen}\" style=\"color: black; padding: 10px\"><b>Tisch entfernen</b></li>\n                </div>\n              </div>\n              <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0; margin: 0;\"></li>\n              <div dropdownToggle type=\"button\" (click)=\"none($event)\" style=\"padding: 10px; \" (mouseenter)=\"mouseEnterInfoButton()\"  (mouseleave)=\"mouseLeaveInfoButton()\" [ngStyle]=\"{'background-color': '#' + buttonInfo}\" class=\"dropdownShowinfo\"  class=\"dropdownShowinfo\" dropdown><b>Infos anzeigen</b>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"max-height: 240px; padding: 10px; overflow: auto\">\n                  <div *ngFor=\"let group of tableIselerRestaurant.groups\">\n                    <div *ngIf=\"group\">\n                      <div *ngIf=\"group.nameValue\">\n                        <div class=\"dropdown-item\" [style.border]=\"getStyleTrace(group.bemerkungValue)\"><b>Name:</b> {{group.nameValue}}<br><b>Anrede:</b> {{group.anredeValue}}<br><b>Zimmer Nummer: </b>{{group.zimmernummerValue}}<br><b>Anreise: </b>{{group.anreiseValue}}<br><b>Abreise:</b> {{group.abreiseValue}}<br><b>Personen Anzahl:</b>{{group.personenAnzahlValue}}<br><b>Kategorie: </b>{{group.kategorieValue}}<br><b>Bemerkung:</b> {{group.bemerkungValue}}<br></div>\n                        <li class=\"divider dropdown-divider\" style=\"padding: 0 0 0 0\"></li>\n                      </div>\n                      <div *ngIf=\"group.newTraceText\">\n                        <div class=\"dropdown-item\"  style=\"background-color: #FFFFFF; border: solid 3px red\">\n                          <b> Zimmernummer: </b>{{group.newTraceRoomNumber}}<br> <b> Neuer Trace: </b>{{group.newTraceText}} <br> <b> Tischnummer: </b>{{group.newTraceTableNumber}} <br> <b> Mitarbeiter: </b>{{group.newTraceEmployee}} <br> <b> Name: </b>{{group.newTraceName}} <br> <b> Datum: </b>{{group.newTraceDate}}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"showTablesAlle\">\n        <br>\n        <br>\n        <br>\n        <h1 style=\"color: white; margin-top: 200px\">Perfekt um eine Suche zu starten ;-)</h1>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/tableplan/tableplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableplanComponent = (function () {
    function TableplanComponent(tischplanService) {
        this.tischplanService = tischplanService;
        this.movedPanoramaRestaurant2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedPanoramaRestaurant3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedFeuerstein = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedIselerRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.movedPanoramaRestaurant1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeBgColorIfAnreise = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportKiIselerRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportErwIselerRestaurant = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportKiPanoramaRestaurant2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportErwPanoramaRestaurant2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportKiPanoramaRestaurant3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportErwPanoramaRestaurant3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportKiPanoramaRestaurant1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportErwPanoramaRestaurant1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportKiFeuerstein = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.exportErwFeuerstein = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.erwFeuerstein = [];
        this.kiFeuerstein = [];
        this.erwPanoramaRestaurant1 = [];
        this.kiPanoramaRestaurant1 = [];
        this.erwIselerRestaurant = [];
        this.kiIselerRestaurant = [];
        this.erwPanoramaRestaurant2 = [];
        this.kiPanoramaRestaurant2 = [];
        this.erwPanoramaRestaurant3 = [];
        this.kiPanoramaRestaurant3 = [];
        this.buttonMoveTable = "ff0000";
        this.buttonInfo = "ffffff";
        this.buttonHinzufuegen = "ffffff";
        this.buttonEntfernen = "ffffff";
        this.bemerkung = false;
    }
    TableplanComponent.prototype.ngAfterViewChecked = function () {
    };
    TableplanComponent.prototype.addTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table : ' + table.number + ' j ' + j);
        this.tischplanService.addTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].department === "panoramaRestaurant2") {
                _this.movedPanoramaRestaurant2.emit(response[0].tables);
            }
            else if (response[0].department === "feuerstein") {
                _this.movedFeuerstein.emit(response[0].tables);
            }
            else if (response[0].department === "iselerRestaurant") {
                _this.movedIselerRestaurant.emit(response[0].tables);
            }
            else if (response[0].department === "panoramaRestaurant1") {
                _this.movedPanoramaRestaurant1.emit(response[0].tables);
            }
            else if (response[0].department === "panoramaRestaurant3") {
                _this.movedPanoramaRestaurant3.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.removeTable = function (table, j) {
        var _this = this;
        console.log("moveTable clicked");
        console.log('table :' + table.number + 'j' + j);
        this.tischplanService.removeTable(table).subscribe(function (response) {
            console.log('Response:' + JSON.stringify(response));
            //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
            console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
            console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
            if (response[0].department === "panoramaRestaurant2") {
                _this.movedPanoramaRestaurant2.emit(response[0].tables);
            }
            else if (response[0].department === "feuerstein") {
                _this.movedFeuerstein.emit(response[0].tables);
            }
            else if (response[0].department === "iselerRestaurant") {
                _this.movedIselerRestaurant.emit(response[0].tables);
            }
            else if (response[0].department === "panoramaRestaurant1") {
                _this.movedPanoramaRestaurant1.emit(response[0].tables);
            }
            else if (response[0].department === "panoramaRestaurant3") {
                _this.movedPanoramaRestaurant3.emit(response[0].tables);
            }
            _this.changeBgColorIfAnreise.emit();
        });
    };
    TableplanComponent.prototype.getStyle = function (a) {
        //console.log("a");
        //console.log(a);
        if (typeof a == null || typeof a === "undefined") {
            return "solid 3px rgb(243, 239, 228)";
        }
        else {
            for (var b = 0; b < a.length; b++) {
                //console.log("LOOOOOOOOOOOOOOP");
                //console.log(a[b].traceValue);
                if (typeof a[b] != null) {
                    if (a[b].bemerkungValue != "-") {
                        this.bemerkung = true;
                    }
                }
            }
            if (this.bemerkung) {
                this.bemerkung = false;
                return "solid 3px red";
            }
            else {
                return "solid 3px rgb(243, 239, 228)";
            }
        }
    };
    TableplanComponent.prototype.none = function (event) {
        event.stopPropagation();
    };
    TableplanComponent.prototype.mouseEnterMoveTableButton = function () {
        console.log("mouse enter : ");
        if (this.buttonMoveTable === "ff0000") {
            console.log('mouse enter1 :');
            this.buttonMoveTable = "bc0000";
        }
    };
    TableplanComponent.prototype.mouseLeaveMoveTableButton = function () {
        if (this.buttonMoveTable === "bc0000") {
            console.log('mouse leave1 :');
            this.buttonMoveTable = "ff0000";
        }
    };
    TableplanComponent.prototype.mouseEnterInfoButton = function () {
        console.log("mouse enter : ");
        if (this.buttonInfo === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonInfo = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveInfoButton = function () {
        if (this.buttonInfo === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonInfo = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterHinzufuegenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonHinzufuegen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonHinzufuegen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveHinzufuegenButton = function () {
        if (this.buttonHinzufuegen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonHinzufuegen = "ffffff";
        }
    };
    TableplanComponent.prototype.mouseEnterEntfernenButton = function () {
        console.log("mouse enter : ");
        if (this.buttonEntfernen === "ffffff") {
            console.log('mouse enter1 :');
            this.buttonEntfernen = "cfcfcf";
        }
    };
    TableplanComponent.prototype.mouseLeaveEntfernenButton = function () {
        if (this.buttonEntfernen === "cfcfcf") {
            console.log('mouse leave1 :');
            this.buttonEntfernen = "ffffff";
        }
    };
    TableplanComponent.prototype.getStyleTrace = function (j) {
        if (j != "-") {
            return "solid 3px red";
        }
        else {
            return "";
        }
    };
    TableplanComponent.prototype.sumUpPersonenAnzahl = function () {
        console.log("sumUpPersonenAnzahl called");
        if (this.tablesPanoramaRestaurant1) {
            for (var p = 0; p < this.tablesPanoramaRestaurant1.length; p++) {
                this.erwPanoramaRestaurant1[p] = 0;
                this.kiPanoramaRestaurant1[p] = 0;
                if (this.tablesPanoramaRestaurant1[p].groups) {
                    for (var g = 0; g < this.tablesPanoramaRestaurant1[p].groups.length; g++) {
                        if (this.tablesPanoramaRestaurant1[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesPanoramaRestaurant1[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwPanoramaRestaurant1[p] = this.erwPanoramaRestaurant1[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiPanoramaRestaurant1[p] = this.kiPanoramaRestaurant1[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesFeuerstein) {
            for (var p = 0; p < this.tablesFeuerstein.length; p++) {
                this.erwFeuerstein[p] = 0;
                this.kiFeuerstein[p] = 0;
                if (this.tablesFeuerstein[p].groups) {
                    for (var g = 0; g < this.tablesFeuerstein[p].groups.length; g++) {
                        if (this.tablesFeuerstein[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesFeuerstein[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwFeuerstein[p] = this.erwFeuerstein[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiFeuerstein[p] = this.kiFeuerstein[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesPanoramaRestaurant2) {
            for (var p = 0; p < this.tablesPanoramaRestaurant2.length; p++) {
                this.erwPanoramaRestaurant2[p] = 0;
                this.kiPanoramaRestaurant2[p] = 0;
                if (this.tablesPanoramaRestaurant2[p].groups) {
                    for (var g = 0; g < this.tablesPanoramaRestaurant2[p].groups.length; g++) {
                        if (this.tablesPanoramaRestaurant2[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesPanoramaRestaurant2[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwPanoramaRestaurant2[p] = this.erwPanoramaRestaurant2[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiPanoramaRestaurant2[p] = this.kiPanoramaRestaurant2[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesPanoramaRestaurant3) {
            for (var p = 0; p < this.tablesPanoramaRestaurant3.length; p++) {
                this.erwPanoramaRestaurant3[p] = 0;
                this.kiPanoramaRestaurant3[p] = 0;
                if (this.tablesPanoramaRestaurant3[p].groups) {
                    for (var g = 0; g < this.tablesPanoramaRestaurant3[p].groups.length; g++) {
                        if (this.tablesPanoramaRestaurant3[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesPanoramaRestaurant3[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwPanoramaRestaurant3[p] = this.erwPanoramaRestaurant3[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiPanoramaRestaurant3[p] = this.kiPanoramaRestaurant3[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        if (this.tablesIselerRestaurant) {
            for (var p = 0; p < this.tablesIselerRestaurant.length; p++) {
                this.erwIselerRestaurant[p] = 0;
                this.kiIselerRestaurant[p] = 0;
                if (this.tablesIselerRestaurant[p].groups) {
                    for (var g = 0; g < this.tablesIselerRestaurant[p].groups.length; g++) {
                        if (this.tablesIselerRestaurant[p].groups[g].personenAnzahlValue) {
                            var erwKi = this.tablesIselerRestaurant[p].groups[g].personenAnzahlValue.match(/\d+/g);
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.erwIselerRestaurant[p] = this.erwIselerRestaurant[p] + Number(erwKi[0]);
                                //console.log(this.erw[p]);
                            }
                            if (erwKi != null) {
                                //console.log(erwKi);
                                this.kiIselerRestaurant[p] = this.kiIselerRestaurant[p] + Number(erwKi[1]);
                                //console.log(this.ki[p]);
                            }
                        }
                    }
                }
            }
        }
        this.exportKiIselerRestaurant.emit(this.kiIselerRestaurant);
        this.exportErwIselerRestaurant.emit(this.erwIselerRestaurant);
        this.exportKiPanoramaRestaurant2.emit(this.kiPanoramaRestaurant2);
        this.exportErwPanoramaRestaurant2.emit(this.erwPanoramaRestaurant2);
        this.exportKiPanoramaRestaurant3.emit(this.kiPanoramaRestaurant3);
        this.exportErwPanoramaRestaurant3.emit(this.erwPanoramaRestaurant3);
        this.exportKiPanoramaRestaurant1.emit(this.kiPanoramaRestaurant1);
        this.exportErwPanoramaRestaurant1.emit(this.erwPanoramaRestaurant1);
        this.exportKiFeuerstein.emit(this.kiFeuerstein);
        this.exportErwFeuerstein.emit(this.erwFeuerstein);
    };
    return TableplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tables'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tables", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dateGeneratedListe'),
    __metadata("design:type", String)
], TableplanComponent.prototype, "dateGeneratedListe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesFeuerstein'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesFeuerstein'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant1'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant1'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant2'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant2'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesPanoramaRestaurant3'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesPanoramaRestaurant3'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tablesIselerRestaurant'),
    __metadata("design:type", Array)
], TableplanComponent.prototype, "tablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesIselerRestaurant'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablesAlle'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablesAlle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showTablePlanBool'),
    __metadata("design:type", Boolean)
], TableplanComponent.prototype, "showTablePlanBool", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TableplanComponent.prototype, "movedPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TableplanComponent.prototype, "movedPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TableplanComponent.prototype, "movedFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], TableplanComponent.prototype, "movedIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], TableplanComponent.prototype, "movedPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], TableplanComponent.prototype, "changeBgColorIfAnreise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _g || Object)
], TableplanComponent.prototype, "exportKiIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _h || Object)
], TableplanComponent.prototype, "exportErwIselerRestaurant", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _j || Object)
], TableplanComponent.prototype, "exportKiPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _k || Object)
], TableplanComponent.prototype, "exportErwPanoramaRestaurant2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _l || Object)
], TableplanComponent.prototype, "exportKiPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _m || Object)
], TableplanComponent.prototype, "exportErwPanoramaRestaurant3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _o || Object)
], TableplanComponent.prototype, "exportKiPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _p || Object)
], TableplanComponent.prototype, "exportErwPanoramaRestaurant1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _q || Object)
], TableplanComponent.prototype, "exportKiFeuerstein", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _r || Object)
], TableplanComponent.prototype, "exportErwFeuerstein", void 0);
TableplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tableplan',
        template: __webpack_require__("./src/app/components/digitalerTischplan/tableplan/tableplan.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _s || Object])
], TableplanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=tableplan.component.js.map

/***/ }),

/***/ "./src/app/components/digitalerTischplan/tischplan.component.css":
/***/ (function(module, exports) {

module.exports = "html {\n  background-color: #0a7a74;\n}\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: #0a7a74;\n}\n\nspan {\n  color: #9d9d9d;\n}\n\n.container-fluid {\n  padding: 0 0 10px 0;\n  margin: 0;\n  height: 100vh;\n  max-width: 100vw;\n  background-color: #0a7a74;\n}\n\n.row {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0 15px 15px 15px;\n  background-color: #0a7a74;\n  margin: 0 0 0 0;\n}\n\n.line{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 115px;\n}\n\n.line1{\n  width: 100%;\n  height: 20px;\n  border-bottom: solid 10px #0a7a74;\n  position: absolute;\n  right: 0px;\n  top: 95px;\n}\n\n.printTwo {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #0a7a74;\n  max-height: calc(100vh - 240px);\n}\n\n.row .inner-table {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: calc(100vh - 120px);\n}\n\n.row .table-col {\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  width: calc(100vw - 20px);\n  max-width: 100%;\n}\n\n.print-col {\n  padding: 0;\n  min-height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 2;\n}\n\n.row .upload-col {\n  background-color: #f3efe4;\n  padding: 10px 10px 20px 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: calc(100vh - 70px);\n  max-height: calc(100vh - 70px);\n  border-radius: 3px;\n  z-index: 1;\n\n}\n\n.section3 {\n  display: none;\n}\n\n.section2 {\n  display: none;\n}\n\n.row1 {\n  height: calc((100vh - 195px) / 3);\n  overflow: auto;\n}\n\n.row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n  display: none;\n}\n\n.cards-container {\n  margin: 10px 0px 10px 0px;\n  padding: 10px 10px 40px 10px;\n\n}\n\n.row .container-fluid  .table-col .inner-table .row3 .wrapper .cards-container {\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n\n}\n\n#containerFeuerstein, #containerPanoramaRestaurant1, #containerPanoramaRestaurant2, #containerIselerRestaurant, #containerPanoramaRestaurant3 {\n  border-radius: 3px;\n  border: solid 1px grey;\n}\n\n.row .container-fluid .col-md-4 .row1 {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  width: 105%;\n  height: 232.5px;\n  padding-top: 20px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper {\n  overflow: auto;\n  margin: 0 0 0 0;\n  display: inline-block;\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container {\n  overflow: auto;\n  margin: 20px 40px 20px 0;\n  display: inline-block;\n  max-width: 100%;\n  border-radius: 3px;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 {\n  overflow: auto;\n  margin: 0 auto;\n  display: inline-block;\n  width: 100%;\n  height: 800px;\n  padding-top: 20px;\n}\n\n.row .container-fluid h3 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  margin: 0 auto;\n  display: inline-block;\n  color: #0a7a74;\n  position: relative;\n  text-align: center;\n}\n\n.row .container-fluid .col-md-4 h3 {\n  margin: 0 auto;\n  color: #0a7a74;\n  position: relative;\n}\n\nbody html .row .container-fluid .upload-col .outer-cards h3 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #0a7a74;\n}\n\n.row1 .col {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.row1 .col:nth-child(1) {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.row1 .col:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.row1 .col:nth-child(3) {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.row .col-md-4 .row2 {\n  padding-bottom: 10px;\n  position: relative;\n  min-height: 100%;\n  border-bottom: 1px solid red;\n}\n\n.card {\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  border-radius: 3px;\n  border: solid 1px grey;\n  padding: 10px 10px 15px 10px;\n}\n\n.row .container-fluid .col-md-4 .row1 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .wrapper .container .card p {\n  /*padding:10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .row3 .row1 p {\n  /*padding: 10px 10px 10px 10px;*/\n  background: rgb(255,255,255); /* Fall-back for browsers that don support rgba */\n  background: rgba(255,255,255, 1);\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-4 .col-xs-12 .row1 .wrapper .container .card p {\n  /*padding: 10px 10px 10px 10px;*/\n  max-width: 100%;\n}\n\n.row .container-fluid .col-md-6 .row {\n  background-color: #eaf3f3;\n  padding: 20px 10px 20px 10px;\n  height: 100%;\n}\n\n.table-item {\n  position: absolute;\n}\n\n.btn-send {\n  display: none;\n}\n\n.csv {\n  margin-bottom: 30px;\n}\n\n.btn-default {\n  display: none;\n}\n\n.btn-primary {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n  margin: 10px 20px 20px 0px;\n  border: none;\n}\n\n.btn-group-departments {\n  margin: 0px 10px 5px 0px;\n}\n\n.btn-primary:hover {\n  background-color: #1f5452;\n  color: #FFFFFF;\n  margin-left: 20px;\n  border: none;\n}\n\n.btn-primary.active, .btn-primary:active, .open>.dropdown-toggle.btn-primary {\n  background-color: #1f5452;\n  color: #FFFFFF;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  background-color: #0a7a74;\n  color: #FFFFFF;\n}\n\n@media (min-width: 701px) {\n\n  .row {\n    max-width: 100vw;\n    max-height: calc(100vh - 60px);\n    padding: 0 15px 15px 15px;\n    background-color: #0a7a74;\n  }\n\n  .row .table-col {\n    max-height: calc(100vh - 70px);\n    min-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    max-width: calc(100vw - 20px);\n    width: 30%;\n    margin: 60px 0 0 10px;\n  }\n\n  .btn-group-departments {\n    margin: 0 10px 5px 20px;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    height: 100vh;\n    top: -100px;\n    z-index: -1;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 121px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height:  calc(100vh - 10px);\n    max-height: calc(100vh - 10px);\n  }\n\n  .print-col {\n    margin-left: 15px;\n    width: 65%;\n    max-height: calc(100vh - 60px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .btn-default {\n    display: inline-block;\n  }\n\n  .btn-send {\n    display: block;\n  }\n\n  .printTwo {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    background-color: #0a7a74;\n    min-height: calc(100vh - 60px);\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .table-col {\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 24%;\n    margin: 60px 0 0 10px;\n\n  }\n\n  .row .upload-col, .printToCart2, .dropdown-toggle, .printToCart1, .printToCart3, .Tisch, .anleitung {\n    display: block;\n  }\n\n  .print-col {\n    width: 48%;\n    margin-left: 15px;\n    margin-top: 60px;\n    max-height: calc(100vh - 60px);\n  }\n\n  .row .upload-col {\n    background-color: #f3efe4;\n    padding: 20px 10px 20px 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-height: calc(100vh - 70px);\n    max-height: calc(100vh - 70px);\n    margin-top: 60px;\n  }\n\n  .row .inner-table {\n    max-height: calc(100vh - 125px);\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .navbar-nav {\n    display: inline-block;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/tischplan.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <title>Dashboard</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"node_modules/core-js/client/shim.min.js\"></script>\n  <script src=\"<your-libs-directory>/object-assign.min.js\"></script>\n\n</head>\n<body>\n<div id=\"charge-error\" class=\"alert alert-danger <% if ( !errMsg ) { %> hidden <% } %>\">\n  <%= errMsg  %>\n</div>\n<app-navigation [newInformationElements]=\"newInformationElements\"\n                [tablesOccupied]=\"tablesOccupied\"\n                (getTablesOccupied)=\"tablesOccupied = $event\"\n                (umsetzenExport)=\"umsetzenInfoVar = $event; umsetzen($event)\"\n                [tablesTempAbreise]=\"tablesTempAbreise\"\n                (abreisenExportExport)=\"abreiseTablePlusIndex = $event; abreisenRemoval($event)\"\n                (transformExport)=\"term = $event; transform($event)\"\n                (termExport)=\"term = $event\"\n                (reloadLists)=\"reloadLists($event)\"\n                (getTablesExport)=\"getTables($event)\">\n</app-navigation>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n   <flash-messages></flash-messages>\n    <div class=\"col-xs-12 col-sm-8 col-lg-6 print-col\">\n      <app-departmentmenu\n        [buttonBgColor1]=\"buttonBgColor1\"\n        [buttonBgColor2]=\"buttonBgColor2\"\n        [buttonBgColor3]=\"buttonBgColor3\"\n        [buttonBgColor4]=\"buttonBgColor4\"\n        [buttonBgColor5]=\"buttonBgColor5\"\n        [buttonBgColor6]=\"buttonBgColor6\"\n        [fontColor1]=\"fontColor1\"\n        [fontColor2]=\"fontColor2\"\n        [fontColor3]=\"fontColor3\"\n        [fontColor4]=\"fontColor4\"\n        [fontColor5]=\"fontColor5\"\n        [fontColor6]=\"fontColor6\"\n        [showTablesFeuerstein]=\"showTablesFeuerstein\"\n        [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\"\n        [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\"\n        [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\"\n        [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\"\n        [showTablesAlle]=\"showTablesAlle\"\n        (showFeuersteinBoolChange)=\"showTablesFeuerstein=$event\"\n        (showPanoramaRestaurant2BoolChange)=\"showTablesPanoramaRestaurant2=$event\"\n        (showPanoramaRestaurant3BoolChange)=\"showTablesPanoramaRestaurant3=$event\"\n        (showIselerRestaurantBoolChange)=\"showTablesIselerRestaurant=$event\"\n        (showPanoramaRestaurant1BoolChange)=\"showTablesPanoramaRestaurant1=$event\"\n        (showAlleBoolChange)=\"showTablesAlle=$event\"\n        [buttonBgColorInfoForm]=\"buttonBgColorInfoForm\"\n        [buttonBgColorNotizForm]=\"buttonBgColorNotizForm\"\n        [fontColorInfoForm]=\"fontColorInfoForm\"\n        [fontColorNotizForm]=\"fontColorNotizForm\"\n        [showNotizFormBool]=\"showNotizFormBool\"\n        [showInfoFormBool]=\"showInfoFormBool\"\n        (showInfoFormBoolChange)=\"showInfoFormBool=$event\"\n        (showNotizFormBoolChange)=\"showNotizFormBool=$event\"\n        (showTablePlanBoolChange)=\"showTablePlanBool=$event\"\n        [showTablePlanBool]=\"showTablePlanBool\"\n        [buttonBgColorShowTablePlan]=\"buttonBgColorShowTablePlan\"\n        [fontColorShowTablePlan]=\"fontColorShowTablePlan\">\n      </app-departmentmenu><flash-messages></flash-messages>\n      <app-form [newInformationElements]=\"newInformationElements\"\n                [dateGenerated]=\"dateGenerated\"\n                [title]=\"title\"\n                [roomNumber]=\"roomNumber\"\n                [tableNumber]=\"tableNumber\"\n                [employee]=\"employee\"\n                [nameTraceInput]=\"nameTraceInput\"\n                [tablesFeuerstein]=\"tablesFeuerstein\"\n                [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\"\n                [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\"\n                [tablesIselerRestaurant]=\"tablesIselerRestaurant\"\n                [tablesTeestubeTeelounge]=\"tablesTeestubeTeelounge\"\n                [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\"\n                [showNotizFormBool]=\"showNotizFormBool\"\n                [showInfoFormBool]=\"showInfoFormBool\"\n                [notizElements]=\"notizElements\"\n                (notizResponse)=\"notizElements=$event\"\n                [showTablesFeuerstein]=\"showTablesFeuerstein\"\n                [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\"\n                [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\"\n                [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\"\n                [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\"\n                [showTablesAlle]=\"showTablesAlle\"\n                (changeColorIfAnreiseExport)=\"changeBgColorIfAnreise($event)\">\n      </app-form>\n      <app-tableplan [tablesFeuerstein]=\"tablesFeuerstein\"\n                     [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\"\n                     [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\"\n                     [tablesIselerRestaurant]=\"tablesIselerRestaurant\"\n                     [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\"\n                     [showTablesFeuerstein]=\"showTablesFeuerstein\"\n                     [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\"\n                     [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\"\n                     [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\"\n                     [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\"\n                     [showTablesAlle]=\"showTablesAlle\"\n                     (movedFeuerstein)=\"tablesFeuerstein = $event\"\n                     (movedIselerRestaurant)=\"tablesIselerRestaurant = $event\"\n                     (movedPanoramaRestaurant3)=\"tablesPanoramaRestaurant3 = $event\"\n                     (movedPanoramaRestaurant2)=\"tablesPanoramaRestaurant2 = $event\"\n                     (movedPanoramaRestaurant1)=\"tablesPanoramaRestaurant1 = $event\"\n                     [showTablePlanBool]=\"showTablePlanBool\"\n                     (changeBgColorIfAnreise)=\"changeBgColorIfAnreise($event)\"\n                     (exportErwIselerRestaurant)=\"erwIselerRestaurant = $event\"\n                     (exportKiIselerRestaurant)=\"kiIselerRestaurant = $event\"\n                     (exportErwFeuerstein)=\"erwFeuerstein = $event\"\n                     (exportKiFeuerstein)=\"kiFeuerstein = $event\"\n                     (exportErwPanoramaRestaurant3)=\"erwPanoramaRestaurant3 = $event\"\n                     (exportKiPanoramaRestaurant3)=\"kiPanoramaRestaurant3 = $event\"\n                     (exportErwPanoramaRestaurant2)=\"erwPanoramaRestaurant2 = $event\"\n                     (exportKiPanoramaRestaurant2)=\"kiPanoramaRestaurant2 = $event\"\n                     (exportErwPanoramaRestaurant1)=\"erwPanoramaRestaurant1 = $event\"\n                     (exportKiPanoramaRestaurant1)=\"kiPanoramaRestaurant1 = $event\">\n      </app-tableplan>\n    </div>\n    <div class=\"col-xs-12 col-lg-3 upload-col\">\n      <div class=\"outer-cards\">\n        <app-im-haus-liste [imHausListeElemente]=\"imHausListeElemente\">\n        </app-im-haus-liste>\n      </div>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-4 col-lg-3 table-col\">\n      <h3 >Tisch Übersicht</h3>\n        <div class=\"inner-table\" style=\"padding: 0px 0px 0px 0px;\">\n          <div class=\"row3\">\n            <div class='wrapper' id=\"wrapper\">\n              <app-departments  [tables]=\"tables\"\n                                [tablesFeuerstein]=\"tablesFeuerstein\"\n                                [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\"\n                                [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\"\n                                [tablesIselerRestaurant]=\"tablesIselerRestaurant\"\n                                [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\"\n                                [showTablesFeuerstein]=\"showTablesFeuerstein\"\n                                [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\"\n                                [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\"\n                                [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\"\n                                [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\"\n                                (dispensedFeuerstein)=\"tablesFeuerstein=$event\"\n                                (dispensedPanoramaRestaurant3)=\"tablesPanoramaRestaurant3=$event\"\n                                (dispensedPanoramaRestaurant2)=\"tablesPanoramaRestaurant2=$event\"\n                                (dispensedPanoramaRestaurant1)=\"tablesPanoramaRestaurant1=$event\"\n                                (dispensedIselerRestaurant)=\"tablesIselerRestaurant=$event\"\n                                (infoAddedFeuerstein)=\"tablesFeuerstein=$event\"\n                                (infoAddedIselerRestaurant3)=\"tablesPanoramaRestaurant3=$event\"\n                                (infoAddedIselerRestaurant2)=\"tablesPanoramaRestaurant2=$event\"\n                                (infoAddedPanoramaRestaurant1)=\"tablesPanoramaRestaurant1=$event\"\n                                (infoAddedPanoramaRestaruant)=\"tablesIselerRestaurant=$event\"\n                                [term]=\"term\"\n                                [tablesTempAbreise]=\"tablesTempAbreise\"\n                                [showTablesAlle]=\"showTablesAlle\"\n                                (updateAzList)=\"updateAzList($event)\"\n                                (updateImHausListeElement)=\"updateImHausListeElement($event); table = $event;\">\n              </app-departments>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n</body>\n<app-print  [tables]=\"tables\"\n            [dateGeneratedListe]=\"dateGeneratedListe\"\n            [tablesFeuerstein]=\"tablesFeuerstein\"\n            [tablesPanoramaRestaurant3]=\"tablesPanoramaRestaurant3\"\n            [tablesPanoramaRestaurant2]=\"tablesPanoramaRestaurant2\"\n            [tablesIselerRestaurant]=\"tablesIselerRestaurant\"\n            [tablesPanoramaRestaurant1]=\"tablesPanoramaRestaurant1\"\n            [showTablesFeuerstein]=\"showTablesFeuerstein\"\n            [showTablesPanoramaRestaurant3]=\"showTablesPanoramaRestaurant3\"\n            [showTablesPanoramaRestaurant2]=\"showTablesPanoramaRestaurant2\"\n            [showTablesIselerRestaurant]=\"showTablesIselerRestaurant\"\n            [showTablesPanoramaRestaurant1]=\"showTablesPanoramaRestaurant1\"\n            (getTablesOccupied)=\"tablesOccupied = $event\"\n            (getTablesforAzListe)=\"tables = $event\"\n            [erwIselerRestaurant]=\"erwIselerRestaurant\"\n            [kiIselerRestaurant]=\"kiIselerRestaurant\"\n            [erwFeuerstein]=\"erwFeuerstein\"\n            [kiFeuerstein]=\"kiFeuerstein\"\n            [erwPanoramaRestaurant3]=\"erwPanoramaRestaurant3\"\n            [kiPanoramaRestaurant3]=\"kiPanoramaRestaurant3\"\n            [erwPanoramaRestaurant2]=\"erwPanoramaRestaurant2\"\n            [kiPanoramaRestaurant2]=\"kiPanoramaRestaurant2\"\n            [erwPanoramaRestaurant1]=\"erwPanoramaRestaurant1\"\n            [kiPanoramaRestaurant1]=\"kiPanoramaRestaurant1\">\n</app-print>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/components/digitalerTischplan/tischplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__ = __webpack_require__("./src/app/services/tischplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print_print_component__ = __webpack_require__("./src/app/components/digitalerTischplan/print/print.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departmentmenu/departmentmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__("./src/app/components/digitalerTischplan/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__ = __webpack_require__("./src/app/components/digitalerTischplan/im-haus-liste/im-haus-liste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("./src/app/components/digitalerTischplan/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__ = __webpack_require__("./src/app/components/digitalerTischplan/tableplan/tableplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__departments_departments_component__ = __webpack_require__("./src/app/components/digitalerTischplan/departments/departments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TischplanComponent = (function () {
    function TischplanComponent(tischplanService, http, _flashMessagesService, dragulaService) {
        var _this = this;
        this.tischplanService = tischplanService;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.dragulaService = dragulaService;
        this.topValues = [];
        this.newInformationElements = [];
        this.tables = [];
        this.uniqueTables = [];
        this.tableNumbers = [];
        this.tablesTemp = [];
        this.tempTablesArray = [];
        this.tempTablesArray2 = [];
        this.tempTablesArray1 = [];
        this.tempTablesArray3 = [];
        this.tablesIselerRestaurant = [];
        this.tablesFeuerstein = [];
        this.tablesPanoramaRestaurant1 = [];
        this.tablesPanoramaRestaurant2 = [];
        this.tablesPanoramaRestaurant3 = [];
        this.filesToUpload = [];
        this.isDropped = [];
        this.notizElements = [];
        this.date = [];
        this.parts = [];
        this.parsedDate = [];
        this.tableInformation = [];
        this.tablesTempAbreise = [];
        this.erwFeuerstein = [];
        this.kiFeuerstein = [];
        this.erwPanoramaRestaurant2 = [];
        this.kiPanoramaRestaurant2 = [];
        this.erwIselerRestaurant = [];
        this.kiIselerRestaurant = [];
        this.erwPanoramaRestaurant1 = [];
        this.kiPanoramaRestaurant1 = [];
        this.erwPanoramaRestaurant3 = [];
        this.kiPanoramaRestaurant3 = [];
        this.buttonBgColorInfoForm = "0a7a74";
        this.buttonBgColorNotizForm = "0a7a74";
        this.fontColorInfoForm = "f3efe4";
        this.fontColorNotizForm = "f3efe4";
        this.buttonBgColorShowTablePlan = "0a7a74";
        this.fontColorShowTablePlan = "f3efe4";
        this.dateGeneratedListe = new Date();
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74";
        this.buttonBgColor5 = "0a7a74";
        this.buttonBgColor6 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4";
        this.fontColor5 = "f3efe4";
        this.fontColor6 = "f3efe4";
        this.tablesOccupied = 0;
        this.backgroundColor = "ffffff";
        this.showTablesPanoramaRestaurant1 = false;
        this.showTablesPanoramaRestaurant2 = false;
        this.showTablesPanoramaRestaurant3 = false;
        this.showTablesIselerRestaurant = false;
        this.showTablesFeuerstein = false;
        this.showTablesAlle = false;
        this.term = "";
        this.tischplanService.getNotizElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.notizElements = informationElemente;
                console.log(_this.notizElements);
            }
        });
        this.getTables();
        this.reloadLists();
        this.tischplanService.getInformationElements()
            .subscribe(function (informationElemente) {
            if (informationElemente === null) {
                return;
            }
            else {
                _this.newInformationElements = informationElemente;
                //console.log(this.newInformationElements);
            }
        });
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    TischplanComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
    };
    TischplanComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log("Args = " + JSON.stringify(args));
        console.log("Args1 = " + JSON.stringify(args[1]));
        console.log("Args2 = " + JSON.stringify(args[2]));
        console.log("Args3 = " + JSON.stringify(args[3]));
        console.log("Args4 = " + JSON.stringify(args[4]));
        console.log("e = " + JSON.stringify(e));
        console.log("el = " + JSON.stringify(el));
        var information = args[0].innerText;
        console.log("information: " + information);
        var informationElements = information.split(/\n/);
        //console.log(informationElements);
        var informationElements2 = [];
        for (var s = 0; s < informationElements.length; s++) {
            informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
            if (informationElements2[s] === undefined) {
                informationElements2[s] = informationElements[s];
            }
        }
        //console.log(informationElements2);
        var department = JSON.stringify(args[1].id);
        //console.log("departement" + department);
        var departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring: " + departementSubstring);
        var innerText = args[1].innerText;
        console.log(innerText);
        //console.log("tableNumber: " + tableNumber);
        var tableNumberSubstring = innerText.toString().match(/\d+/);
        //console.log('tableNumberSubstring');
        //console.log(tableNumberSubstring);
        var numbers = innerText.match(/\d+/g);
        var arrayIndex = [];
        //console.log(innerText.substring(33, 34));
        if (innerText.substring(33, 34) === "." || innerText.substring(32, 33) === "." || innerText.substring(34, 35) === ".") {
            arrayIndex = numbers[2];
            tableNumberSubstring = numbers[0] + "." + numbers[1];
        }
        else {
            arrayIndex = numbers[1];
        }
        //console.log("numbers: " + numbers);
        //console.log("arrayIndex: " + arrayIndex);
        //console.log("tableNumberSubstring: " + tableNumberSubstring);
        var dataString = [];
        dataString.push(information + departementSubstring + tableNumberSubstring);
        var jBefore = innerText.toString().match(/\d+/g);
        console.log(jBefore);
        var j = jBefore[1];
        //let j = jArray[1];
        var addPlaceholderDataString = [];
        addPlaceholderDataString.push(departementSubstring);
        addPlaceholderDataString.push(tableNumberSubstring);
        console.log('j ===================>>>>>>>>>>>' + addPlaceholderDataString + 'END');
        //console.log(departementSubstring);
        //console.log(tableNumberSubstring);
        this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
        this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
        this.tableplanComponent.sumUpPersonenAnzahl();
        this.updateImHausListeElement(informationElements2);
    };
    TischplanComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        // do something
    };
    TischplanComponent.prototype.ngOnInit = function () {
        // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    TischplanComponent.prototype.showFeuerstein = function () {
        this.departmentmenuComponent.showFeuersteinFunction();
    };
    TischplanComponent.prototype.showIselerRestaurant = function () {
        this.departmentmenuComponent.showIselerRestaurantFunction();
    };
    TischplanComponent.prototype.showPanoramaRestaurant1 = function () {
        this.departmentmenuComponent.showPanoramaRestaurant1Function();
    };
    TischplanComponent.prototype.showPanoramaRestaurant2 = function () {
        this.departmentmenuComponent.showPanoramaRestaurant2Function();
    };
    TischplanComponent.prototype.showPanoramaRestaurant3 = function () {
        this.departmentmenuComponent.showPanoramaRestaurant3Function();
    };
    TischplanComponent.prototype.updateImHausListeElement = function (x) {
        this.imHausListeComponent.updateImHausListeElement(x);
    };
    /*
    moveTable(table, j) {
      this.tableplanComponent.moveTable(table, j);
    }
    */
    TischplanComponent.prototype.sendInformation = function (event) {
        this.formComponent.sendInformation(event);
    };
    TischplanComponent.prototype.delete = function (informationElement, j, event) {
        this.navigationComponent.delete(informationElement, j, event);
    };
    TischplanComponent.prototype.changeBgColorIfAnreise = function () {
        this.departmentsComponent.changeBgColorIfAnreise();
    };
    TischplanComponent.prototype.abreisenRemoval = function () {
        this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.a);
    };
    TischplanComponent.prototype.umsetzen = function () {
        var _this = this;
        this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
        this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);
        setTimeout(function () {
            _this.departmentsComponent.occupy(_this.umsetzenInfoVar.tableToMove, _this.umsetzenInfoVar.indexQuell);
        }, 2000);
    };
    TischplanComponent.prototype.transform = function (term) {
        this.departmentsComponent.transform(term);
    };
    TischplanComponent.prototype.reloadLists = function () {
        var _this = this;
        this.tischplanService.getImHausListe()
            .subscribe(function (imHausListeElemente) {
            console.log('reloadLists called');
            //console.log(imHausListeElemente);
            imHausListeElemente.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.imHausListeElemente = imHausListeElemente;
            console.log('IM-HAUS-LISTE:');
            console.log(_this.imHausListeElemente);
            setTimeout(function () {
                _this.imHausListeComponent.sortList();
            }, 3000);
        });
    };
    TischplanComponent.prototype.updateAzList = function () {
        var _this = this;
        setTimeout(function () {
            console.log("gettables in updateAzList");
            _this.getTables();
            setTimeout(function () {
                _this.tables = _this.tablesFeuerstein.concat(_this.tablesPanoramaRestaurant1).concat(_this.tablesPanoramaRestaurant2).concat(_this.tablesPanoramaRestaurant3).concat(_this.tablesIselerRestaurant);
                //console.log('this.tables: in updateAzList');
                console.log(_this.tables);
                _this.printComponent.formatAzListe(_this.tables);
            }, 3000);
        }, 1000);
    };
    TischplanComponent.prototype.getTables = function () {
        var _this = this;
        this.tischplanService.getTables()
            .subscribe(function (tables) {
            console.log("TABLES LENGTH: " + tables.length);
            if (typeof tables == null) {
                return;
            }
            else {
                for (var x = 0; x < tables.length; x++) {
                    //console.log("tables[x].department");
                    //console.log(tables[x].department);
                    tables[x].tables.sort(function (a, b) {
                        //console.log(a.number);
                        //console.log(b.number);
                        if (Number(a.number) < Number(b.number))
                            return -1;
                        if (Number(a.number) > Number(b.number))
                            return 1;
                        return 0;
                    });
                }
                for (var a = 0; a < tables.length; a++) {
                    if (tables[a].department === "feuerstein") {
                        _this.tablesFeuerstein = tables[a].tables;
                    }
                    else if (tables[a].department === "panoramaRestaurant1") {
                        _this.tablesPanoramaRestaurant1 = tables[a].tables;
                        //console.log('Test' + JSON.stringify(this.tablesPanoramaRestaurant2KaminStube));
                    }
                    else if (tables[a].department === "panoramaRestaurant2") {
                        _this.tablesPanoramaRestaurant2 = tables[a].tables;
                    }
                    else if (tables[a].department === "panoramaRestaurant3") {
                        _this.tablesPanoramaRestaurant3 = tables[a].tables;
                    }
                    else if (tables[a].department === "iselerRestaurant") {
                        _this.tablesIselerRestaurant = tables[a].tables;
                    }
                }
            }
            console.log(JSON.stringify(tables));
            console.log(_this.tablesFeuerstein);
            console.log(_this.tablesPanoramaRestaurant1);
            console.log(_this.tablesPanoramaRestaurant2);
            console.log(_this.tablesPanoramaRestaurant3);
            console.log(_this.tablesIselerRestaurant);
            _this.tablesTempAbreise = tables;
            _this.tables = _this.tablesFeuerstein.concat(_this.tablesPanoramaRestaurant1).concat(_this.tablesPanoramaRestaurant2).concat(_this.tablesPanoramaRestaurant3).concat(_this.tablesIselerRestaurant);
            //console.log(this.tables);
            _this.changeBgColorIfAnreise();
            _this.printComponent.formatAzListe(_this.tables);
            //this.dispenseIfAbreise(tables);
            setTimeout(function () {
                _this.tableplanComponent.sumUpPersonenAnzahl();
            }, 1000);
        });
    };
    return TischplanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__print_print_component__["a" /* PrintComponent */]) === "function" && _a || Object)
], TischplanComponent.prototype, "printComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__departmentmenu_departmentmenu_component__["a" /* DepartmentmenuComponent */]) === "function" && _b || Object)
], TischplanComponent.prototype, "departmentmenuComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */]) === "function" && _c || Object)
], TischplanComponent.prototype, "formComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__departments_departments_component__["a" /* DepartmentsComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__departments_departments_component__["a" /* DepartmentsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__departments_departments_component__["a" /* DepartmentsComponent */]) === "function" && _d || Object)
], TischplanComponent.prototype, "departmentsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__im_haus_liste_im_haus_liste_component__["a" /* ImHausListeComponent */]) === "function" && _e || Object)
], TischplanComponent.prototype, "imHausListeComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]) === "function" && _f || Object)
], TischplanComponent.prototype, "navigationComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */]),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__tableplan_tableplan_component__["a" /* TableplanComponent */]) === "function" && _g || Object)
], TischplanComponent.prototype, "tableplanComponent", void 0);
TischplanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tischplan',
        template: __webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.html"),
        styles: [__webpack_require__("./src/app/components/digitalerTischplan/tischplan.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tischplan_service__["a" /* TischplanService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"]) === "function" && _l || Object])
], TischplanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=tischplan.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            console.log('CAN ACTIVATE IS TRUE');
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log('CAN ACTIVATE IS FALSE');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.authenticateUser = function (user) {
        console.log("Check1");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Gets called from submit login form
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log(JSON.stringify(user));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8000/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/tischplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TischplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TischplanService = (function () {
    function TischplanService(http) {
        this.http = http;
        console.log('Task service initialized!');
    }
    TischplanService.prototype.getImHausListe = function () {
        return this.http.get('imHausListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getAnreiseListe = function () {
        return this.http.get('anreiseListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTracesListe = function () {
        return this.http.get('tracesListe')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getTables = function () {
        return this.http.get('tables')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getInformationElements = function () {
        return this.http.get('information')
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.occupyTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('occupyTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removeTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removeTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.dispenseTable = function (table) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('dispenseTable', table, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.removePlaceholder = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('removePlaceholder', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addPlaceholder = function (tableSonnbergZirbn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addPlaceholder', tableSonnbergZirbn, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.addInformationToTable = function (dataString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('addInformationToTable', dataString, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformation = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToTables', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToBox = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newInformationToBox', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.deleteInformationElement = function (informationElement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('deleteInformationElement', informationElement, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateImHausListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateImHausListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateAnreiseListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateAnreiseListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.updateTracesListeElement = function (informationElements2) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('updateTracesListeElement', informationElements2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.sendInformationToNotizBlock = function (newInformation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post('newNotiz', newInformation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TischplanService.prototype.getNotizElements = function () {
        return this.http.get('getNotiz')
            .map(function (res) { return res.json(); });
    };
    return TischplanService;
}());
TischplanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TischplanService);

var _a;
//# sourceMappingURL=tischplan.service.js.map

/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map