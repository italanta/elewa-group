import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-hero',
  templateUrl: './elewa-hero.component.html',
  styleUrls: ['./elewa-hero.component.scss'],
})
export class ElewaHeroComponent {
  @Input() subtitle = 'How to recognize an elewa member';
  @Input() title = 'Dependable, Creative, Supportive, Open Minded and Fun*';
  @Input() srcset = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZyUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 500w",
    "https://www.shutterstock.com/image-photo/dark-street-wet-asphalt-reflections-260nw-1534639589.jpg 600w",
    "https://www.shutterstock.com/image-photo/dark-street-wet-asphalt-reflections-260nw-1534639589.jpg 600w"
  ] 
  @Input() backgroundImg =  'https://media.istockphoto.com/id/637912692/photo/nairobi-cityscape-capital-city-of-kenya.jpg?s=612x612&w=0&k=20&c=S8wPNq9om-IMcapXFC030ew28nhpYCFYBStX5yxCQbs=';
  @Input() footer = "";
}
