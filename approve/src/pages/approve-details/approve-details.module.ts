import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveDetailsPage } from './approve-details';
import { IonicImageLoader } from '../../../node_modules/ionic-image-loader';

@NgModule({
  declarations: [
    ApproveDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveDetailsPage),
    IonicImageLoader
  ],
  exports: [
    ApproveDetailsPage
  ]
})
export class ApproveDetailsPageModule {}
