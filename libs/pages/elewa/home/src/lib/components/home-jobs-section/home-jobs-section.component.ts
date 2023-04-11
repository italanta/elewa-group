import { Component, Input, OnInit } from '@angular/core';

import * as AOS from "aos";
@Component({
  selector: 'elewa-group-home-jobs-section',
  templateUrl: './home-jobs-section.component.html',
  styleUrls: ['./home-jobs-section.component.scss'],
})
export class HomeJobsSectionComponent implements OnInit {
  @Input() message = " Become part of the family";
  @Input() callToActionText = "open opportunities.";
  @Input() word = "View";
  @Input() url = "/careers";

  ngOnInit(): void {
    AOS.init();
  }

} 
