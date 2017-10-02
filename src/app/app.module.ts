import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarService } from './services/calendar.service';
//import { CalendarFormComponent } from './components/calendar-form.component';
import { CalendarFormReactComponent } from './components/calendar-form.react.component';
import { CalendarListComponent } from './components/calendar-list.component';
import { ConfirmDeleteCountDownDialog } from './components/confirm-delete-countdown-dialog';

import { MdButtonModule, MdCheckboxModule,  MatDialogModule, MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'new', component: CalendarFormReactComponent },
  { path: 'edit/:id', component: CalendarFormReactComponent },
  { path: 'list', component: CalendarListComponent },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
  /*{ path: 'calendar/:id',      component: CalendarFormComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }  */
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes //, { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,    
    MatDialogModule,
    MdDatepickerModule,
    MdNativeDateModule
    ],

  declarations: [AppComponent,
     CalendarListComponent,
      CalendarFormReactComponent
    , ConfirmDeleteCountDownDialog],
    entryComponents: [ ConfirmDeleteCountDownDialog, ],
  bootstrap: [AppComponent],
  providers: [CalendarService]
})
export class AppModule { }
