import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpDetailsPageRoutingModule } from './emp-details-routing.module';

import { EmpDetailsPage } from './emp-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpDetailsPageRoutingModule
  ],
  declarations: [EmpDetailsPage]
})
export class EmpDetailsPageModule {}
