import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-elewa-education',
  templateUrl: './elewa-brands-elewa-education.component.html',
  styleUrls: ['./elewa-brands-elewa-education.component.scss'],
})
export class ElewaBrandsElewaEducationComponent {
  @Input() logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/Elewa_education_pp1gnc.svg';
  @Input() name = 'Elewa Education';
  @Input() brandDescription = `Elewa Education is your best fit if you have a challenge of training thousands of people on professional matters. In a way which is measured, inclusive, sustainable and highly scalable.`;
  @Input() buttonText = 'Visit website';
  @Input() url = 'https://www.elewa.education/';
  @Input() logoPlacement: 'right' | 'left' = 'left';
}
