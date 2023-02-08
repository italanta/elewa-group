import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'HOW TO RECOGNIZE AN ELEWA MEMBER';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input()
  srcSet = `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 600w,
    https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg 626w,
    https://www.shutterstock.com/image-photo/dark-street-wet-asphalt-reflections-260nw-1534639589.jpg 450w`;

  @Input() sizes = `(max-width: 480px) 100vw,
                    (max-width: 767px)  100vw`;

  @Input() footer = '*SERIOUS WHEN IT MATTERS';
}
