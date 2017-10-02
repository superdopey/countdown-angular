import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CalendarService {

    calendars: Calendar[];
    constructor() {
        this.calendars = JSON.parse(window.localStorage.getItem('calendars'));
    }

    getCalendars(){
        return this.calendars;
    }

    getCalendar(id: string): Observable<Calendar> {
       let calendar: Calendar = this.calendars.find(x => x.id === id);
       return Observable.of(calendar);
    }

    private generateUID() :string {
        // generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        let firstPart: number = (Math.random() * 46656) | 0;
        let secondPart: number  = (Math.random() * 46656) | 0;        
        return ('000' + firstPart.toString(36)).slice(-3) + ('000' + secondPart.toString(36)).slice(-3);
    }

    create(calendar: Calendar): Calendar {
        if (this.calendars == null) {
            this.calendars = [];
        }
        calendar.id = this.generateUID();
        this.calendars[this.calendars.length] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    }

    update(calendar: Calendar): Calendar {
        let index = this.calendars.findIndex(x => x.id === calendar.id);
        this.calendars[index] = calendar;
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
        return calendar;
    }

    delete(calendar: Calendar) {
        let index = this.calendars.indexOf(calendar);
        this.calendars.splice(index, 1);
        window.localStorage.setItem('calendars', JSON.stringify(this.calendars));
    }


}