import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { IntroductionPage } from '../introduction/introduction';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  productList: any = [
    { data: { index: 'breathe15', value: '呼吸道15连检' }, IconName: 'breathe15Icon' },
    { data: { index: 'Influenza', value: '禽流感类' }, IconName: 'InfluenzaIcon' },
    { data: { index: 'breatheTrack', value: '发热呼吸道类' }, IconName: 'breatheTrackIcon' },
    { data: { index: 'bacterial', value: '食源性细菌类' }, IconName: 'bacterialIcon' },
    { data: { index: 'virus', value: '食源性病毒类' }, IconName: 'virusIcon' },
    { data: { index: 'diarrhea', value: '腹泻类' }, IconName: 'diarrheaIcon' }
  ];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  gotoIntroduction(){
    this.navCtrl.push(IntroductionPage);
  }

  gotoProductDetail(data){
    this.navCtrl.push(ProductDetailPage, data);
  }

}
