import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-card',
  templateUrl: './elewa-group-card.component.html',
  styleUrls: ['./elewa-group-card.component.scss'],
})
export class ElewaGroupCardComponent {
  @Input() subtitle : string = '';
  @Input() title : string ='';
  @Input() imgSrc : string ='';
  @Input()  description :string ='';
}
