import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpDetailsPage } from './emp-details.page';

const routes: Routes = [
  {
    path: '',
    component: EmpDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpDetailsPageRoutingModule {}
