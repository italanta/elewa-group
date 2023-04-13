import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-horizontal-list-orgs',
  templateUrl: './elewa-group-horizontal-list-orgs.component.html',
  styleUrls: ['./elewa-group-horizontal-list-orgs.component.scss'],
})
export class ElewaGroupHorizontalListOrgsComponent implements OnInit {
  logoUrls = [
    {
      companyLink: 'https://www.msadc.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg'
    },
    {
      companyLink: 'https://www.spotlights.be',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg'
    },
    {
      companyLink: 'https://www.kenya-scouts.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg'
    },
    {
      companyLink: 'https://www.wwf.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png'
    },
    {
      companyLink: 'https://www.vvob.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg'
    },
    {
      companyLink: 'https://www.farmbetter.io',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png'
    },
    {
      companyLink: 'https://www.itvolk.be',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png'
    },
    {
      companyLink: 'https://www.hoplit.be',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380405/elewa-group-website/client-logos/hoplit-logo_nsryy7.webp'
    },
    {
      companyLink: 'https://www.giz.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png'
    },
    {
      companyLink: 'https://www.enabel.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png'
    },
    {
      companyLink: 'https://www.s4y.be',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png'
    },
    {
      companyLink: 'https://www.adc.com',
      logoUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681380405/elewa-group-website/client-logos/adc-logo_dgxpul.jpg'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init({once: true});
  }

  goToClientWebsite(url: string) {
    window.open(url, '_blank');
  }
}
