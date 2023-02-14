import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';
import { ElewaGroupMainPageComponent } from './pages/elewa-group-main-page/elewa-group-main-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, ElewaGroupMainPageComponent, ElewaHeroComponent],
  exports: [ElewaGroupMainPageComponent, ElewaHeroComponent],
})
export class LayoutModule {}
