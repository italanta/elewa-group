import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle= "How to recognize an elewa member ";
@Input() title = "Dependable, Creative, Supportive, Open Minded and Fun*";
@Input() footerText= "*Serious when it matters";
@Input() backgroundImageLink ="https://res.cloudinary.com/dghmulj4i/image/upload/v1667828146/cld-sample.jpg";
}
