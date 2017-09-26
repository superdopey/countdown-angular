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
var calendar_service_1 = require("../services/calendar.service");
var CalendarListComponent = (function () {
    function CalendarListComponent(calendarService) {
        this.calendarService = calendarService;
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        this.calendars = this.calendarService.getCalendars();
    };
    CalendarListComponent.prototype.delete = function (calendar) {
        this.calendarService.delete(calendar);
    };
    return CalendarListComponent;
}());
CalendarListComponent = __decorate([
    core_1.Component({
        selector: 'calendar-list',
        templateUrl: './calendar-list.component.html'
    }),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], CalendarListComponent);
exports.CalendarListComponent = CalendarListComponent;
//# sourceMappingURL=calendar-list.component.js.map