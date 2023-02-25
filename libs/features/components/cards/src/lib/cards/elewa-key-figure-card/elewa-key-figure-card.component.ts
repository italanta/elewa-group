import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-key-figure-card',
  templateUrl: './elewa-key-figure-card.component.html',
  styleUrls: ['./elewa-key-figure-card.component.css']
})
export class ElewaKeyFigureCardComponent {
  @Input() figure = '10M';
  @Input() description = 'Number of unfilled technical vancancies in US and EU markets';
  @Input() isImage = 'https://i.postimg.cc/wxnQLbYY/nextsteps.png';
  // @Input() figure? : string;
  // @Input() description? : string;
  // @Input() isImage? : boolean;
  
}
