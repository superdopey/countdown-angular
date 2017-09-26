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
var Rx_1 = require("rxjs/Rx");
var CalendarService = (function () {
    function CalendarService() {
        this.calendars = JSON.parse(window.localStorage.getItem('calendars'));
    }
    CalendarService.prototype.getCalendars = function () {
        return Rx_1.Observable.of(this.calendars); // simulate latency with delay
    };
    CalendarService.prototype.create = function (calendar) {
        if (this.calendars == null) {
            this.calendars = [];
        }
        console.log("add", this.calendars.length);
        this.calendars[this.calendars.length] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    };
    CalendarService.prototype.delete = function (calendar) {
        var index = this.calendars.indexOf(calendar);
        this.calendars.splice(index, 1);
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
    };
    return CalendarService;
}());
CalendarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CalendarService);
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map