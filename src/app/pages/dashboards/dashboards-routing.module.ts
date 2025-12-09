import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { IndexComponent } from './index/index.component';
import { LearningComponent } from './learning/learning.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';


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
  }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
