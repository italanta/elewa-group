import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.scss'],
})
export class ContactBannerComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
