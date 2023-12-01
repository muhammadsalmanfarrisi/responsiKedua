import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiswaPageRoutingModule } from './siswa-routing.module';

import { SiswaPage } from './siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiswaPageRoutingModule
  ],
  declarations: [SiswaPage]
})
export class SiswaPageModule {}
