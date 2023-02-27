import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-brands-opportunities',
  templateUrl: './brands-opportunities.component.html',
  styleUrls: ['./brands-opportunities.component.scss'],
})
export class BrandsOpportunitiesComponent {
  @Input() message = "Become part of the family. View";
  @Input() callToActionText = "open opportunities";
  @Input()  word = "";
  @Input() url = "#";
  
}
