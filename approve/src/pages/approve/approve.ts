import { Component, ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,AlertController} from 'ionic-angular';
import { PopSelectComponent } from '../../components/pop-select/pop-select';

@IonicPage()
@Component({
  selector: 'page-approve',
  templateUrl: 'approve.html',
})
export class ApprovePage {
  type = '1';//类型
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController
  ) {
    this.getListData();
  }
  ionViewDidLoad(){
    
  }

  goDynamicSearch() {
    this.navCtrl.push('DynamicSearchPage');
  }

  goDynamicCreate(){
    this.navCtrl.push('DailyCreatePage');
  }

  getListData(){
    // let that=this;
    // that.listArr=this.list;
    // console.log(that.listArr)
  }

  switch(event) {
    let popover = this.popoverCtrl.create(PopSelectComponent, {
      buttons: [
        {
          text: 'NC',
          handler: () => {
            popover.dismiss();
          }
        }, {
          text: '金蝶',
          handler: () => {
            popover.dismiss();
          }
        },
        {
          text: '范威',
          handler: () => {
            popover.dismiss();
          }
        }
      
      ]
    }, {
      cssClass: 'mini'
    });
    popover.present({
      ev: event
    });
  }
}
