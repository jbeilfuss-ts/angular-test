import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  styleUrls: ['navbar.component.scss'],
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  options: Array<RouteOption> = [
    {
      displayText: 'Ngx Color',
      route: '/ngx-color'
    },
    {
      displayText: 'Color pickr',
      route: '/color-pickr'
    }
  ];
}

export interface RouteOption {
  route: string;
  displayText: string;
}
