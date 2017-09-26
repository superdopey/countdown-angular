"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var calendar_1 = require("../models/calendar");
var calendar_service_1 = require("../services/calendar.service");
var router_1 = require("@angular/router");
var CalendarFormComponent = (function () {
    function CalendarFormComponent(calendarService, router, applicationRef) {
        this.calendarService = calendarService;
        this.router = router;
        this.applicationRef = applicationRef;
        if (this.calendar == null) {
            this.calendar = new calendar_1.Calendar();
        }
    }
    CalendarFormComponent.prototype.onSubmit = function () {
        this.calendarService.create(this.calendar);
        this.applicationRef.tick();
        this.router.navigate(['/']);
    };
    CalendarFormComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(CalendarFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.calendar); },
        enumerable: true,
        configurable: true
    });
    return CalendarFormComponent;
}());
CalendarFormComponent = __decorate([
    core_1.Component({
        selector: 'calendar-form',
        templateUrl: './calendar-form.component.html',
    }),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService, router_1.Router, core_1.ApplicationRef])
], CalendarFormComponent);
exports.CalendarFormComponent = CalendarFormComponent;
//# sourceMappingURL=calendar-form.component.js.map