import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-italanta',
  templateUrl: './elewa-brands-italanta.component.html',
  styleUrls: ['./elewa-brands-italanta.component.scss'],
})
export class ElewaBrandsItalantaComponent {

  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690298/elewa-group-website/Icons/SVG/Italanta_mpxz8d.svg';
  name = 'ITalanta';
  brandDescription = 'From Silicon Savannah to the world, Italanta is an offshore tech devleopment agency that doubles as a tech talent accelerator. italanta has a portolio of clients that consist of some of the hottest global startups'
  buttonText = 'Visit Website'
  url = '/home';
  logoPlacement: 'right'
}
