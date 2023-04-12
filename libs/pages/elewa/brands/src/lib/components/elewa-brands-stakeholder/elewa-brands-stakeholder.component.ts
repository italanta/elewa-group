import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-brands-stakeholder',
  templateUrl: './elewa-brands-stakeholder.component.html',
  styleUrls: ['./elewa-brands-stakeholder.component.scss'],
})
export class ElewaBrandsStakeholderComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }
}
