import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'How to recognize an elewa member';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg =  'https://via.placeholder.com/1900x1080';
  @Input() footer = "";
}
