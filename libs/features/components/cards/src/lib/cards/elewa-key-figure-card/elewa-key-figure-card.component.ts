/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-key-figure-card',
  templateUrl: './elewa-key-figure-card.component.html',
  styleUrls: ['./elewa-key-figure-card.component.scss'],
})
export class ElewaKeyFigureCardComponent {

  @Input() figure = 'https://i.postimg.cc/wxnQLbYY/nextsteps.png';
  @Input() description?: string;
  @Input() isImage :boolean = true;
  
}
