import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg = 'https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg';
  @Input() footer = '*SERIOUS WHEN IT MATTERS';
}
