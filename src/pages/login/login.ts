import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: any = {
  	username: '',
  	password: ''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loginServiceProvider: LoginServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form){
  	if (form.valid) {
      this.loginServiceProvider.onLogin(this.login);
      this.navCtrl.setRoot(TabsPage);
    }
  }
  dismiss(){
    this.viewCtrl.dismiss('cancel');
  }
}
