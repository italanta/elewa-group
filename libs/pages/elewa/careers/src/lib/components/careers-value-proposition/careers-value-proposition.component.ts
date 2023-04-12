import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-careers-value-proposition',
  templateUrl: './careers-value-proposition.component.html',
  styleUrls: ['./careers-value-proposition.component.scss'],
})
export class CareersValuePropositionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
