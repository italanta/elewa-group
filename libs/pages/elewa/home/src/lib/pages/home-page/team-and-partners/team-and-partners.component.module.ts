import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamAndPatrnersComponent } from './team-and-partners.component';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
  declarations: [TeamAndPatrnersComponent],
  exports: [TeamAndPatrnersComponent]  
})
export class TeamAndPartnersModule {}