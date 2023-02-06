import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'How to recognize an elewa member';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg =  'https://via.placeholder.com/150/FF0000/00000FF';
  @Input() footer = "";
}
