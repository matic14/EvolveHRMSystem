import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalEmpPageRoutingModule } from './total-emp-routing.module';

import { TotalEmpPage } from './total-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalEmpPageRoutingModule
  ],
  declarations: [TotalEmpPage]
})
export class TotalEmpPageModule {}
