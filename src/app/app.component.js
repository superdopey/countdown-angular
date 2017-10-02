"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Pannenkoek';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/\" >CountDown</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a routerLink=\"/new\" >Nieuw <span class=\"sr-only\">(current)</span></a></li>      \n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map