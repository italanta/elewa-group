import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent {
  @Input () message1 = 'Become part of our family.'
  @Input () message2 = 'View'
  @Input () link = '/jobs'
  @Input () linkText = 'open opportunities.'

  constructor(private router: Router) { }
  navigateToLink() {
    this.router.navigate(['/jobs']);
  }
}
