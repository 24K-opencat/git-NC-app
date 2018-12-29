import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  approve='ApprovePage';
  // dynamic = 'DynamicPage';
  // workspace = 'WorkspacePage';
  // addresslist = 'AddresslistPage';
  me = 'MePage';

  constructor(

  ) {
  }

}
