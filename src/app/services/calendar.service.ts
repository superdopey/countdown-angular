import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CalendarService {

    calendars: Calendar[];
    constructor() {
        this.calendars = JSON.parse(window.localStorage.getItem('calendars'));
    }


    getCalendars(): Observable<Calendar[]> {
        return Observable.of(this.calendars); // simulate latency with delay
    }


    create(calendar: Calendar): Calendar {
        if (this.calendars == null) {
            this.calendars = [];
        }


        console.log("add", this.calendars.length);
        this.calendars[this.calendars.length] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    }

    delete(calendar: Calendar) {
        let index = this.calendars.indexOf(calendar);
        this.calendars.splice(index, 1);
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
    }
}