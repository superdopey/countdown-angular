import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { CalendarService } from './services/calendar.service';
import { CalendarFormComponent} from './components/calendar-form.component';
import { CalendarListComponent} from './components/calendar-list.component';

const appRoutes: Routes = [
  { path: 'new', component: CalendarFormComponent },
  /*{ path: 'calendar/:id',      component: CalendarFormComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }  */
];

@NgModule({
  imports:      [  RouterModule.forRoot(
                    appRoutes //, { enableTracing: true } // <-- debugging purposes only
                  ),
                  BrowserModule, RouterModule, FormsModule,  HttpModule, JsonpModule ],
  declarations: [ AppComponent,CalendarFormComponent, CalendarListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CalendarService]
})
export class AppModule { }
