import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-we-care',
  templateUrl: './about-us-we-care.component.html',
  styleUrls: ['./about-us-we-care.component.scss'],
})
export class AboutUsWeCareComponent {
  cards = [
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Holistic_id4kra.png',
      title: 'Holistic Solutions',
      description:
        'We go beyond a simple patch-up but develop lasting solutions through holistic design.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png',
      title: 'Impact',
      description:
        'Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.',
    },
    {
      icon: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png',
      title: 'Open data',
      description:
        'Sharing is caring. We share what we learn. All our internal projects are open source.',
    },
  ];
}
