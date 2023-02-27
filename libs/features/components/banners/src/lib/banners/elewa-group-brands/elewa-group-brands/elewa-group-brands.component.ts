import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-brands',
  templateUrl: './elewa-group-brands.component.html',
  styleUrls: ['./elewa-group-brands.component.scss'],
})
export class ElewaGroupBrandsComponent {

  @Input () logo: string = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/Elewa_education_pp1gnc.svg';
  @Input () name: string = '';
  @Input () brandDescription: string = ''
  @Input () buttonText: string = ''
  @Input() url = '';
  @Input () logoPlacement: 'right' | 'left' = 'right';
}
