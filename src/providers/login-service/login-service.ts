import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {
  login: any = {
  	username: '',
  	password: '',
  	isLogin: false
  };
  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  onLogin(userInfo){
  	this.login.username = userInfo.username;
  	this.login.password = userInfo.password;
  	this.login.isLogin = true;
  }

  logout() {
    this.login.username = '';
    this.login.password = '';
    this.login.isLogin = false;
  }

}
