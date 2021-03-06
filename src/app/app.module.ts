import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SiteProblemPage } from '../pages/site-problem/site-problem';
import { RequestDataPage } from '../pages/request-data/request-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SiteProvider } from '../providers/site/site';
import { RequestProvider } from '../providers/request/request';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SiteProblemPage,
    RequestDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SiteProblemPage,
    RequestDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteProvider,
    RequestProvider
  ]
})
export class AppModule {}
