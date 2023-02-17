import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-we-care-section',
  templateUrl: './we-care-section.component.html',
  styleUrls: ['./we-care-section.component.css']
})
export class WeCareSectionComponent {
cards = [
  {
    icon : "fa fa-infinity",
    title:'Holistic Solutions',
    description:'We go beyond a simple patch up bad develop testing solution through holistic design'

  },
  {
    icon : "fa fa-user-group" ,
    title:'Impact',
    description:'Impact as a direct or indirect result all our respective organizations organizations here underlying theories of change'

  },
  {
    icon:' fa  fa-globe',
    title:'Open data',
    description:'Sharing is caring we share we learn all our internal projects are open sources'

  }
]
}
