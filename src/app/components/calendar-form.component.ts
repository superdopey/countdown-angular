import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'calendar-form',
    templateUrl: './calendar-form.component.html',
})

export class CalendarFormComponent implements OnInit {
    calendar: Calendar = new Calendar();
    originalCalendar: Calendar;
    
    constructor(
        private calendarService: CalendarService,
        private router: Router,
        private route: ActivatedRoute,
        private applicationRef: ApplicationRef
    ) {}

    onSubmit() {
        if (this.calendar.id == null) {
            this.calendarService.create(this.calendar);
        } else {
            this.calendarService.update(this.calendar);
        }

        //this.applicationRef.tick();
        this.router.navigate(['/']);
    }

    revert(){
        this.calendar = this.originalCalendar;
        //this.applicationRef.tick();        
        this.router.navigate(['/']);
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) =>  this.calendarService.getCalendar(params['id']))
            .subscribe((calendar: Calendar) => {
                if (calendar == null) {
                    this.calendar = new Calendar();
                } else{
                    this.calendar = calendar;
                }
                

                //create deepcopy
                this.originalCalendar = Object.assign({}, this.calendar);
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.calendar); }
}