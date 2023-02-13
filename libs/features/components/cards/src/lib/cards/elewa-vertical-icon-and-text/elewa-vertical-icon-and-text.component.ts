import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-vertical-icon-and-text',
  templateUrl: './elewa-vertical-icon-and-text.component.html',
  styleUrls: ['./elewa-vertical-icon-and-text.component.scss'],
})
export class ElewaVerticalIconAndTextComponent {
  properties=[
    {
      icon:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Holistic_id4kra.png",
      title:"Holistic solutions",
      description:"We go beyond a simple patch-up but develop lasting solutions through holistic design"
    },
    {

      icon:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
      title:"Impact",
      description:"Impact as a direct or distinct result. All our respective organizations have underlying theories of change."
    },
    {
      icon:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png",
      title:"Cooperative",
      description:"Sharing is caring. We share what we learn. All through our internal projects are open source."
    },
  ]
}
