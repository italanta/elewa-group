import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-elewa-group-main-page',
  templateUrl: './elewa-group-main-page.component.html',
  styleUrls: ['./elewa-group-main-page.component.scss'],
})
export class ElewaGroupMainPageComponent implements OnInit {
  route: string;
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.route = this.router.url.split('/')[1];
  }
}
