import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page-lander',
  templateUrl: './home-page-lander.component.html',
  styleUrls: ['./home-page-lander.component.scss'],
})
export class HomePageLanderComponent {
  @Input() subtitle = 'THE STANDARD FOR PROFESSIONAL TRAINING IS OUTDATED';
  @Input() title = 'We are a group of companies which unlock true human potential.';
  @Input() backgroundImg = 'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_2400/v1681285764/elewa-group-website/hero-Images/home-page-bg-min_jfkopo.jpg';
  @Input() description = 'Irrespective of origin, nationality, gender, and belief.';
}
