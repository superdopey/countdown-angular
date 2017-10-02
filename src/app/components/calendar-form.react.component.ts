import { Component, OnInit, OnChanges } from '@angular/core';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.react.component.html',
})

export class CalendarFormReactComponent implements OnInit {
    calendar: Calendar = new Calendar();
    originalCalendar: Calendar;

    heroForm: FormGroup;

    constructor(
        private calendarService: CalendarService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.createForm();

    }

    createForm() {
        this.heroForm = this.fb.group({
            description: ['', Validators.required], // <--- the FormControl called "name"
        });
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.calendarService.getCalendar(params['id']))
            .subscribe((calendar: Calendar) => {
                if (calendar == null) {
                    this.calendar = new Calendar();
                } else {
                    this.calendar = calendar;
                    this.ngOnChanges();
                }                
            });
    }

    //update form model from data model
    ngOnChanges() {
        this.heroForm.setValue({
            description: this.calendar.description
        });
    }
    prepareSaveCalendar(): Calendar {
        const formModel = this.heroForm.value;

        return { id: this.calendar.id, description: formModel.description } as Calendar;
    }

    onSubmit() {
        this.calendar = this.prepareSaveCalendar();
        if (this.calendar.id == null) {
            this.calendarService.create(this.calendar);
        } else {
            this.calendarService.update(this.calendar);
        }

        this.ngOnChanges();
        this.router.navigate(['/']);
    }

    revert() {
        this.ngOnChanges();
    }

   

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.calendar); }
}