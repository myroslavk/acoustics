import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  services = [{
      name: 'Acoustics',
      description: 'Loorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus enim elementum eleifend ullamcorperrem',
      image: '../assets/124116.svg'
    },  {
      name: 'Vibration',
      description: 'Loorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus enim elementum eleifend ullamcorperrem',
      image: '../assets/124126.svg'
    }, {
      name: 'Continuous Laboratory Monitoring',
      description: 'Loorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus enim elementum eleifend ullamcorperrem',
      image: '../assets/124139.svg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
