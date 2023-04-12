import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page-lander',
  templateUrl: './home-page-lander.component.html',
  styleUrls: ['./home-page-lander.component.scss'],
})
export class HomePageLanderComponent {
  @Input() subtitle = 'THE WAY IN WHICH WE TRAIN IS OUTDATED';
  @Input() title = 'We are a group of companies which unlock true human potential.';
  @Input() backgroundImg = 'https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  @Input() description = 'Irrespective of origin, nationality, gender and belief.';
}
