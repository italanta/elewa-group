import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() title:string | undefined
  @Input() paragraph:string| undefined
  @Input() imgSrc:string | undefined 
  @Input() position:string | undefined
  @Input() color:string | undefined
}
