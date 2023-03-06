import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-venture-labs-discover',
  templateUrl: './venture-labs-discover.component.html',
  styleUrls: ['./venture-labs-discover.component.scss'],
})
export class VentureLabsDiscoverComponent {
  @Input() message = " Discover what VentureLabs";
  @Input() callToActionText = "can do for";
  @Input() word = "your Startup";
  @Input() url = "/";
}
