import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-careers-hero',
  templateUrl: './careers-hero.component.html',
  styleUrls: ['./careers-hero.component.scss'],
})
export class CareersHeroComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
