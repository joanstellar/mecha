import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MechaPageRoutingModule } from './mecha-routing.module';

import { MechaPage } from './mecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MechaPageRoutingModule
  ],
  declarations: [MechaPage]
})
export class MechaPageModule {}
