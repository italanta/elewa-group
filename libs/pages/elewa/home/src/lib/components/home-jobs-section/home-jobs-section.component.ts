import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent {
  callToAction = "open opportunities"
  callToActionIntro = "View"
  destinationUrl = "/jobs"
  message = "Become part of the family."
  textAlign="center"
}
