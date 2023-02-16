import { NgModule } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';

export const ELEWA_GROUP_WEBSITE_ROUTES: Route[] = [

  // App Entry-Point

  // { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home/en', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home/en' },
  { path: 'home/en', loadChildren: () => import('libs/pages/elewa/home/src/lib/features-elewa-home.module').then(m => m.HomePageModule) },

  // about us page route
  { path: 'about', redirectTo: 'about/en' },
  { path: 'about/en', loadChildren: () => import('libs/pages/elewa/about-us/src/lib/elewa-about-us.module').then(m => m.AboutUsModule) },

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
