import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApproveDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-done',
  templateUrl: 'approve-done.html',
})
export class ApproveDonePage {

  public listArr=[]
  public list=[{
    'id':'0001',
    'title':'费用报销单',
    'name':'小丽',
    'number':'dfgdfg2343455',
    'time':'2018-11-13',
    'detail':'活动费用报销单'
  },{
    'id':'0001',
    'title':'费用报销单',
    'name':'小丽',
    'number':'dfgdfg2343455',
    'time':'2018-11-13',
    'detail':'活动费用报销单'
  },{
    'id':'0001',
    'title':'费用报销单',
    'name':'小丽',
    'number':'dfgdfg2343455',
    'time':'2018-11-13',
    'detail':'活动费用报销单'
  }]
  constructor(
    public navCtrl: NavController,
  ) {
    this.getListData();
  }
  ionViewDidLoad(){
    
  }

  getListData(){
    let that=this;
    that.listArr=this.list;
  }
}
