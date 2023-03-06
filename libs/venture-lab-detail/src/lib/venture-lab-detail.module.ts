import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureDetailFoundersComponent } from './venture-detail-founders/venture-detail-founders.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VentureDetailFoundersComponent],
  exports: [VentureDetailFoundersComponent]
})
export class VentureLabDetailModule {}
