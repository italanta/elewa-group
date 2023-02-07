import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent implements OnInit {
  isNavLinks!: boolean;
  @Input() subtitle = 'How to recognize an elewa member';
  @Input() mainTitle = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() footer = '*Serious when it matters';
  ngOnInit(): void { 
    this.isNavLinks = false;
  }
  setVisibility() {
    this.isNavLinks = !this.isNavLinks;
  }
}
