import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { InquirePage } from '../pages/inquire/inquire';
import { MyselfPage } from '../pages/myself/myself';
import { LoginPage } from '../pages/login/login';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { IntroductionPage } from '../pages/introduction/introduction';
import { ReportDetailPage } from '../pages/report-detail/report-detail';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProductPage,
    InquirePage,
    MyselfPage,
    LoginPage,
    ProductDetailPage,
    IntroductionPage,
    ReportDetailPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      tabsHideOnSubPages: true,
      iconMode: 'ios',
      mode: 'ios',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ProductPage,
    InquirePage,
    MyselfPage,
    LoginPage,
    ProductDetailPage,
    IntroductionPage,
    ReportDetailPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}
