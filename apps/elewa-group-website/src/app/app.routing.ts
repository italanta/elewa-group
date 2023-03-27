import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


export const ELEWA_GROUP_ROUTES: Route[] = [

  // { path: '*', redirectTo: 'home', pathMatch: 'full' },

  { path: '', loadChildren: () => import('libs/pages/elewa/home/src/lib/features-elewa-home.module').then(m => m.HomePageModule) },

  // about us page route
  { path: 'about', loadChildren: () => import('libs/pages/elewa/about-us/src/lib/elewa-about-us.module').then(m => m.AboutUsModule) },

  // activities page route
  { path: 'activities', loadChildren: () => import('libs/pages/elewa/activities/src/lib/pages-elewa-activities.module').then(m => m.ActivitiesModule) },

  // social-impact page route
  { path: 'social-impact', loadChildren: () => import('libs/pages/elewa/social-impact/src/lib/pages-elewa-social-impact.module').then(m => m.SocialImpactModule) },

  // invest page route
  {  path: 'invest', loadChildren: () => import('libs/pages/elewa/invest/src/lib/pages-elewa-invest.module').then(m => m.InvestPageModule)},

  // news page route
  {  path: 'news', loadChildren: () => import('libs/pages/elewa/news/src/lib/pages-elewa-news.module').then(m => m.NewsPageModule)},

  // contact page route
  {  path: 'contact', loadChildren: () => import('libs/pages/elewa/contact/src/lib/pages-elewa-contact.module').then(m => m.ContactPageModule)},

  // contact page route
  {  path: 'careers', loadChildren: () => import('libs/pages/elewa/careers/src/lib/pages-elewa-careers.module').then(m => m.CareersModule)},

  // contact page route
  {  path: 'brands', loadChildren: () => import('libs/pages/elewa/brands/src/lib/pages-elewa-brands.module').then(m => m.BrandsModule)},

  // venture-labs route
  {  path: 'venture-labs', loadChildren: () => import('libs/pages/elewa/venture-labs/src/lib/pages-elewa-venture-labs.module').then(m => m.PagesElewaVentureLabsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_GROUP_ROUTES,
      {
        scrollPositionRestoration: "enabled",
        enableTracing: true,
        onSameUrlNavigation: 'reload'
      },
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
