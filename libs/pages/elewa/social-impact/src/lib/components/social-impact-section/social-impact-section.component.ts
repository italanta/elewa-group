import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact-section',
  templateUrl: './social-impact-section.component.html',
  styleUrls: ['./social-impact-section.component.scss'],
})
export class SocialImpactSectionComponent {
  heroes = [
    {
      title: 'A vehicle for rapid & schalable human development',
      subtitle: 'Social Enterprise',
      footerText: '',
      backgroundImg: 'https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
}
