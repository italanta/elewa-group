import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureLabsDiscoverComponent } from './components/venture-labs-discover/venture-labs-discover.component';
import { BannersModule } from '@elewa-group/features/components/banners';

@NgModule({
  imports: [CommonModule, BannersModule],
  declarations: [VentureLabsDiscoverComponent],
  exports: [VentureLabsDiscoverComponent]
})
export class PagesElewaVentureLabsModule {}
