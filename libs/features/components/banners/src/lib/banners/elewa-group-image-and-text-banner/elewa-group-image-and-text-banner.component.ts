import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
  @Input() title:string = ""
  @Input() paragraph:string = ""
  @Input() imgSrc:string = ""
  @Input() position: "pleft"| "pright" = "pright" 
  @Input() color: "dark"| "light" = "dark"
}
