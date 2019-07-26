import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: string[] = [
    'Proj1', 'Proj2', 'Proj3', 'Proj4', 'Proj5', 'Proj6', 'Proj7'
  ];
  images = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() {
   }

  ngOnInit() {
  }

}
