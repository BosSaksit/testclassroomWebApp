import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomInfoPage } from './classroom-info.page';

const routes: Routes = [
  {
    path: '',
    component: ClassroomInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassroomInfoPageRoutingModule {}
