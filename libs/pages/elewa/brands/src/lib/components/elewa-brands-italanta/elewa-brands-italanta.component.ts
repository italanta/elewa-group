import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-italanta',
  templateUrl: './elewa-brands-italanta.component.html',
  styleUrls: ['./elewa-brands-italanta.component.scss'],
})
export class ElewaBrandsItalantaComponent {

  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690298/elewa-group-website/Icons/SVG/Italanta_mpxz8d.svg';
  name = 'iTalanta';
  brandDescription = 'From Silicon Savannah to the world, iTalanta is an offshore software development agency that doubles as a talent accelerator. iTalanta supports a portfolio of clients that consist of some of the hottest startups in the world.'
  buttonText = 'Visit Website'
  url = '/home';
  logoPlacement: 'right'
}
