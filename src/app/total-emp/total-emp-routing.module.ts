import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalEmpPage } from './total-emp.page';

const routes: Routes = [
  {
    path: '',
    component: TotalEmpPage
  },
  {
    path: 'emp-details',
    loadChildren: () => import('./emp-details/emp-details.module').then( m => m.EmpDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalEmpPageRoutingModule {}
