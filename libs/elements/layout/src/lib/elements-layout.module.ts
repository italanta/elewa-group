import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ButtonsModule} from '@elewa-group/features/components/buttons'

import { HeaderComponent } from './components/header/header.component';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';
import { ElewaGroupMainPageComponent } from './pages/elewa-group-main-page/elewa-group-main-page.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({

  imports: [CommonModule, RouterModule,ButtonsModule],
  declarations: [HeaderComponent, ElewaGroupMainPageComponent, ElewaHeroComponent, FooterComponent],
  exports: [HeaderComponent, ElewaGroupMainPageComponent,ElewaHeroComponent, FooterComponent],
})
export class LayoutModule {}
