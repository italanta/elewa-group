import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-stakeholder-section',
  templateUrl: './elewa-invest-stakeholder-section.component.html',
  styleUrls: ['./elewa-invest-stakeholder-section.component.scss'],
})
export class ElewaInvestStakeholderSectionComponent {
  title= 'Elewa NV, a multi-stakeholder cooperation'
  paragraphs = ["At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private Holding company which controls the assets of all Elewa activities. ", "Elewa NV is owned and controlled by Elewa's founders, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."]
  imageURL="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
  imagePosition = "left"
  bgColor="white"
}
