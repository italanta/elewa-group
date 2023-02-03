import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title = 'Elewa';
  subtitle = 'Education';
  imgSrc = 'https://via.placeholder.com/150';
  description = 'A key player in the development and operations of new-age human-centered digital learning experiences.';
}
