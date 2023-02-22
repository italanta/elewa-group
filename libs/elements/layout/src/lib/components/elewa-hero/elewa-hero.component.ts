import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png';
  @Input() footerText = '*SERIOUS WHEN IT MATTERS';
  @Input () description = '';
}
