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

  @Input() mode: string;
  @Input() message: string;
  @Input() action: string;

  btnClick= ()=> {
    if (this.action?.includes('http')) {
      window.open(this.action, '_blank');
    } else {
      this.router.navigate([this.action]);
    }
  };
}