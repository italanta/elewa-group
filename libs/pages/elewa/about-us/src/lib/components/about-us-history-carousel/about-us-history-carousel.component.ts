import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-about-us-history-carousel',
  templateUrl: './about-us-history-carousel.component.html',
  styleUrls: ['./about-us-history-carousel.component.scss'],
})
export class AboutUsHistoryCarouselComponent implements OnInit {

  callToActionText= `Elewa's social impact.`;

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
