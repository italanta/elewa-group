import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() title = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() subTitle = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() paragraph = '*SERIOUS WHEN IT MATTERS';
}
