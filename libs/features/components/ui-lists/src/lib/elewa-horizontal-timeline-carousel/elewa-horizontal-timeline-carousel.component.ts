import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-horizontal-timeline-carousel',
  templateUrl: './elewa-horizontal-timeline-carousel.component.html',
  styleUrls: ['./elewa-horizontal-timeline-carousel.component.scss'],
})

export class ElewaHorizontalTimelineCarouselComponent implements OnInit {

  @Input() currentIndex: number = 0;

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
        With an initial pre-seed investment of friends and family and a masters thesis on the subject, Elewa pilots in 5 secondary schools across Kenya. 
        Results are through the roof.
      `
    },
    {
      date: "2018",
      title: "Commercial exploration",
      description: `
        Succesfully piloting in 5 schools, Elewa Education is ready for the market. Elewa founds Elewa Investment, a cooperative fund in Belgium 
        aimed at fueling the growth of Elewa. Elewa launching four commercial services across Kenya.s
      `
    },
    {
      date: "2019",
      title: "Our award winning year",
      description: `
        Elewa is recognized by UNESCO as Kenyan representative and top 10 innovations in the UNESCO ICT in Education Prize (Theme AI & education). 
        Elewa joins the fourht Cohort of the "Google for Startups Africa" accelerator program.
      `
    },
    {
      date: "2020",
      title: "Elewa Diversifies",
      description: `
        Elewa Education finds product market-fit in the professional training space.
        iTalanta is born. A tech company that provides software development services to clients in Europe and the US.
      `
    },
    {
      date: "2022",
      title: "Conversational Learning",
      description: `
        Elewa Education launches first Conversational learning pilot
      `
    },
    {
      date: "2023",
      title: "Elewa Group",
      description: `
        Elewa NV/Group is born. First investment in a Venture Lab by Elewa Group.
      `
    },
  ];

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

