import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { IndexComponent } from './index/index.component';
import { LearningComponent } from './learning/learning.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SummaryComponent } from './my-team/summary/summary.component';
import { LeaveComponent } from './my-team/leave/leave.component';
import { MyPayComponent } from './home/dashboard/my-finances/my-pay/my-pay.component';
import { ManageTaskComponent } from './home/dashboard/my-finances/manage-task/manage-task.component';
import { PayRollSummaryComponent } from './home/dashboard/my-finances/pay-roll-summary/pay-roll-summary.component';
import { EmployeesComponent } from './home/dashboard/org/employees/employees.component';
import { DocumentsComponent } from './home/dashboard/org/documents/documents.component';
import { EngageComponent } from './home/dashboard/org/engage/engage.component';
import { InboxComponent } from './inbox/inbox.component';
import { TakeactionsComponent } from './inbox/takeactions/takeactions.component';
import { NotificationsComponent } from './inbox/notifications/notifications.component';
import { ArchiveComponent } from './inbox/archive/archive.component';


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
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  path: 'welcome',
    component: WelcomeComponent
  },
   {
  path: 'summary',
    component: SummaryComponent
  },
   {
  path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'payRollSummary',
    component: PayRollSummaryComponent
  },
    {
    path: 'myPay',
    component: MyPayComponent
  },
    {
    path: 'manageTask',
    component: ManageTaskComponent
  },
   {
    path: 'employee',
    component: EmployeesComponent
  },
   {
    path: 'documents',
    component: DocumentsComponent
  },
    {
    path: 'engage',
    component: EngageComponent
  },
   { path: 'inbox', component: InboxComponent} ,
     { path: 'takeactions', component: TakeactionsComponent},
    { path: 'notifications', component: NotificationsComponent },
    { path: 'archive', component: ArchiveComponent },

   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
