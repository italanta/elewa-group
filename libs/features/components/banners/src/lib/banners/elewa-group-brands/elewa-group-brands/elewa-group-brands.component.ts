import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-brands',
  templateUrl: './elewa-group-brands.component.html',
  styleUrls: ['./elewa-group-brands.component.scss'],
})
export class ElewaGroupBrandsComponent {

  @Input () logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/Elewa_education_pp1gnc.svg';
  @Input () name  = 'Elewa Education';
  @Input () brandDescription = "The secret to successful education is empathy.By understanding people holistic contexts they operate, Elewa educaation develops proffessional training programs that are measured, sustainable,effective, and highly scallable"
  @Input () buttonText  = ''
  @Input() url = '';
  @Input () logoPlacement: 'right' | 'left' = 'left';
}
