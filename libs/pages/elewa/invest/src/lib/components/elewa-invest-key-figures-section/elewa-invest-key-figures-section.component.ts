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
      figure2: '1.3M',
      description2:
        'Approx. number of Kenyan talents reaching the age of 18 in 2022.',
      isImage2: false,
    },
    {
      figure2: '5M',
      description2:
        'Number of East-Africans (EAC) reaching the age of 18 in 2022.',
      isImage2: false,
    },
    {
      figure2: '2022',
      description2:
        'Demecratic Republic of Congo joins the East African Community.',
      isImage2: false,
    },
    {
      figure2: '1.5M',
      description2:
        'Number of unfilled IT vacancies in the US and EU Markets.',
      isImage2: false,
    },
    {
      figure2: '10M',
      description2:
        'Number of unfilled technical vacancies in the US and EU Markets.',
      isImage2: false,
    },
    {
      figure2: '7.5%',
      description2:
        'Kenyan 2021 GDP growth.',
      isImage2: false,
    },
    {
      figure2: '$4.6M',
      description2:
        'Startup funding raised by African startups in 2022.',
      isImage2: false,
    },
    {
      figure2: '310%',
      description2:
        'Increase in startup funding for companies with HQ in Kenya.',
      isImage2: false,
    },
  ];
}
