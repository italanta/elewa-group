import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@elewa-group/elements/layout';
import { ButtonsModule } from '@elewa-group/features/components/buttons';

import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';

import { ContactMailService } from './services/contact-mail.service';

import { ContactRoutingModule } from './contact.routing';

@NgModule({

  imports: [
    CommonModule, 
    LayoutModule, 
    ReactiveFormsModule, 
    ButtonsModule,

    ContactRoutingModule, 
  ],

  declarations: [
    ContactPageComponent, 
    ContactBannerComponent,
    ContactFormComponent
  ],

  providers: [ContactMailService]

})
export class ContactPageModule { }