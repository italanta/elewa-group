import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-button-with-animation',
  templateUrl: './elewa-group-button-with-animation.component.html',
  styleUrls: ['./elewa-group-button-with-animation.component.css']
})

export class ElewaGroupButtonWithAnimationComponent {
  @Input() mode="light";
  @Input() message="Button Text";
  @Input() action=".";

}
