import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-image-and-text-banner',
  templateUrl: './elewa-group-image-and-text-banner.component.html',
  styleUrls: ['./elewa-group-image-and-text-banner.component.scss'],
})
export class ElewaGroupImageAndTextBannerComponent {

  @Input() bannerData = [
    {
      imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png",
      title: "Social enterprise as a means of develpoment",
      paragraph: "With young dynamic population that is eager to contribute to global economy, East-Africa has a lot to offer to the world.Notwithstanding our acknowledgement of the role development organizations play, we believe that business has an important role to play as well in scalable and self-sustainable (social) development of the community.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png",
      title: "A cooperative mindset",
      paragraph: "Elewa's businesses have one common objective, to unlock true potential of individuals, teams, and communities. All our talents are enrolled in a personal growth track. In turn, they contribute their own growth towards the growth of others, the group and their communities.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png",
      title: "Beyond business",
      paragraph: "Some of that youthful energy is channeled beyond business.Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu anfd our open-source coding initiatives providing entry-level opportunities to hundresds of junior engineers.",
      paragraph2: "These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."
    },
    {
      imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Images/gettyimages-525701055-2048x2048_g7nbt1.png",
      title: "Open knowledge",
      paragraph: "What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic patnerships.",
      paragraph2: "We build today, with a lens on tomorrow."
    }
  ]

 }
