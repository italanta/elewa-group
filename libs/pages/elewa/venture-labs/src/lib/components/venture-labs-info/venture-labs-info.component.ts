import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-venture-labs-info',
  templateUrl: './venture-labs-info.component.html',
  styleUrls: ['./venture-labs-info.component.scss'],
})
export class VentureLabsInfoComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }
}
