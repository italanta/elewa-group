import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-vertical-icon-and-text',
  templateUrl: './elewa-vertical-icon-and-text.component.html',
  styleUrls: ['./elewa-vertical-icon-and-text.component.scss'],
})
export class ElewaVerticalIconAndTextComponent {
  properties=[
    {
      icon:"fa fa-user-group",
      title:"Holistic solutions",
      description:"We go beyond a simple patch-up but develop lasting solutions through holistic design"
    },
    {
      icon:"fa-solid fa-repeat",
      title:"Impact",
      description:"Impact as a direct or distinct result. All our respective organizations have underlying theories of change."
    },
    {
      icon:"fa-solid fa-globe",
      title:"Cooperative",
      description:"Sharing is caring. We share what we learn. All through our internal projects are open source."
    },
  ]
}
