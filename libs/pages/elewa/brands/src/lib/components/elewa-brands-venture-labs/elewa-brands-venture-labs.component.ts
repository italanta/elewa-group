import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-venture-labs',
  templateUrl: './elewa-brands-venture-labs.component.html',
  styleUrls: ['./elewa-brands-venture-labs.component.scss'],
})
export class ElewaBrandsVentureLabsComponent {
  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690293/elewa-group-website/Icons/SVG/VentureLabs_i5cq9y.svg';
  name = 'Venture Labs';
  brandDescription = 'A moonshot factory, Elewa Venture Labs invests and incubates gobal SaaS startups with high potential. Developed and grown by Elewa talents and our network.'
  buttonText = 'Explore our startups'
  url = '';
  logoPlacement: 'right' | 'left' = 'left';
}
