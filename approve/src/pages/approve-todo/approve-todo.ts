import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApproveDetailsPage } from '../approve-details/approve-details';
import { ApproveProvider } from '../../providers/approve/approve';//请求数据

@IonicPage()
@Component({
  selector: 'page-approve-todo',
  templateUrl: 'approve-todo.html',
})
export class ApproveTodoPage {
  public ApproveDetailsPage=ApproveDetailsPage;
  type = '1';
  public listArr=[];
  public todoList=[];
  constructor(
    public navCtrl: NavController,
    public ApproveProvider:ApproveProvider
  ) {
    this.getTodoList();
  }
  ionViewDidLoad(){
    
  }
  // 待办列表获取数据
  getTodoList() {
    let that=this;
    this.ApproveProvider.getTodoList({}).subscribe(
      (data) => {
        console.log(data)
        that.todoList=data;
        console.log(that.todoList);
      }
    );
  }
  //跳转至审核详情页
  goDetails(){
    this.navCtrl.push(ApproveDetailsPage)
  }
}
