import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-vertical-icon-and-text',
  templateUrl: './elewa-vertical-icon-and-text.component.html',
  styleUrls: ['./elewa-vertical-icon-and-text.component.scss'],
})
export class ElewaVerticalIconAndTextComponent {
  @Input() icon = "fa fa-user-group";
  @Input() title = "Cooperative";
  @Input() description = "Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here";
}
