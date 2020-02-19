import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpMonthlyAttPage } from './emp-monthly-att.page';

const routes: Routes = [
  {
    path: '',
    component: EmpMonthlyAttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpMonthlyAttPageRoutingModule {}
