import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Rx';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';

@Component({
    selector: 'calendar-list',
    templateUrl: './calendar-list.component.html'  
})

export class CalendarListComponent implements OnInit  {
   
    calendars: Observable<Calendar[]>;
    constructor(public calendarService: CalendarService) { }


    ngOnInit() {
        this.calendars = this.calendarService.getCalendars();
    }

    delete(calendar:Calendar){
        this.calendarService.delete(calendar);
    }
}