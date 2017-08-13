import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav>
      <a [routerLink]="['/routes-children/component-one']">Component One</a>
      <a [routerLink]="['/routes-children/component-two', 123]">Component Two (id: 123)</a>
    </nav>
    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid green; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class RoutesChildrenComponent {
}
