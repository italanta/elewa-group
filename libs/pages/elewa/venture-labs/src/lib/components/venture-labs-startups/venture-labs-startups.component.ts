import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-venture-labs-startups',
  templateUrl: './venture-labs-startups.component.html',
  styleUrls: ['./venture-labs-startups.component.scss'],
})
export class VentureLabsStartupsComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }
}
