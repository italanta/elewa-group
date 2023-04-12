import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-horizontal-list-orgs',
  templateUrl: './elewa-group-horizontal-list-orgs.component.html',
  styleUrls: ['./elewa-group-horizontal-list-orgs.component.scss'],
})
export class ElewaGroupHorizontalListOrgsComponent implements OnInit {
  imageUrl = [
    {
      "image":  'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966776/vvob_logo_rlh7p9.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/farmbetter_logo_iuv0za.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/enabel_logo_rdbvsw.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/savics_logo_w81jn3.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/scouts_logo_e10wut.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/sportlights_logo_pfalfc.png'
    },
    {
      "image": 'https://res.cloudinary.com/daumrxfhi/image/upload/v1675966777/wwf_logo_uui3oo.png'
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
