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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.calendars = JSON.parse(window.localStorage.getItem('calendars'));
    }
    CalendarService.prototype.getCalendars = function () {
        return this.calendars;
    };
    CalendarService.prototype.getCalendar = function (id) {
        var calendar = this.calendars.find(function (x) { return x.id === id; });
        return Rx_1.Observable.of(calendar);
    };
    CalendarService.prototype.generateUID = function () {
        // generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        return ('000' + firstPart.toString(36)).slice(-3) + ('000' + secondPart.toString(36)).slice(-3);
    };
    CalendarService.prototype.create = function (calendar) {
        if (this.calendars == null) {
            this.calendars = [];
        }
        calendar.id = this.generateUID();
        this.calendars[this.calendars.length] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    };
    CalendarService.prototype.update = function (calendar) {
        var index = this.calendars.findIndex(function (x) { return x.id === calendar.id; });
        this.calendars[index] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    };
    CalendarService.prototype.delete = function (calendar) {
        var index = this.calendars.indexOf(calendar);
        this.calendars.splice(index, 1);
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
    };
    CalendarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map