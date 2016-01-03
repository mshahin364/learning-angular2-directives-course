import { Component } from 'angular2/core';
import * as material from 'material';

import { HeaderCmp } from './shell/header.component';
import { SidebarCmp } from './shell/sidebar.component';
import { DashboardCmp  } from './dashboard/dashboard.component';


@Component({
  selector: 'app',
  directives: [ HeaderCmp, SidebarCmp, DashboardCmp ],
  template: `
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        </app-header>
        <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        </app-sidebar>
        <main class="mdl-layout__content mdl-color--grey-100">
            <dashboard></dashboard>
        </main>
    </div>
  `
})
export class App {
  title: string;

  constructor() {
    this.title = 'Angular 2';
  }

  ngOnInit() {

  }

}