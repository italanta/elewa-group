import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-call-to-action-banner',
  templateUrl: './elewa-call-to-action-banner.component.html',
  styleUrls: ['./elewa-call-to-action-banner.component.scss'],
})
export class ElewaCallToActionBannerComponent {
  acceptable_text_align = ["center","left","right","justified"]
  @Input() message:string
  @Input() callToAction:string
  @Input() textAlign:string
  @Input() destinationUrl:string
  @Input() callToActionIntro:string
}
