import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassroomInfoPageRoutingModule } from './classroom-info-routing.module';

import { ClassroomInfoPage } from './classroom-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassroomInfoPageRoutingModule
  ],
  declarations: [ClassroomInfoPage]
})
export class ClassroomInfoPageModule {}
