import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberAuthPageRoutingModule } from './number-auth-routing.module';

import { NumberAuthPage } from './number-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberAuthPageRoutingModule
  ],
  declarations: [NumberAuthPage]
})
export class NumberAuthPageModule {}
