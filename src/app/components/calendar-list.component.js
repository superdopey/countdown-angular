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
var router_1 = require("@angular/router");
var calendar_service_1 = require("../services/calendar.service");
var material_1 = require("@angular/material");
var confirm_delete_countdown_dialog_1 = require("./confirm-delete-countdown-dialog");
var CalendarListComponent = /** @class */ (function () {
    function CalendarListComponent(calendarService, router, dialog) {
        this.calendarService = calendarService;
        this.router = router;
        this.dialog = dialog;
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        this.calendars = this.calendarService.getCalendars();
        //console.log(this.calendars);
    };
    CalendarListComponent.prototype.confirmDelete = function (calendar) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_delete_countdown_dialog_1.ConfirmDeleteCountDownDialog, {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.calendarService.delete(calendar);
            }
            // console.log('The dialog was closed', result);
        });
    };
    CalendarListComponent.prototype.edit = function (calendar) {
        this.router.navigate(['/edit', calendar.id]);
    };
    CalendarListComponent = __decorate([
        core_1.Component({
            selector: 'calendar-list',
            templateUrl: './calendar-list.component.html'
        }),
        __metadata("design:paramtypes", [calendar_service_1.CalendarService,
            router_1.Router, material_1.MdDialog])
    ], CalendarListComponent);
    return CalendarListComponent;
}());
exports.CalendarListComponent = CalendarListComponent;
//# sourceMappingURL=calendar-list.component.js.map