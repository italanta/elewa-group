import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-venture-labs-investments',
  templateUrl: './venture-labs-investments.component.html',
  styleUrls: ['./venture-labs-investments.component.scss'],
})
export class VentureLabsInvestmentsComponent implements OnInit 
{
  cards = [
    {
      figureUrl: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1681545592/kujali-logo_ajlhm8.png',
      link: '#'
    },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // },
    // {
    //   figureUrl: 'https://i.postimg.cc/wxnQLbYY/nextsteps.png',
    // }
  ]

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
