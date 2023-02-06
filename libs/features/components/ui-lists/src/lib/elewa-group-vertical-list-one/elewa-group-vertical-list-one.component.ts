import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-vertical-list-one',
  templateUrl: './elewa-group-vertical-list-one.component.html',
  styleUrls: ['./elewa-group-vertical-list-one.component.scss'],
})
export class ElewaGroupVerticalListOneComponent {
  // @Input() title = "WWF";
  // @Input() description = "Elewa group vertical list one works!";
  // @Input() date = "Feb 2023";
  @Input() items = [
    {
      title: "WWF",
      description: "Elewa group vertical list one works!",
      date: "Feb 2023"
    },
    {
      title: "VVOB",
      description: "Elewa group vertical list one works!",
      date: "Jan 2023"
    },
    {
      title: "Farm",
      description: "Elewa group vertical list one works!",
      date: "Feb 2023"
    }
  ];
}
