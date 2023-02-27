import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-elewa-education',
  templateUrl: './elewa-brands-elewa-education.component.html',
  styleUrls: ['./elewa-brands-elewa-education.component.scss'],
})
export class ElewaBrandsElewaEducationComponent {
  logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/Elewa_education_pp1gnc.svg';
  name = 'Elewa Education';
  brandDescription = 'The secret to successful education is empathy. By understanding people and the holistic contexts in which they operate, Elewa Education develops professional training programs which are measured, sustainable, effective, and highly scalable';
  url = '/home';
  logoPlacement: 'left' | 'right' = 'left';;
  buttonText = 'Visit website'
}
