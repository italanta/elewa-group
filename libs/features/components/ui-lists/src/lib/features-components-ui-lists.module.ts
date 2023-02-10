import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupVerticalListOneComponent } from './components/elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaGroupHorizontalListOrgsComponent } from './components/elewa-group-horizontal-list-orgs/elewa-group-horizontal-list-orgs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
  ],
  exports: [ElewaGroupVerticalListOneComponent, ElewaGroupHorizontalListOrgsComponent],
})
export class UiListsModule {}
