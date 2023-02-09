import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupCardComponent } from './pages/elewa-group-card/elewa-group-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupCardComponent],
  exports: [ElewaGroupCardComponent],
})
export class CardsModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupCardComponent } from './cards/elewa-group-card/elewa-group-card.component';
import { ElewaVerticalIconAndTextComponent } from './cards/elewa-vertical-icon-and-text/elewa-vertical-icon-and-text.component'


@NgModule({
  imports: [CommonModule],
  declarations: [ElewaGroupCardComponent, ElewaVerticalIconAndTextComponent],
  exports: [ ElewaGroupCardComponent, ElewaVerticalIconAndTextComponent]
})
export class CardsModule {}
