import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-cooperative-section',
  templateUrl: './social-impact-cooperative-section.component.html',
  styleUrls: ['./social-impact-cooperative-section.component.scss'],
})
export class SocialImpactCooperativeSectionComponent {
@Input() paragraphs = ["Elewa's Businessess have one common objective, to unlock true potential of individuals, teams, and communities. All our talents are enrolled in a personal growth track. In turn, they contribute their own growth towards the growth of others, the group and their communities."];
}
