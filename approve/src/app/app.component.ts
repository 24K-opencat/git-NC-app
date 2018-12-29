import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { StorageProvider } from '../providers/storage/storage';
import { UserProvider } from '../providers/user/user';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  loginPage = 'LoginPage';
  tabsPage = 'TabsPage';

  constructor(
    public storage: StorageProvider,
    public userProvider: UserProvider,
    public events: Events
  ) {
    this.getMe();
    this.events.subscribe('user:login', this.getMe.bind(this));
  }

  hasLogin() {
    return this.storage.get('token') ? true : false;
  }

  getMe() {
    if(this.hasLogin()) {
      this.userProvider.getMe().subscribe(
        me => {
          this.storage.set('user', JSON.stringify(me));
        }
      );
    }else {
      this.storage.remove('user');
    }
  }
}

