import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {
<<<<<<< HEAD

  @Input() imageURL = ''
  @Input() paragraphTexts: string[]
  @Input() titleText = ''
  @Input() imagePlacement = ''
  @Input() backgroundColor = ''
}
=======
  @Input() imageURL = '';
  @Input() paragraphTexts : string[] = [];
  @Input() titleText = '';
  @Input() imagePlacement = 'right';
  @Input() backgroundColor = 'grey';
}
>>>>>>> main
