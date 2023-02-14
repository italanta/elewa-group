import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ElewaGroupMainPageComponent } from './pages/elewa-group-main-page/elewa-group-main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

@NgModule({
  imports: [CommonModule, RouterModule, ButtonsModule],
  declarations: [HeaderComponent, ElewaGroupMainPageComponent, FooterComponent, ],
  exports: [ElewaGroupMainPageComponent],
})
export class LayoutModule {}
