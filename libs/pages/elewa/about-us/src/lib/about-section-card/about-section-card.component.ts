import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-about-section-card',
  templateUrl: './about-section-card.component.html',
  styleUrls: ['./about-section-card.component.scss'],
})
export class AboutSectionCardComponent {
  @Input() icon = "fa fa-user-group";
  @Input() title = "Cooperative";
  @Input() description = "Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here Description goes here";
}
