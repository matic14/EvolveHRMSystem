import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendenceSheetPageRoutingModule } from './attendence-sheet-routing.module';

import { AttendenceSheetPage } from './attendence-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendenceSheetPageRoutingModule
  ],
  declarations: [AttendenceSheetPage]
})
export class AttendenceSheetPageModule {}
