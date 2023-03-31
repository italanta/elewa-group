import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-culture',
  templateUrl: './about-us-culture.component.html',
  styleUrls: ['./about-us-culture.component.scss'],
})

export class AboutUsCultureComponent {
  cultures = [
    {
      img: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png ',
      title: 'Cooperative',
      description: 'One for all ,all for one! We have a cooperative and open mindset. If one of us grows and does well, all should follow.'
    },
    {
      img: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png',
      title: 'Ownership',
      description: `We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early and avoid catastrophe.`
    },
    {
      img: 'https://static.thenounproject.com/png/1721983-200.png',
      title: 'Detail',
      description: `We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find the global standard a worthy rival to continuously challenge.`
    },
    {
      img: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png',
      title: 'Empathy',
      description: 'We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need.'
    },
    {
      img: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png',
      title: 'Transparency',
      description: 'Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within.'
    }
  ]
}

