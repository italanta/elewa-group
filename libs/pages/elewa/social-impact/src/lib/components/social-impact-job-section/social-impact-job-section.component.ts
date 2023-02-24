import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-job-section',
  templateUrl: './social-impact-job-section.component.html',
  styleUrls: ['./social-impact-job-section.component.scss'],
})
export class SocialImpactJobSectionComponent {
 @Input() message = "Become part of our mission.";
 @Input() word = "And start";
 @Input()callToActionText ="investing";
 @Input()url= "/investing";
}
