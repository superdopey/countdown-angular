import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../models/calendar';
import { CalendarService } from '../services/calendar.service';
import { MdDialog } from '@angular/material';
import { ConfirmDeleteCountDownDialog } from './confirm-delete-countdown-dialog';

@Component({
    selector: 'calendar-list',
    templateUrl: './calendar-list.component.html'
})

export class CalendarListComponent implements OnInit {
    calendars: Calendar[];
    constructor(public calendarService: CalendarService, 
        private router: Router, public dialog: MdDialog) { }

    ngOnInit() {
        this.calendars = this.calendarService.getCalendars();
        //console.log(this.calendars);
    }

    delete(calendar: Calendar) {        
        this.calendarService.delete(calendar);
    }

    confirmDelete(calendar: Calendar){
        let dialogRef = this.dialog.open(ConfirmDeleteCountDownDialog, {
            width: '250px',
            data: {  }
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
          });
    }

    edit(calendar: Calendar) {
        this.router.navigate(['/edit', calendar.id]);
    }
}


