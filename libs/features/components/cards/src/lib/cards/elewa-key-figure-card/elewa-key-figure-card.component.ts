import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-key-figure-card',
  templateUrl: './elewa-key-figure-card.component.html',
  styleUrls: ['./elewa-key-figure-card.component.scss'],
})
export class ElewaKeyFigureCardComponent {

  @Input() figure = '10';
  @Input() m = 'M';
  @Input() description = 'Number of unfilled technical vacancies in US and EU markets';
  @Input() isImage = 'https://cdn-icons-png.flaticon.com/512/196/196584.png?w=740&t=st=1677138283~exp=1677138883~hmac=2e9e6b960e15b8ec83387249b6cb11419a02b1e3f824ed3ea63f3044394949d1';
  
}
