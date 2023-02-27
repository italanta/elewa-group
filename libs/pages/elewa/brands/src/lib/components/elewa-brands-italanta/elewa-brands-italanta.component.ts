import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-italanta',
  templateUrl: './elewa-brands-italanta.component.html',
  styleUrls: ['./elewa-brands-italanta.component.scss'],
})
export class ElewaBrandsItalantaComponent {
  @Input () logo: string = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690298/elewa-group-website/Icons/SVG/Italanta_mpxz8d.svg';
  @Input () name: string = 'ITalanta';
  @Input () brandDescription: string = 'From Silicon Savannah to the world, iTalanta is an offshore tech development agency that doubles as a tech talent accelerator. iTalanta has a portfolio of clients consisting out of some of the hottest global startups';
  @Input () buttonText: string = 'View Website';
}
