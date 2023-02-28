import { Component, Input} from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-projects-section',
  templateUrl: './social-impact-projects-section.component.html',
  styleUrls: ['./social-impact-projects-section.component.scss'],
})
export class SocialImpactProjectsSectionComponent {
  @Input() message = "Become part of our mission.";
  @Input() word = "And join";
  @Input()callToActionText ="Elewa";
  @Input()url= "/join-elewa";
}
