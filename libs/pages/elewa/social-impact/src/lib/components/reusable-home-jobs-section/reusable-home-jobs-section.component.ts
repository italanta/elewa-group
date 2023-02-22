import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-reusable-home-jobs-section',
  templateUrl: './reusable-home-jobs-section.component.html',
  styleUrls: ['./reusable-home-jobs-section.component.scss'],
})
export class ReusableHomeJobsSectionComponent {
  @Input() message:string
  @Input() callToAction:string
  @Input() textAlign:string
  @Input() destinationUrl:string
  @Input() callToActionIntro:string
}
