import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-card',
  templateUrl: './elewa-group-card.component.html',
  styleUrls: ['./elewa-group-card.component.scss'],
})
export class ElewaGroupCardComponent {
  @Input() subtitle = '';
  @Input() title = '';
  @Input() imgSrc = '';
  @Input() description = '';
  @Input() backGroundColor = ''
}
