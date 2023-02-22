import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent {
  message = 'Become part of our mission. And start ';
  callToAction = 'investing';
  url = '/jobs';
  textAlign = 'center';
}
