import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AeropressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//---------------------------------------------------------------------------
// Recipe components

const AEROPRESS_GRINDS = ['Fine / 1 min', 'Medium / 2 min', 'Coarse / 3 min'];

const AEROPRESS_WATERS = ['15g / 250g', '15g / 200g', '30g / 200g'];

const AEROPRESS_BLOOMS = ['No Bloom', '50g 40 seconds', '100g 30 seconds'];

@IonicPage()
@Component({
  selector: 'page-aeropress',
  templateUrl: 'aeropress.html'
})
export class AeropressPage {
  grind: string;
  water: string;
  bloom: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pick(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AeropressPage');

    this.grind = this.pick(AEROPRESS_GRINDS);
    this.water = this.pick(AEROPRESS_WATERS);
    this.bloom = this.pick(AEROPRESS_BLOOMS);
  }
}
