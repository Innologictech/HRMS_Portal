import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// page route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeComponent } from './me/me.component';
import { AttendanceComponent } from './me/attendance/attendance.component';
// import { LeaveComponent } from './me/leave/leave.component';
// import { PerformanceComponent } from './me/performance/performance.component';
// import { ExpensesComponent } from './me/expenses/expenses.component';
import { AppsComponent } from './me/apps/apps.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MeComponent,
    AttendanceComponent,
    // LeaveComponent,
    // PerformanceComponent,
    // ExpensesComponent,
    AppsComponent
  ]
})
export class PagesModule {
  
 }
