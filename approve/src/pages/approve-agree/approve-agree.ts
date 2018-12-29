import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';

/**
 * Generated class for the ApproveAgreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-agree',
  templateUrl: 'approve-agree.html',
})
export class ApproveAgreePage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl:AlertController
     ) {
  }

  ionViewDidLoad() {
 
  }
  approveAgreeAffirm(){
    let alert = this.alertCtrl.create({
      message: '提交成功',
      buttons: [
        {
          text: '确认'
        }
      ]
    });
    alert.present();
  }

}
