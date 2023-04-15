import { Component, Input, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-elewa-invest-key-figures-section',
  templateUrl: './elewa-invest-key-figures-section.component.html',
  styleUrls: ['./elewa-invest-key-figures-section.component.scss'],
})
export class ElewaInvestKeyFiguresSectionComponent implements OnInit {
 @Input() title = "Key figures"

  figures = [
    {
      string: "1.3",
      figure: "M",
      description: "Approx. number of Kenyan talents reaching the age of 18 in 2022",

    },
    {
      string: "5",
      figure: "M",
      description: "number of East-Africans(EAC) reaching the age of 18 in 2022",

    },
    {
      string: "2022",
      figure: "",
      description: "Democratic Republic of Congo joins the East African Community",

    },
    {
      string: "1.5",
      figure: "M",
      description: "The number of unfilled IT vacancies in the US and EU markets",

    },
    {
      string: "10",
      figure: "M",
      description: "Number of technical vacancies by 2030",

    },
    {
      string: "2050",
      figure: "",
      description: "Africa holds the worlds largest workforce",

    },
    {
      string: "$4.6",
      figure: "M",
      description: "Startup funding raised by African startups in 2022",

    },
    {
      string: "310",
      figure: "%",
      description: "Increase in startup funding for companies with HQ in Kenya",

    }
  ]

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
