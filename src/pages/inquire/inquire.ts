import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ReportDetailPage } from '../report-detail/report-detail';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { LoginPage } from '../login/login';
import * as moment from 'moment';

@Component({
  selector: 'page-inquire',
  templateUrl: 'inquire.html',
})
export class InquirePage {
  login: any;
  reportList: any = [
    { id: '1', iconName: 'report01', isSelected: false, date: moment().year() + '-' + (moment().month() + 1) + '-' + moment().date() },
    { id: '2', iconName: 'report02', isSelected: false, date: moment().year() + '-' + moment().month() + '-' + moment().date() },
    { id: '3', iconName: 'report03', isSelected: false, date: moment().year() + '-' + (moment().month() - 1) + '-' + moment().date() },
    { id: '4', iconName: 'report01', isSelected: false, date: moment().year() + '-' + (moment().month() - 3) + '-' + moment().date() },
    { id: '5', iconName: 'report02', isSelected: false, date: moment().year() + '-' + (moment().month() - 1) + '-' + (moment().date() + 2) }
  ];
  isSelectedReport: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loginServiceProvider: LoginServiceProvider
  ) {
    this.login = this.loginServiceProvider.login;
    this.showMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InquirePage');
  }

  gotoreportDetail(report) {
  	this.navCtrl.push(ReportDetailPage, report);	
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  showMessage(){
    if(!this.login.isLogin){
      let alert = this.alertCtrl.create({
        title: '您还未登录，请登录查看。如果还未注册，赶紧来注册吧！',
        buttons: ['取消']
      });
      alert.addButton({
        text: '确认',
        handler: () => {
          let modal = this.modalCtrl.create(LoginPage);
          modal.present();
        }
      });
      alert.present();
    } 
  }

}
