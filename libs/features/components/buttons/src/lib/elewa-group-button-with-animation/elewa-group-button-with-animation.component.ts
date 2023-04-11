import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-button-with-animation',
  templateUrl: './elewa-group-button-with-animation.component.html',
  styleUrls: ['./elewa-group-button-with-animation.component.scss']
})

export class ElewaGroupButtonWithAnimationComponent {

  @Input() mode: string;
  @Input() message: string;
  @Input() action: string;

  @Output() btnClickEvent = new EventEmitter();

  constructor(private router: Router) {}

  btnClick= ()=> {
    this.btnClickEvent.emit();
    if (this.action?.includes('http')) {
      window.open(this.action, '_blank');
    } else {
      this.router.navigate([this.action]);
    }
  };
}