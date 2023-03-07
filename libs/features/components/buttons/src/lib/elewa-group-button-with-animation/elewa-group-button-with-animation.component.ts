import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-button-with-animation',
  templateUrl: './elewa-group-button-with-animation.component.html',
  styleUrls: ['./elewa-group-button-with-animation.component.scss']
})

export class ElewaGroupButtonWithAnimationComponent {
  constructor(
    private router: Router,
  ) {}

  @Input() mode: string | undefined;
  @Input() message: string | undefined;
  @Input() action: string | undefined;

  btnClick= ()=> {
    this.router.navigate([this.action]);
  };
}