import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-invest-detail-section',
  templateUrl: './elewa-invest-detail-section.component.html',
  styleUrls: ['./elewa-invest-detail-section.component.scss'],
})
export class ElewaInvestDetailSectionComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
