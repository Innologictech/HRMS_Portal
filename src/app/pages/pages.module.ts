import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
 
// page route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// import { LeaveComponent } from './me/leave/leave.component';
// import { PerformanceComponent } from './me/performance/performance.component';
// import { ExpensesComponent } from './me/expenses/expenses.component';
import { RouterModule } from '@angular/router';
 
 
@NgModule({
  declarations: [
  ],
 
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
   

  ]
})
export class PagesModule {
 
 }