import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AeropressPage } from './aeropress';

@NgModule({
  declarations: [
    AeropressPage,
  ],
  imports: [
    IonicPageModule.forChild(AeropressPage),
  ],
})
export class AeropressPageModule {}
