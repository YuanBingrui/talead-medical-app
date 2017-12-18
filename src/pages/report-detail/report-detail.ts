import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-report-detail',
  templateUrl: 'report-detail.html',
})
export class ReportDetailPage {
  data: any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {
  	this.data = this.navParams.data;
  	this.data.iconName = this.data.iconName.replace(0,'');
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

  initReportInfo(){

  }

}
