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
  @Input() imageSource =
    'https://images.unsplash.com/photo-1674592309639-39067f6a8111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60';
  ngOnInit(): void {
    this.isNavLinks = false;
  }
  setVisibility() {
    this.isNavLinks = !this.isNavLinks;
  }
}
