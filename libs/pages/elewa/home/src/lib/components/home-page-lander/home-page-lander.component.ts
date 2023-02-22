import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page-lander',
  templateUrl: './home-page-lander.component.html',
  styleUrls: ['./home-page-lander.component.scss'],
})
export class HomePageLanderComponent {
  @Input() subtitle = 'THE WAY IN WHICH WE TRAIN IS OUTDATED';
  @Input() title = 'We are a group of companies which unlock true human potential.';
  @Input() backgroundImg = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png';
  @Input() description = 'Irrespective of origin,nationality, gender, and belief.';
}
