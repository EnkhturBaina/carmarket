import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberAuthPage } from './number-auth.page';

const routes: Routes = [
  {
    path: '',
    component: NumberAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberAuthPageRoutingModule {}
