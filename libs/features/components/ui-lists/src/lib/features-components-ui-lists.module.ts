import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElewaGroupVerticalListOneComponent } from './elewa-group-vertical-list-one/elewa-group-vertical-list-one.component';
import { ElewaGroupHorizontalListOrgsComponent } from './elewa-group-horizontal-list-orgs/elewa-group-horizontal-list-orgs.component';
import { ElewaGroupVerticalListAllComponent } from './elewa-group-vertical-list-all/elewa-group-vertical-list-all.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaGroupVerticalListAllComponent,
  ],
  exports: [
    ElewaGroupVerticalListOneComponent,
    ElewaGroupHorizontalListOrgsComponent,
    ElewaGroupVerticalListAllComponent
  ],
})
export class UiListsModule {}
