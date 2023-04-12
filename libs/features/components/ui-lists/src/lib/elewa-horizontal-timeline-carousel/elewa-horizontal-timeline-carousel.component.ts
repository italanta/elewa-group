import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-horizontal-timeline-carousel',
  templateUrl: './elewa-horizontal-timeline-carousel.component.html',
  styleUrls: ['./elewa-horizontal-timeline-carousel.component.scss'],
})

export class ElewaHorizontalTimelineCarouselComponent implements OnInit {

  @Input() currentIndex: number = 0;

  shrinkValue: number = -60;

  lastItem: number = 2;

  @Input() items = [
    {
      date: "2015",
      title: "Elewa is born",
      description: `
        From a Belgian garage and Embakasi apartment, Elewa first sees the light as a purely SaaS-based EdTech analyzing KCSE past papers.
      `
    },
    {
      date: "2017",
      title: "Kickstarting Elewa Education",
      description: `
        With an initial pre-seed investment of friends and family and a masters thesis on the subject, Elewa pilots it's innovative "Four Pillars" model in 5 secondary schools across Kenya. 
        Learning outcomes go through the roof in only one term.
      `
    },
    {
      date: "2018",
      title: "Commercial exploration",
      description: `
        Succesfully piloting in 5 schools, Elewa Education is ready for the market. Elewa founds Elewa Investment, a cooperative fund in Belgium 
        aimed at fueling the growth of Elewa. Elewa launching four commercial services across schools in Kenya.
      `
    },
    {
      date: "2019",
      title: "Elewa on the map",
      description: `
        Elewa is recognized by UNESCO as Kenyan representative and top 10 innovations in the UNESCO ICT in Education Prize (Theme AI & education). 
        Elewa joins the fourht Cohort of the "Google for Startups Africa" accelerator program.
      `
    },
    {
      date: "2020",
      title: "Elewa Diversifies",
      description: `
        Elewa takes a step into the future with Jente Rosseel as CEO, Kennedy Adhola as HR Director and Peter Reinartz as chairman. 
        Elewa Education generalises it's innovative model and finds product market-fit in the professional training space across Education, Health and Agriculture & Environment.
        iTalanta is born. A tech offshoring company which provides software development services to clients in Europe and the US. 
      `
    },
    {
      date: "2021",
      title: "Conversational Learning",
      description: `
        Elewa Education launches first Conversational learning pilot together with the Kenya Scouts Association. 
        iTalanta grows to be a major activity within the company.
      `
    },
    {
      date: "2023",
      title: "Elewa Group",
      description: `
        Elewa establishes itself as a regional player in Professional Education and Technology development. 
          Consolidates its activities through Elewa NV/Group. First investment in a Venture Lab by Elewa Group.
      `
    },
  ];

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
    if (window.innerWidth < 768) {
      this.shrinkValue = -25;
      this.lastItem = 1;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - this.lastItem) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

