import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs';

@Component({
  selector: 'elewa-group-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-group-website';

  constructor(private _router$$: Router, private _activatedRoute$$: ActivatedRoute, private _title$$: Title) {
    this._router$$.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this._activatedRoute$$.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this._title$$.setTitle(data + ' - Elewa Group');
      }
    });
  }
}
