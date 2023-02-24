import { Component ,Input} from '@angular/core';

// import {ElewaGroupImageAndTextBannerComponent} from 

@Component({
  selector: 'elewa-group-elewa-invest-creative-hub-section',
  templateUrl: './elewa-invest-creative-hub-section.component.html',
  styleUrls: ['./elewa-invest-creative-hub-section.component.scss'],
})
export class ElewaInvestCreativeHubSectionComponent {
  @Input() paragraphs = ["The Elewa Creative Hub lies at the heart of our organization.A two-acre property in the center of Nairobi's creative district,the hub connects all Elewa's activities under a single banner", "Through partnerships with the creative community,the Elewa Hub organizes vibrant activities that bring together talents from different fields(tech,business,art,fashion) to nurture continuous innovation."]
}
