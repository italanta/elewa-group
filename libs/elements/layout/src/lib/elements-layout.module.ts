import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaHeroComponent } from './elewa-hero/elewa-hero.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaHeroComponent],
  exports: [ElewaHeroComponent]
})
export class ElementsLayoutModule {}
