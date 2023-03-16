import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-key-figure-card',
  templateUrl: './elewa-key-figure-card.component.html',
  styleUrls: ['./elewa-key-figure-card.component.scss'],
})
export class ElewaKeyFigureCardComponent  {
  @Input () figure: string;
  @Input () description?: string;
  @Input () isImage: boolean;
}
