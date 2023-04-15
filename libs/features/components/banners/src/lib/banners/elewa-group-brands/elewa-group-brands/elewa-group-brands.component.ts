import { Component, Input, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-group-brands',
  templateUrl: './elewa-group-brands.component.html',
  styleUrls: ['./elewa-group-brands.component.scss'],
})
export class ElewaGroupBrandsComponent implements OnInit {
  @Input () logo: string;
  @Input () name: string;
  @Input () brandDescription: string;
  @Input () buttonText: string ;
  @Input() url: string;
  @Input () logoPlacement: 'right' | 'left' = 'right';

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
