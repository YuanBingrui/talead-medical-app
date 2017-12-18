import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-myself',
  templateUrl: 'myself.html',
})
export class MyselfPage {
  login: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public loginServiceProvider: LoginServiceProvider
  ) {
    this.login = this.loginServiceProvider.login;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyselfPage');
  }

  gotoLogin() {
    if(!this.login.isLogin) {
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
  }

  logout(){
    this.loginServiceProvider.logout();
    this.login = this.loginServiceProvider.login;
  }

}
