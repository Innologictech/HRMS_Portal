import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { AttendanceComponent } from './me/attendance/attendance.component';
import { LeaveComponent } from './me/leave/leave.component';
import { PerformanceComponent } from './me/performance/performance.component';
import { ExpensesComponent } from './me/expenses/expenses.component';
import { AppsComponent } from './me/apps/apps.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  },
  {
    path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule)
  },
  {
    path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'advance-ui', loadChildren: () => import('./advanceui/advanceui.module').then(m => m.AdvanceuiModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'real-estate', loadChildren: () => import('./real-estate/real-estate.module').then(m => m.RealEstateModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'tables', loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'custom-ui', loadChildren: () => import('./custom-ui/custom-ui.module').then(m => m.CustomUiModule)
  },
  {
    path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)
  },

  

  {
  path: 'me',
  loadComponent: () => import('./me/me.component').then(c => c.MeComponent),
  children: [
    {
      path: 'attendance',
      loadComponent: () => import('./me/attendance/attendance.component')
        .then(c => c.AttendanceComponent)
    },
    {
      path: 'leave',
      loadComponent: () => import('./me/leave/leave.component')
        .then(c => c.LeaveComponent)
    },
    {
      path: 'performance',
      loadComponent: () => import('./me/performance/performance.component')
        .then(c => c.PerformanceComponent)
    },
    {
      path: 'expenses',
      loadComponent: () => import('./me/expenses/expenses.component')
        .then(c => c.ExpensesComponent)
    },
    {
      path: 'apps',
      loadComponent: () => import('./me/apps/apps.component')
        .then(c => c.AppsComponent)
    },
    { path: '', redirectTo: 'attendance', pathMatch: 'full' }
  ]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
