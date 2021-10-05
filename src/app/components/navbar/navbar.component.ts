import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // predefined routes
  links = [
    {
      route: 'timer',
      icon: 'hourglass_empty'
    },
    {
      route: 'stopwatch',
      icon: 'timer'
    }
  ];

  // current route variable
  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        // get current route after redirect.
        this.activeLink = event.urlAfterRedirects.split('/')[1];
      }
    });
  }
}
