import { Component, Input } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'elewa-group-button-with-animation',
  templateUrl: './elewa-group-button-with-animation.component.html',
  styleUrls: ['./elewa-group-button-with-animation.component.css']
})

export class ElewaGroupButtonWithAnimationComponent {
  constructor(
    private location: Location
  ) {}

  @Input() mode="light";
  @Input() message="Button Text";
  @Input() action=".";

  nav(): void{
    this.location.go(this.action);
  }
}
