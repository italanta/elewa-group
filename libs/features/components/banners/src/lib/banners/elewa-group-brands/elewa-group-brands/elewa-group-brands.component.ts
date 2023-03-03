import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-brands',
  templateUrl: './elewa-group-brands.component.html',
  styleUrls: ['./elewa-group-brands.component.scss'],
})
export class ElewaGroupBrandsComponent {
  @Input () logo: string;
  @Input () name: string;
  @Input () brandDescription: string;
  @Input () buttonText: string ;
  @Input() url: string;
  @Input () logoPlacement: 'right' | 'left' = 'right';
}
