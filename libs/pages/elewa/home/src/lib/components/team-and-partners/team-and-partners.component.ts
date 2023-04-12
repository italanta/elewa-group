import { Component, Input, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-team-and-partners',
  templateUrl: './team-and-partners.component.html',
  styleUrls: ['./team-and-partners.component.scss'],
})
export class TeamAndPartnersComponent implements OnInit {
  @Input() imageSrc = 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg';
  @Input() imgWidth = '340';
  @Input() imgHeight = '200';

  ngOnInit(): void {
    AOS.init({once: true});
  }
}
