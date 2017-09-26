import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { Router } from '@angular/router';


@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.component.html',    
})

export class CalendarFormComponent implements OnInit {
    calendar: Calendar;
    constructor(private calendarService: CalendarService,private router: Router , private applicationRef: ApplicationRef) {
        if (this.calendar == null) {
            this.calendar = new Calendar();
        }
    }

    onSubmit() {
        this.calendarService.create(this.calendar);
        this.applicationRef.tick();
        this.router.navigate(['/']);
        
    }

    ngOnInit() { }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.calendar); }
}