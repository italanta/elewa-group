import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-venture-labs',
  templateUrl: './elewa-brands-venture-labs.component.html',
  styleUrls: ['./elewa-brands-venture-labs.component.scss'],
})
export class ElewaBrandsVentureLabsComponent 
{
  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681547254/venturelabs-logo_jon9fq.jpg';
  name = 'Venture Labs';
  brandDescription = `Our moonshot factory, Elewa's Venture Lab invests and incubates global SaaS startups with high potential. Developed by Elewa talents and our network.`;
  buttonText = 'Explore our startups'
  url = '/venture-labs';
  logoPlacement: 'right' | 'left' = 'left';
}
