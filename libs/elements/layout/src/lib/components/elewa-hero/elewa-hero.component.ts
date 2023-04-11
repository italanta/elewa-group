import { animate, state, style, transition, trigger } from '@angular/animations';

import * as AOS from "aos";

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateY(-100)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateY(100%)' }),
  //       animate(500)
  //     ]),
  //     transition('* => void', [
  //       animate(100, style({ transform: 'translateY(100%)' }))
  //     ])
  //   ])
  // ]
})
export class ElewaHeroComponent implements OnInit {
  @Input() subtitle = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg = 'https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  @Input() footerText = '*SERIOUS WHEN IT MATTERS';
  @Input () description = '';

  contentPage = '';

  constructor(private _router$$: Router) {

    this.contentPage = _router$$.url.split('/')[1];
  }

  ngOnInit(): void {
    AOS.init();
  }
}
