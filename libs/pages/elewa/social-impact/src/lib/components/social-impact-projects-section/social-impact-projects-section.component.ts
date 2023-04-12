import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'elewa-group-social-impact-projects-section',
  templateUrl: './social-impact-projects-section.component.html',
  styleUrls: ['./social-impact-projects-section.component.scss'],
})

export class SocialImpactProjectsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
