import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-we-care',
  templateUrl: './about-us-we-care.component.html',
  styleUrls: ['./about-us-we-care.component.scss'],
})
export class AboutUsWeCareComponent {
  cards = [
    {
      icon: 'fa fa-infinity',
      title: 'Holistic Solutions',
      description:
        'We go beyond a simple patch-up but develop lasting solutions through holistic designs',
    },
    {
      icon: 'fa fa-user-group',
      title: 'Impact',
      description:
        'Impact as a direct, or indirect, result. All our respective organozations have underlying theories of change.',
    },
    {
      icon: 'fa fa-globe',
      title: 'Open data',
      description:
        'Sharing is caring. We share what we learn.All our internal projects are open source.',
    },
  ];
}
