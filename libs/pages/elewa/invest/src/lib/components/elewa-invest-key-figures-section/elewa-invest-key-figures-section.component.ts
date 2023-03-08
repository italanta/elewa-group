import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-key-figures-section',
  templateUrl: './elewa-invest-key-figures-section.component.html',
  styleUrls: ['./elewa-invest-key-figures-section.component.scss'],
})
export class ElewaInvestKeyFiguresSectionComponent {
 @Input() title = "Key figures"

  figures = [
    {
      string: "1.3M",
      description: "Approx. number of Kenyan talents reaching the age of 18 in 2022",

    },
    {
      string: "5M",
      description: "number of East-Africans(EAC) reaching the age of 18 in 2022",

    },
    {
      string: "2022",
      description: "Democratic Republic of Congo joins the East African Community",

    },
    {
      string: "1.5M",
      description: "The number of unfilled IT vacancies in the US and EU markets",

    },
    {
      string: "10M",
      description: "Number of unified technical vacancies in US and EU markets",

    },
    {
      string: "7.5%",
      description: "Kenya 2021 GDP growth",

    },
    {
      string: "$4.6",
      description: "Startup funding rised by African startups in 2022",

    },
    {
      string: "310%",
      description: "Increase in startup funding for companies with HQ in Kenya",

    }
  ]
}
