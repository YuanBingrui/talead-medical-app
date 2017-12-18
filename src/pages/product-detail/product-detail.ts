import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  title: any
  index: any;
  productList: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.index = this.navParams.data.index;
    this.title = this.navParams.data.value;
  }

  ionViewDidLoad() {
    console.log(this.index);
    this.initProductList(this.index);
  }

  initProductList(index) {
    switch (index)
    {
      case "breathe15":
        this.productList = [ 
          { index: '1', name: '人副流感病毒1型RNA检测试剂盒' },
          { index: '2', name: '人副流感病毒2型RNA检测试剂盒' },
          { index: '3', name: '人副流感病毒3型/4型RNA检测试剂盒' },
          { index: '4', name: '冠状病毒229E型/NL63型检测试剂盒' },
          { index: '5', name: '冠状病毒OC43型/HKU1型检测试剂盒' },
          { index: '6', name: '人腺病毒检测试剂盒' },
          { index: '7', name: '人博卡病毒检测试剂盒' },
          { index: '8', name: '人偏肺病毒RNA检测试剂盒' },
          { index: '9', name: '人鼻病毒/人肠病毒RNA检测试剂盒' },
          { index: '10', name: '甲型流感病毒H1亚型RNA检测试剂盒' },
          { index: '11', name: '甲型流感病毒H1N1(2009)亚型检测试剂盒' },
          { index: '12', name: '甲型流感病毒H3亚型RNA检测试剂盒' },
          { index: '13', name: '甲型流感病毒RNA检测试剂盒' },
          { index: '14', name: '乙型流感病毒RNA检测试剂盒' },
          { index: '15', name: '呼吸道合胞病毒A/B型检测试剂盒' }
        ];
      break;
      case "Influenza":
        this.productList = [ 
          { index: '1', name: '禽流感病毒H7通用/HPAI-H7亚型RNA检测试剂盒' },
          { index: '2', name: '禽流感病毒H7通用/HPAI-H7/N9亚型RNA检测试剂盒' },
          { index: '3', name: '禽流感病毒HPAI-H7亚型RNA检测试剂盒' },
          { index: '4', name: '禽流感病毒H7N9型RNA检测试剂盒' }
        ];
      break;
      case "breatheTrack":
        this.productList = [ 
          { index: '1', name: '甲型/乙型流感病毒RNA检测试剂盒（荧光PCR法）' },
          { index: '2', name: '季节性流感病毒H1/H3型RNA检测试剂盒' },
          { index: '3', name: '禽流感病毒H7N9型RNA检测试剂盒' },
          { index: '4', name: '禽流感病毒H5/H7/H9亚型RNA检测试剂盒' }
        ];
      break;
      case "bacterial":
        this.productList = [ 
          { index: '1', name: '大肠杆菌0157：H7检测试剂盒' },
          { index: '2', name: '金黄色葡萄球菌及其毒素检测试剂盒' },
          { index: '3', name: '志贺氏菌检测试剂盒' },
          { index: '4', name: '沙门氏菌检测试剂盒' },
          { index: '5', name: '副溶血弧菌检测试剂盒' },
          { index: '6', name: '单增李斯特菌检测试剂盒' }
        ];
      break;
      case "virus":
        this.productList = [ 
          { index: '1', name: '诺如病毒GI 检测试剂盒' },
          { index: '2', name: '诺如病毒GII 检测试剂盒' },
          { index: '3', name: '轮状病毒检测试剂盒' },
          { index: '4', name: '腺病毒 检测试剂盒' },
          { index: '5', name: '星状病毒 检测试剂盒' },
          { index: '6', name: '札如病毒检测试剂盒' }
        ];
      break;
      case "diarrhea":
        this.productList = [ 
          { index: '1', name: '副溶血弧菌DNA检测试剂盒' },
          { index: '2', name: '诺如病毒GI/GII型RNA检测试剂盒' },
          { index: '3', name: '沙门氏菌DNA检测试剂盒' },
          { index: '4', name: '志贺氏菌DNA检测试剂盒' },
          { index: '5', name: '金黄色葡萄球菌DNA检测试剂盒' },
          { index: '6', name: '星状病毒RNA检测试剂盒' },
          { index: '7', name: '轮状病毒A组RNA检测试剂盒' },
          { index: '8', name: '大肠杆菌（O157：H7）核酸检测试剂盒' },
          { index: '9', name: '致病性大肠杆菌（EPEC）核酸检测试剂盒' },
          { index: '10', name: '蜡样芽孢杆菌DNA检测试剂盒' },
          { index: '11', name: '单核细胞增生李斯特菌核酸检测试剂盒' }
        ];
      break;
    }
  }

}
