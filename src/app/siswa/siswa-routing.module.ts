import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiswaPage } from './siswa.page';

const routes: Routes = [
  {
    path: '',
    component: SiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiswaPageRoutingModule {}
