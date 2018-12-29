import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveAgreePage } from './approve-agree';
import { IonicImageLoader } from '../../../node_modules/ionic-image-loader';

@NgModule({
  declarations: [
    ApproveAgreePage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveAgreePage),
    IonicImageLoader
  ],
  exports: [
    ApproveAgreePage
  ]
})
export class ApproveAgreePageModule {}
