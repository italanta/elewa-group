import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-about-us-we-care',
  templateUrl: './about-us-we-care.component.html',
  styleUrls: ['./about-us-we-care.component.scss'],
})
export class AboutUsWeCareComponent {
  title = "We Care!"
  paragraph1 = "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and our environment.We care for our own, but also care deeply about the context surrounding us."
  paragraph2 = " Our investments are therefore not limited to internal ones but contribure heavily to our community and environment.From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers."
  columns = [
    {
      icon: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Holistic_id4kra.png",
      title: "Holistic solutions",
      description: "We go beyond a simple patch-up but develop lasting solutions through holistic design."
    },
    {
      icon:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
      title: "Impact",
      description: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change."
    },    {
      icon: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png",
      title: "Open data",
      description: "Sharing is caring. We share what we learn. All our internal projects are open source."
    },
  ]

}
