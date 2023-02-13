import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ElewaHeroComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}
