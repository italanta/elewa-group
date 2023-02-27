import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-brands-elewa-education',
  templateUrl: './elewa-brands-elewa-education.component.html',
  styleUrls: ['./elewa-brands-elewa-education.component.scss'],
})
export class ElewaBrandsElewaEducationComponent {
  @Input () logo = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/Elewa_education_pp1gnc.svg';
  @Input () name  = 'Elewa Education';
  @Input () brandDescription = "The secret to successful education is empathy.By understanding people holistic contexts they operate,Elewa education develops proffessional training programs that are measured,sustainable,effective,and highly scalable.";
  @Input () buttonText  = 'Visit website';
  @Input() url = '';
 
}
