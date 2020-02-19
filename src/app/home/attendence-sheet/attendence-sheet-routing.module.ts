import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendenceSheetPage } from './attendence-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AttendenceSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendenceSheetPageRoutingModule {}
