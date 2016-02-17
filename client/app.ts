import {ViewEncapsulation, Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router, RouteConfig, Location} from 'angular2/router';
 
import {AppComponent} from './components/AppComponent';
 
@Component({
  moduleId: module.id,
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <h1>This is Root Component</h1>
    <router-outlet></router-outlet>
  `,
  directives: [
    CORE_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  { path: '/home', name: 'AppComponent', component: AppComponent, useAsDefault: true }
])

export class App {
 
  router: Router;
  location: Location;
 
  constructor(router: Router, location: Location) {
    console.log('app.ts');
    this.router = router;
    this.location = location;
  }
}
