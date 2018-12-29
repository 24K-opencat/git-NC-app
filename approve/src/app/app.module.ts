import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';


import { DynamicSearchPageModule } from '../pages/dynamic-search/dynamic-search.module';


import { ImageUtilProvider } from '../providers/image-util/image-util';//拍照

import { HttpProvider } from '../providers/http/http';
import { HttpInterceptorProvider } from '../providers/http-interceptor/http-interceptor';
import { StorageProvider } from '../providers/storage/storage';
import { UserProvider } from '../providers/user/user';


import { DateUtilProvider } from '../providers/date-util/date-util';


import * as Test from '../test/mock';
Test;
import * as VConsole from 'vconsole';
import { ApproveProvider } from '../providers/approve/approve';//审批流程服务

// 待办列表详情页面
import { ApproveDetailsPage } from '../pages/approve-details/approve-details';
// 底部页面
import { ApproveTabsPage } from '../pages/approve-tabs/approve-tabs';
new VConsole();

@NgModule({
  declarations: [
    MyApp,
    ApproveDetailsPage,
    ApproveTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    IonicImageLoader.forRoot(),
    HttpClientModule,
    DynamicSearchPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ApproveDetailsPage,
    ApproveTabsPage
  ],
  providers: [
    File,
    Camera,
    ImagePicker,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorProvider, multi: true},
    HttpProvider,
    StorageProvider,
    UserProvider,
    DateUtilProvider,
    ImageUtilProvider,
    ApproveProvider,
    ApproveProvider
  ]
})
export class AppModule {

}
