import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InquirePage } from '../inquire/inquire';
import { NewsPage } from '../news/news';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cardList: any = [1,2];
  publishDate: any;
  updateDate: any;
  login: any;
  constructor(
    public navCtrl: NavController,
    public loginServiceProvider: LoginServiceProvider,
    public platform: Platform
  ) {
  	this.publishDate = moment().year() + '-' + (moment().month() + 1) + '-' + moment().date();
  	this.updateDate = moment().year() + '-' + (moment().month() + 1) + '-' + moment().date();
    this.login = this.loginServiceProvider.login;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
    this.jPushHandler();
  }

  gotoInquire(data){
    this.navCtrl.push(InquirePage, data);
  }

  gotoNews(data){
  	this.navCtrl.push(NewsPage, data);
  }

  jPushHandler() {
    this.platform.ready().then(() => {
      if (this.platform.is('android') || this.platform.is('ios')) {
        this.jPushGetSetA();
        document.addEventListener("jpush.receiveNotification", (event:any)=> {
          var alertContent;
          if (this.platform.is('android')) {
            alertContent = event.alert;
          } else {
            alertContent = event.aps.alert;
          }
          console.log(alertContent);
      }, false);
      document.addEventListener("jpush.openNotification", (event?: any) => {
        var alertContent;
        if (this.platform.is('android')) {
          alertContent = event.alert;
        } else {
          alertContent = event.aps.alert;
        }
        this.navCtrl.push(NewsPage, alertContent);
      }, false);
      }
    });
  }

  jPushGetSetA() {
    let plugins = (window as any).plugins;
    plugins && plugins.jPushPlugin && plugins.jPushPlugin.setAlias('talead');
  }

}
