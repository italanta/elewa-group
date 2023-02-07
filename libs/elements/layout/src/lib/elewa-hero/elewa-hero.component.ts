import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent implements OnInit {
  isNavLinks!: boolean;
  @Input() subHeading = 'How to recognize an elewa member';
  @Input() titleText = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() subText = 'Irrespective of origin, nationality, gender, and belief.';
  ngOnInit(): void {
    this.isNavLinks = false;
  }
  setVisibility() {
    this.isNavLinks = !this.isNavLinks;
  }
}
