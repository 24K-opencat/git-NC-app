import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveTodoPage } from './approve-todo';
import { IonicImageLoader } from '../../../node_modules/ionic-image-loader';

@NgModule({
  declarations: [
    ApproveTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveTodoPage),
    IonicImageLoader
  ],
  exports: [
    ApproveTodoPage
  ]
})
export class ApproveTodoPageModule {}
