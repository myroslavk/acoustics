import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    collapse = false;
    navItems = [
      {
        name: 'Home'
      },
      {
        name: 'About'
      },
      {
        name: 'Services'
      },
      {
        name: 'Projects'
      },
      {
        name: 'News'
      },
      {
        name: 'Contact'
      }
    ];
  onClick() {
      this.collapse = !this.collapse;
  }
}
