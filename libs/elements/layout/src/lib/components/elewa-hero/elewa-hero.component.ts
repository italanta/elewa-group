import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent implements OnInit {
  @Input() subtitle = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() backgroundImg = '';
  @Input() footerText = '*SERIOUS WHEN IT MATTERS';
  @Input () description = '';

  contentPage = '';

  constructor(private _router$$: Router) {

    this.contentPage = _router$$.url.split('/')[1];
  }

  ngOnInit(): void {
  }
}
