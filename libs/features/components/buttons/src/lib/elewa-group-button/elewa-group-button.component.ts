import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-button',
  templateUrl: './elewa-group-button.component.html',
  styleUrls: ['./elewa-group-button.component.scss'],
})
export class ElewaGroupButtonComponent {
  @Input() mode = "dark";
  @Input() message = "hello world";
  @Input() action = "google.com";
}
