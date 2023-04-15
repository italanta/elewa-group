import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'elewa-group-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(private _router$$: Router) { }

  goToLocation() {
    window.open('https://goo.gl/maps/qvfSXLhuTJzxX7j29', '_blank');
  }

  goToPage(url: string) {
    if (url.includes('http')) {
      window.open(url, '_blank');
    } else {
      this._router$$.navigate([url]);
    }
  }

  goToSocial(url: string) {
    window.open(url, '_blank');
  }
}
