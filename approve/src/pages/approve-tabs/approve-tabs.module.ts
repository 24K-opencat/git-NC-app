import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveTabsPage } from './approve-tabs';
import { IonicImageLoader } from '../../../node_modules/ionic-image-loader';

@NgModule({
  declarations: [
    ApproveTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveTabsPage),
    IonicImageLoader
  ],
  exports: [
    ApproveTabsPage
  ]
})
export class ApproveTabsPageModule {}
