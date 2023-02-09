import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ElewaGroupImageAndTextBannerComponent } from './components/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ElewaGroupImageAndTextBannerComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}
