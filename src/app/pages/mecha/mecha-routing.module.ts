import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechaPage } from './mecha.page';

const routes: Routes = [
  {
    path: '',
    component: MechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechaPageRoutingModule {}
