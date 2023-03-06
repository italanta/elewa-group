import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { LayoutModule } from '@elewa-group/elements/layout';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';

import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    LayoutModule,
  ],
  declarations: [ContactPageComponent, ContactFormComponent, ContactBannerComponent],
})
export class ContactPageModule {}
