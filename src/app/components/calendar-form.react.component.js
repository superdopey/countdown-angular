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
var calendar_1 = require("../models/calendar");
var calendar_service_1 = require("../services/calendar.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/switchMap");
var CalendarFormReactComponent = /** @class */ (function () {
    function CalendarFormReactComponent(calendarService, router, route, fb) {
        this.calendarService = calendarService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.calendar = new calendar_1.Calendar();
        this.createForm();
    }
    CalendarFormReactComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            description: ['', forms_1.Validators.required],
        });
    };
    CalendarFormReactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.calendarService.getCalendar(params['id']); })
            .subscribe(function (calendar) {
            if (calendar == null) {
                _this.calendar = new calendar_1.Calendar();
            }
            else {
                _this.calendar = calendar;
                _this.ngOnChanges();
            }
        });
    };
    //update form model from data model
    CalendarFormReactComponent.prototype.ngOnChanges = function () {
        this.heroForm.setValue({
            description: this.calendar.description
        });
    };
    CalendarFormReactComponent.prototype.prepareSaveCalendar = function () {
        var formModel = this.heroForm.value;
        return { id: this.calendar.id, description: formModel.description };
    };
    CalendarFormReactComponent.prototype.onSubmit = function () {
        this.calendar = this.prepareSaveCalendar();
        if (this.calendar.id == null) {
            this.calendarService.create(this.calendar);
        }
        else {
            this.calendarService.update(this.calendar);
        }
        this.ngOnChanges();
        this.router.navigate(['/']);
    };
    CalendarFormReactComponent.prototype.revert = function () {
        this.ngOnChanges();
    };
    Object.defineProperty(CalendarFormReactComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.calendar); },
        enumerable: true,
        configurable: true
    });
    CalendarFormReactComponent = __decorate([
        core_1.Component({
            selector: 'calendar-form',
            templateUrl: './calendar-form.react.component.html',
        }),
        __metadata("design:paramtypes", [calendar_service_1.CalendarService,
            router_1.Router,
            router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], CalendarFormReactComponent);
    return CalendarFormReactComponent;
}());
exports.CalendarFormReactComponent = CalendarFormReactComponent;
//# sourceMappingURL=calendar-form.react.component.js.map