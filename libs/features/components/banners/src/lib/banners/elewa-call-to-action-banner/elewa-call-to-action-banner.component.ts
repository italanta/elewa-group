import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-call-to-action-banner',
  templateUrl: './elewa-call-to-action-banner.component.html',
  styleUrls: ['./elewa-call-to-action-banner.component.scss'],
})
export class ElewaCallToActionBannerComponent {
  @Input() message:string
  @Input() callToAction:string
  @Input() textAlign:string
  @Input() destinationUrl:string
  @Input() callToActionIntro:string
}
