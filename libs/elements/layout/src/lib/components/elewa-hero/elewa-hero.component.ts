import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = "HOW TO RECOGNIZE AN ELEWA MEMBER";
  @Input() title = "Dependable, Creative, Supportive, Open Minded and Fun*";
  @Input() background_image = "https://images.pexels.com/photos/7942441/pexels-photo-7942441.jpeg?auto=compress&cs=tinysrgb&w=4400";

  @Input()footerText = '*SERIOUS When it matters'
}
