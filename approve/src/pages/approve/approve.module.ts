import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovePage } from './approve';
import { ApproveTodoPageModule } from '../approve-todo/approve-todo.module';
import { ApproveDonePageModule } from '../approve-done/approve-done.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PopSelectComponent } from '../../components/pop-select/pop-select';

@NgModule({
  declarations: [
    ApprovePage,
    PopSelectComponent,
  ],
  imports: [
    IonicPageModule.forChild(ApprovePage),
    ApproveTodoPageModule,
    ApproveDonePageModule,
    DirectivesModule
  ],  
  entryComponents: [
    PopSelectComponent
  ],
  exports: [
    PopSelectComponent
    ]
})
export class ApprovePageModule {}

