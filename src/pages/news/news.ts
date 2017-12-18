import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newsData: any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {
  	this.newsData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.clearNewsNotice();
  }

  clearNewsNotice(){
    let plugins = (window as any).plugins;
    plugins && plugins.jPushPlugin && plugins.jPushPlugin.clearAllNotification();
  }

}
