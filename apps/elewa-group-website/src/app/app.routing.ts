
import { NgModule } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';

export const ELEWA_GROUP_WEBSITE_ROUTES: Route[] = [

  // App Entry-Point

  { path: '', redirectTo: `home`, pathMatch: 'full' },
  {  path: 'home', redirectTo: 'home/en'  },
  {  path: 'home/en', loadChildren: () => import('libs/pages/elewa/home/src/lib/features-elewa-home.module').then(m => m.HomePageModule)},
  {  path: 'activities', redirectTo: 'activities/en'  },
  {  path: 'activities/en', loadChildren: () => import('libs/pages/elewa/activities/src/lib/features-elewa-home.module').then(m => m.ActivitiesPageModule)},
  {  path: 'aboutUs', redirectTo: 'aboutUs/en'  },
  {  path: 'aboutUs/en', loadChildren: () => import('libs/pages/elewa/aboutUs/src/lib/features-elewa-home.module').then(m => m.AboutPageModule)},
  {  path: 'socialImpact', redirectTo: 'socialImpact/en'  },
  {  path: 'socialImpact/en', loadChildren: () => import('libs/pages/elewa/socialImpact/src/lib/features-elewa-socialImpact.module').then(m => m.SocialImpactPageModule)},
  {  path: 'invest', redirectTo: 'invest/en'  },
  {  path: 'invest/en', loadChildren: () => import('libs/pages/elewa/invest/src/lib/features-elewa-invest.module').then(m => m.InvestPageModule)},
  {  path: 'news', redirectTo: 'news/en'  },
  {  path: 'news/en', loadChildren: () => import('libs/pages/elewa/news/src/lib/features-elewa-news.module').then(m => m.NewsPageModule)},
  {  path: 'contact', redirectTo: 'contact/en'  },
  {  path: 'contact/en', loadChildren: () => import('libs/pages/elewa/contact/src/lib/features-elewa-contact.module').then(m => m.ContactPageModule)},

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