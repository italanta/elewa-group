
import { NgModule } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';

export const ELEWA_GROUP_WEBSITE_ROUTES: Route[] = [

  // App Entry-Point

  { path: '', redirectTo: `home`, pathMatch: 'full' },
  {  path: 'home', redirectTo: 'home/en'  },
  {  path: 'activities', redirectTo: 'activities/en'  },
  {  path: 'aboutUs', redirectTo: 'aboutUs/en'  },
  {  path: 'socialImpact', redirectTo: 'socialImpact/en'  },
  {  path: 'invest', redirectTo: 'invest/en'  },
  {  path: 'news', redirectTo: 'news/en'  },
  {  path: 'contact', redirectTo: 'contact/en'  }

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