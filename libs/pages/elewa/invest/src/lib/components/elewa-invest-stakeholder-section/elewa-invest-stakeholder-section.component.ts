import { Component } from '@angular/core';
@Component({
  selector: 'elewa-group-elewa-invest-stakeholder-section',
  templateUrl: './elewa-invest-stakeholder-section.component.html',
  styleUrls: ['./elewa-invest-stakeholder-section.component.scss'],
})
export class ElewaInvestStakeholderSectionComponent {
  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png'
  paragraphTexts: string[] = ['At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.', 'Elewa NV is owned and controlled by Elewa\'s founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.']
  titleText = `Elewa NV, a multi-stakeholder cooperation`
  imagePlacement = 'left'
  backgroundColor = 'var(--elewa-group-website-color)'
}
