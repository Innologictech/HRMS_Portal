import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MeComponent } from './me.component';

import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { PerformanceComponent } from './performance/performance.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AppsComponent } from './apps/apps.component';
import { AssetComponent } from './asset/asset.component';
import { ResignationComponent } from './resignation/resignation.component';
import { MyLettersComponent } from './my-letters/my-letters.component';

const routes: Routes = [
  {
    path: '',
    // component: MeComponent,
    children: [
      { path: '', redirectTo: 'attendance', pathMatch: 'full' },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'employee-leaves', component: EmployeeLeavesComponent },
      { path: 'performance', component: PerformanceComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'apps', component: AppsComponent },
      { path: 'asset', component: AssetComponent },
      { path: 'resignation', component: ResignationComponent },
      { path: 'my-letters', component: MyLettersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule {}
