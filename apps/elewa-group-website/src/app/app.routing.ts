import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


export const ELEWA_GROUP_ROUTES: Route[] = [

  // { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home/en', pathMatch: 'full' },
  { path: 'home/en', loadChildren: () => import('libs/pages/elewa/home/src/lib/features-elewa-home.module').then(m => m.HomePageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_GROUP_ROUTES,
      {
        scrollPositionRestoration: 'enabled',
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