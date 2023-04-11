import { Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-call-to-action-banner',
  templateUrl: './elewa-call-to-action-banner.component.html',
  styleUrls: ['./elewa-call-to-action-banner.component.scss'],
})
export class ElewaCallToActionBannerComponent implements OnInit {
  @Input() message: string;
  @Input() callToActionText: string;
  @Input()  word : string;
  @Input() url: string;


  constructor(private _router$$: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  goToLink(url: string) {
    this._router$$.navigate([url]);
  }
}
