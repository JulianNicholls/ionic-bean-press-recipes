import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AeropressPage } from '../aeropress/aeropress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  showAeropressRecipes() {
    this.navCtrl.push(AeropressPage);
  }
}
