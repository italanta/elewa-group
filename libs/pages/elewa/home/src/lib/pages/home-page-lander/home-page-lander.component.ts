import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page-lander',
  templateUrl: './home-page-lander.component.html',
  styleUrls: ['./home-page-lander.component.scss'],
})
export class HomePageLanderComponent {
  @Input() subtitle = 'THE WAY IN WHICH WE TRAIN IS OUTDATED';
  @Input() title = 'We are a group of companies which unlock true human potential.';
  @Input() backgroundImg = 'https://img.freepik.com/free-vector/meerkat-family-silhouette-savanna-forest_1308-87928.jpg?w=740&t=st=1676618911~exp=1676619511~hmac=51cee9365f45dbae94166c5642f40d9117a3a96af9949ee93c70d34aec31d541';
  @Input() description = 'Irrespective of origin,nationality, gender, and belief.';


}
