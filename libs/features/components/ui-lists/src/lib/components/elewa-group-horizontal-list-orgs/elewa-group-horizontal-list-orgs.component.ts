import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-group-horizontal-list-orgs',
  templateUrl: './elewa-group-horizontal-list-orgs.component.html',
  styleUrls: ['./elewa-group-horizontal-list-orgs.component.scss'],
})
export class ElewaGroupHorizontalListOrgsComponent {
  @Input() logos = [
    {
      src: "https://rwanda.vvob.org/sites/rwanda/files/styles/780pxx330px/public/images/mainimagebig/ok.jpg?itok=zMR2_g-z",
      alt: "rwanda vvob logo",
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]

    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/63d89bcb1deafc79af380b8b/1675140077581-RTP7AV7QC00S4XOTI0OV/logo.png?format=1500w",
      alt: "Farm Better Logo", 
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]     
    },
    {
      src: "https://www.enabel.be/app/uploads/2022/06/enabel-logo-white.svg",
      alt: "Enabel logo", 
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]     
    },
    {
      src: "https://savics.org/wp-content/uploads/2020/10/SavicsREF_Horizontal_RGB.jpg",
      alt: "Savics logo", 
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]     
    },
    {
      src: "https://kenyascouts.org/new/wp-content/uploads/2021/06/ksa_logo.png",
      alt: "Scouts logo", 
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]     
    },
    {
      src: "https://usercontent.one/wp/www.elewa.education/wp-content/uploads/2020/09/logo-2.0.png",
      alt: "Elewa Education logo", 
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_ 960w",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg 1280w",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg 1920w"
      ]    
    },
    
    {
      src: "https://pbs.twimg.com/profile_images/1367344362254983168/dP81BTKD_400x400.jpg",
      alt: "WWF logo",   
      srcset: [
        "https://rwanda.vvob.org/sites/rwanda/files/styles/200px/public/logo-white_1_0.png?itok=lEAU5wt_",
        "https://pbs.twimg.com/profile_images/1333450887080112131/y17zlw7O_400x400.jpg",
        "https://southafrica.vvob.org/sites/southafrica/files/logovvob_neg890px.jpg"
      ]  
    }
  ];

  joinSrcSet(list:string[]):string {  
    console.log(list.join(",  "))   
    return list.join()
  }
}
