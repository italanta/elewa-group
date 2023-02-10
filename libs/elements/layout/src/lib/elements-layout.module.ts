import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ElewaHeroComponent, LayoutPageComponent],
  exports: [LayoutPageComponent],
})
export class LayoutModule {}
