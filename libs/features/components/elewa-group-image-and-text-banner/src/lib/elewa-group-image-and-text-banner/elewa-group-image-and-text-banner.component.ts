import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() imagePlacement: string
  @Input() title: string
  @Input() imageUrl: string
  @Input() paragraphText: string
}
