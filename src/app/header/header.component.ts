import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerItems: Array<{name: string, type: string}> = [ {
    name: 'Home',
    type: '',
  }, {
    name: 'About',
    type: 'dropdown',
  }, {
    name: 'Service',
    type: 'dropdown',
  }, {
    name: 'Projects',
    type: '',
  }, {
    name: 'News',
    type: 'dropdown',
  }, {
    name: 'Contact',
    type: 'dropdown',
  }, {
    name: 'Discover Moment',
    type: '',
  },
  ];
}
