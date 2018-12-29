import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApproveAgreePage } from '../approve-agree/approve-agree';

/**
 * Generated class for the ApproveDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approve-details',
  templateUrl: 'approve-details.html',
})
export class ApproveDetailsPage {
  public ApproveAgreePage=ApproveAgreePage;
  public details=[];
  public list=[{
    'id':'0001',
    'title':'费用报销单',
    'name':'小丽',
    'number':'审核中',
    'time':'2018-11-13',
    'detail':'活动费用报销单'
  },{
    'id':'0001',
    'title':'采购报销单',
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
  },{
    'id':'0001',
    'title':'费用报销单',
    'name':'小丽',  
    'number':'dfgdfg2343455',
    'time':'2018-11-13',
    'detail':'活动费用报销单'
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.getdetailsData();
  }  

  ionViewDidLoad(){
    this.detailEvent();
  }
  getdetailsData(){
    let that=this;
    that.details=this.list;
    console.log(that.details);
  }
  approveAgree(){
    this.navCtrl.push('ApproveAgreePage');
  } 
  detailEvent(){
    let detailsEvent=document.getElementById('details-event');
    console.log(detailsEvent)
    let detailsContent=document.getElementById('details-content');
    console.log(detailsContent)
    detailsEvent.onclick=function(){
      console.log('1243')
      if(detailsContent.style.display=="none"){
        detailsContent.style.display="block"
      }else{
        detailsContent.style.display="none"
      }
    }
  }

}
