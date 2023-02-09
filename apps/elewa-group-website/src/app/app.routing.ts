import { NgModule } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';

export const ELEWA_GROUP_WEBSITE_ROUTES: Route[] = [

  // App Entry-Point

  { path: '', redirectTo: `home`, pathMatch: 'full' },
  {  path: 'home', redirectTo: 'home/en'  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_GROUP_WEBSITE_ROUTES,
      {
        scrollPositionRestoration: 'enabled',
        enableTracing: true, 
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }