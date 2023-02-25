import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() imageURL = '';
  @Input() paragraphTexts : string[] = [];
  @Input() titleText = '';
  @Input() imagePlacement = 'right';
  @Input() backgroundColor = 'grey';
  @Input() buttonText = '';
  @Input() url = '';
  @Input() showButton = false;
}
