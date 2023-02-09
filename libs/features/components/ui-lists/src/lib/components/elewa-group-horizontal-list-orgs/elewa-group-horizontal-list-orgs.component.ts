import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-horizontal-list-orgs',
  templateUrl: './elewa-group-horizontal-list-orgs.component.html',
  styleUrls: ['./elewa-group-horizontal-list-orgs.component.scss'],
})
export class ElewaGroupHorizontalListOrgsComponent {
  @Input() items = [
    {
      imgUrl: "https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg"
    },
    {
      imgUrl: "https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg"
    },
    {
      imgUrl: "https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png"
    },
    {
      imgUrl: "https://media.istockphoto.com/id/1140553971/vector/abstract-business-arrow-up-logo-icon-vector-design-template.jpg?s=612x612&w=0&k=20&c=N6bFWaKfmFokGSfTNJhEbYDnF1RplWomcNrOKI65cWU="
    },
    {
      imgUrl: "https://www.aabhishek.com/wp-content/uploads/2020/01/Visa-Company-Logo-Oci-Visa-Center-Logo-Logo-Design-company-USA-London-India-Dubai.jpg"
    },
    {
      imgUrl: "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg"
    },
    {
      imgUrl: "https://img.freepik.com/free-psd/editable-black-business-logo-psd-embossed-style_53876-123268.jpg?w=2000"
    }
  ]
}
