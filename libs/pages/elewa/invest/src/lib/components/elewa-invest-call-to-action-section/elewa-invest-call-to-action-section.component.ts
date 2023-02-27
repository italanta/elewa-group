import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-call-to-action-section',
  templateUrl: './elewa-invest-call-to-action-section.component.html',
  styleUrls: ['./elewa-invest-call-to-action-section.component.scss'],
})
export class ElewaInvestCallToActionSectionComponent {
  @Input() message = ' Become part of our mission.';
  @Input() callToActionText = 'investing';
  @Input() word = 'And start';
  @Input() url = '/invest';
}
