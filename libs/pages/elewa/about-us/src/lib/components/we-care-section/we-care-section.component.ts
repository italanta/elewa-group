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
    title:'holistic solution',
    description:'we go beyond a simple patch up bad develop testing solution through holistic design'
    
  },
  {
    icon : "fa fa-user-group" ,
    title:'impact',
    description:'impact as a direct or indirect result all our respective organizations organizations here underlying theories of change'

  },
  {
    icon:' fa  fa-globe',
    title:'open data',
    description:'sharing is caring we share we learn all our internal projects are open sources'

  }
]
}
