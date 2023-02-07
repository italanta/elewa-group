import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent implements OnInit {
  isNavLinks!: boolean;
  @Input() subHeading = 'The way in which we train is outdated';
  @Input() titleText =
    'We are a group of companies which unlock true human potential.';
  @Input() subText = 'Irrespective of origin, nationality, gender, and belief.';
  ngOnInit(): void {
    this.isNavLinks = false;
  }
  setVisibility() {
    this.isNavLinks = !this.isNavLinks;
  }
}
