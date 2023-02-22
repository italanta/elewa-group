import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-social-impact-call-to-action-section',
  templateUrl: './social-impact-call-to-action-section.component.html',
  styleUrls: ['./social-impact-call-to-action-section.component.scss'],
})
export class SocialImpactCallToActionSectionComponent {
  @Input () message1 = 'Become part of our mission.'
  @Input () message2 = 'And start'
  @Input () link = '/link'
  @Input () linkText = 'investing.'

  constructor(private router: Router) { }
  navigateToLink() {
    this.router.navigate(['/link']);
  }

}
