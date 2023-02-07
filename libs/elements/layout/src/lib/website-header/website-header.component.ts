import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-website-header',
  templateUrl: './website-header.component.html',
  styleUrls: ['./website-header.component.scss'],
})
export class WebsiteHeaderComponent implements OnInit {
  isNavLinks!: boolean;
  ngOnInit(): void {
    this.isNavLinks = false;
  }
  setVisibility() {
    this.isNavLinks = !this.isNavLinks;
  }
}
