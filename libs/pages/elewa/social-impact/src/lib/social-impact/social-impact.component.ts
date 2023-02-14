import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-social-impact',
  templateUrl: './social-impact.component.html',
  styleUrls: ['./social-impact.component.scss'],
})
export class SocialImpactComponent {
  heroes = [
    {
      title: 'A vehicle for rapid & schalable human development',
      subtitle: 'Social Enterprise',
      footerText: '',
      backgroundImg: 'https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
}
