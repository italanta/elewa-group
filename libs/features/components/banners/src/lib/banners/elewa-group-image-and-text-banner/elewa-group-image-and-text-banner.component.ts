import { Component, Input, OnInit, Output } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent implements OnInit {

  @Input() imageURL: string = '';
  @Input() paragraphTexts : string[] = [];
  @Input() titleText: string = '';
  @Input() imagePlacement: string = 'right';
  @Input() backgroundColor: string = 'grey';
  @Input() buttonText: string = '';
  @Input() url: string = '';
  @Input() showButton: boolean = false;

  ngOnInit(): void {
    AOS.init();
  }
}
