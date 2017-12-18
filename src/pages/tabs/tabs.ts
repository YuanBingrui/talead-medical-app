import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';
import { InquirePage } from '../inquire/inquire';
import { MyselfPage } from '../myself/myself';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductPage;
  tab3Root = InquirePage;
  tab4Root = MyselfPage;

  constructor() {

  }
}
