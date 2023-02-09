import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaHeroComponent, HeaderComponent],
  exports: [ElewaHeroComponent, HeaderComponent]
})

export class LayoutModule {}
