import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-invest-key-figures-section',
  templateUrl: './elewa-invest-key-figures-section.component.html',
  styleUrls: ['./elewa-invest-key-figures-section.component.scss'],
})
export class ElewaInvestKeyFiguresSectionComponent {
  //  figure2 ="1.3M";
  // description2 ="Approx. number of Kenyan talents reaching the age of 18 in 2022.";
  // isImage2 = false;
  cards = [
    {
      figure: '1.3M',
      description:
        'Approx. number of Kenyan talents reaching the age of 18 in 2022.',
      isImage: false,
    },
    {
      figure: '5M',
      description:
        'Number of East-Africans (EAC) reaching the age of 18 in 2022.',
      isImage: false,
    },
    {
      figure: '2022',
      description:
        'Demecratic Republic of Congo joins the East African Community.',
      isImage: false,
    },
    {
      figure: '1.5M',
      description:
        'Number of unfilled IT vacancies in the US and EU Markets.',
      isImage: false,
    },
    {
      figure: '10M',
      description:
        'Number of unfilled technical vacancies in the US and EU Markets.',
      isImage: false,
    },
    {
      figure: '7.5%',
      description:
        'Kenyan 2021 GDP growth.',
      isImage: false,
    },
    {
      figure: '$4.6M',
      description:
        'Startup funding raised by African startups in 2022.',
      isImage: false,
    },
    {
      figure: '310%',
      description:
        'Increase in startup funding for companies with HQ in Kenya.',
      isImage: false,
    },
  ];
}
