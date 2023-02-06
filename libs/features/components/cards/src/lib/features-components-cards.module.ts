import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupCardComponent } from './pages/elewa-group-card/elewa-group-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupCardComponent],
  exports: [ElewaGroupCardComponent],
})
export class CardsModule {}
