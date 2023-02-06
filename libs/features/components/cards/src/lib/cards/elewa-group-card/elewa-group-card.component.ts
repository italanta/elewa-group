import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-card',
  templateUrl: './elewa-group-card.component.html',
  styleUrls: ['./elewa-group-card.component.scss'],
})
export class ElewaGroupCardComponent {
  @Input() subtitle = 'Education';
  @Input() title = 'Elewa';
  @Input() imgSrc = 'https://cdn-icons-png.flaticon.com/512/525/525999.png?w=740&t=st=1675501297~exp=1675501897~hmac=1155bac819e804d6cec3f35352bfdf66b30145c40de715340157d1f63bcfc939';
  @Input()  description = 'A key player in the development of operations of new-age human-center digital learning experiences';
}
