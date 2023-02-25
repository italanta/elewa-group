import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-call-to-action',
  templateUrl: './elewa-group-call-to-action.component.html',
  styleUrls: ['./elewa-group-call-to-action.component.scss'],
})
export class ElewaGroupCallToActionComponent {
  @Input() message = "Become part of the family"
  @Input() callToActionIntroducer = "View"
  @Input() callToAction = "open opportunities"
  @Input() callToActionURL = "jobs"
  @Input() align = "left"
}
