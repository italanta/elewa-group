import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-beyond-business',
  templateUrl: './beyond-business.component.html',
  styleUrls: ['./beyond-business.component.scss'],
})
export class BeyondBusinessComponent {
  imageURL = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png'
  paragraphTexts = ['Some of that youthful energy is channeled beyond business. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers', 'These projects don\'t necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.']
  titleText = `Beyond business`
  imagePlacement = 'left'
  backgroundColor = '#f4f4f4'
}
