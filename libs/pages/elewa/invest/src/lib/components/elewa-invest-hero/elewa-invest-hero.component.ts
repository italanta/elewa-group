import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-hero',
  templateUrl: './elewa-invest-hero.component.html',
  styleUrls: ['./elewa-invest-hero.component.scss'],
})
export class ElewaInvestHeroComponent {
  @Input() subtitle = 'Trade, not aid';
  @Input() title = 'Southern innovations that address global problems';
  @Input() footerText = '';
  @Input() backgroundImg = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/hero-Images/Investors_qba82u.jpg';

}
