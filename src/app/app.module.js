"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_2 = require("@angular/forms");
var calendar_service_1 = require("./services/calendar.service");
//import { CalendarFormComponent } from './components/calendar-form.component';
var calendar_form_react_component_1 = require("./components/calendar-form.react.component");
var calendar_list_component_1 = require("./components/calendar-list.component");
var confirm_delete_countdown_dialog_1 = require("./components/confirm-delete-countdown-dialog");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var appRoutes = [
    { path: 'new', component: calendar_form_react_component_1.CalendarFormReactComponent },
    { path: 'edit/:id', component: calendar_form_react_component_1.CalendarFormReactComponent },
    { path: 'list', component: calendar_list_component_1.CalendarListComponent },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    }
    /*{ path: 'calendar/:id',      component: CalendarFormComponent },
    { path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }  */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes //, { enableTracing: true } // <-- debugging purposes only
                ),
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_2.ReactiveFormsModule,
                material_1.MdButtonModule,
                material_1.MdCheckboxModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatDialogModule,
                material_1.MdDatepickerModule,
                material_1.MdNativeDateModule
            ],
            declarations: [app_component_1.AppComponent,
                calendar_list_component_1.CalendarListComponent,
                calendar_form_react_component_1.CalendarFormReactComponent,
                confirm_delete_countdown_dialog_1.ConfirmDeleteCountDownDialog],
            entryComponents: [confirm_delete_countdown_dialog_1.ConfirmDeleteCountDownDialog,],
            bootstrap: [app_component_1.AppComponent],
            providers: [calendar_service_1.CalendarService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map