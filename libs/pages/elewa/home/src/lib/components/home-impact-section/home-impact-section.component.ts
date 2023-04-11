import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'elewa-group-home-impact-section',
  templateUrl: './home-impact-section.component.html',
  styleUrls: ['./home-impact-section.component.scss'],
})
export class HomeImpactSectionComponent implements OnInit {
  message1 = '  Learn more  ';
  message2 = 'Become an angel investor';
  light = 'light'

  ngOnInit(): void {
    AOS.init();
  }
}
