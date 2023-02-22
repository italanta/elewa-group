import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-page-jobs',
  templateUrl: './home-page-jobs.component.html',
  styleUrls: ['./home-page-jobs.component.scss'],
})
export class HomePageJobsComponent {
  @Input() message = "Become part of the family"
  @Input() callToActionIntroducer = "View"
  @Input() callToAction = "open opportunities"
  @Input() callToActionURL = "jobs"
  @Input() align = "left"
}
