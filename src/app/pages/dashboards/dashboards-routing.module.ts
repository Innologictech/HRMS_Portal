import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { IndexComponent } from './index/index.component';
import { LearningComponent } from './learning/learning.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';
import { AttendanceComponent } from '../me/attendance/attendance.component';
import { AppsComponent } from '../me/apps/apps.component';
import { LeaveComponent } from '../me/leave/leave.component';
import { ExpensesComponent } from '../me/expenses/expenses.component';
import { PerformanceComponent } from '../me/performance/performance.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  },
  {
    path: "crm",
    component: CrmComponent
  },
  {
    path: "learning",
    component: LearningComponent
  },
  {
    path: "real-estate",
    component: RealEstateComponent
  },

  {
    path: 'up-coming-events',
    component: UpComingEventsComponent
  },

  {
    path:'attendance',
    component:AttendanceComponent
  },

  {
    path:'apps',
    component:AppsComponent
  },

  {
    path:'leave',
    component:LeaveComponent
  },

{
  path:'expenses',
  component:ExpensesComponent

},

{
path:'performance',
component:PerformanceComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
