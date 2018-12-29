import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproveDonePage } from './approve-done';
import { IonicImageLoader } from '../../../node_modules/ionic-image-loader';

@NgModule({
  declarations: [
    ApproveDonePage,
  ],
  imports: [
    IonicPageModule.forChild(ApproveDonePage),
    IonicImageLoader
  ],
  exports: [
    ApproveDonePage
  ]
})
export class ApproveDonePageModule {}
