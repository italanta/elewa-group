import { Component, Input, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-vertical-list-one',
  templateUrl: './elewa-group-vertical-list-one.component.html',
  styleUrls: ['./elewa-group-vertical-list-one.component.scss'],
})
export class ElewaGroupVerticalListOneComponent implements OnInit {

  @Input() items = [
    {
      title: "WWF",
      description: "Elewa group vertical list one works!",
      date: "Feb 2023"
    },
    {
      title: "VVOB",
      description: "Elewa group vertical list one works!",
      date: "Jan 2023"
    },
    {
      title: "Farm",
      description: "Elewa group vertical list one works!",
      date: "Feb 2023"
    }
  ];

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
