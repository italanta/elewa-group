import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-we-care',
  templateUrl: './we-care.component.html',
  styleUrls: ['./we-care.component.scss'],
})
export class WeCareComponent {
  icons = [
    {
      icon: "fa fa-user-group",
      title: "Holistic solutions",
      description: "We go beyond a simple patch-up but develop lasting solutions through holistic design."
    },
    {
      icon: "fa fa-infinity",
      title: "Impact",
      description: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change."
    },    {
      icon: "fa fa-globe",
      title: "Open data",
      description: "Sharing is caring. We share what we learn. All our internal projects are open source."
    },
  ]
}
