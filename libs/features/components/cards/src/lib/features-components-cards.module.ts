import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElewaGroupCardComponent } from './cards/elewa-group-card/elewa-group-card.component';
import { ElewaVerticalIconAndTextComponent } from './cards/elewa-vertical-icon-and-text/elewa-vertical-icon-and-text.component';
import { ElewaKeyFigureCardComponent } from './cards/elewa-key-figure-card/elewa-key-figure-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupCardComponent,
    ElewaVerticalIconAndTextComponent,
    ElewaKeyFigureCardComponent,
  ],
  exports: [ElewaGroupCardComponent, ElewaVerticalIconAndTextComponent, ElewaKeyFigureCardComponent],
})
export class CardsModule {}