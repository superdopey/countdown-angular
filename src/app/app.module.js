"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var calendar_service_1 = require("./services/calendar.service");
var calendar_form_component_1 = require("./components/calendar-form.component");
var calendar_list_component_1 = require("./components/calendar-list.component");
var appRoutes = [
    { path: 'new', component: calendar_form_component_1.CalendarFormComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes //, { enableTracing: true } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
        declarations: [app_component_1.AppComponent, calendar_form_component_1.CalendarFormComponent, calendar_list_component_1.CalendarListComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [calendar_service_1.CalendarService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map