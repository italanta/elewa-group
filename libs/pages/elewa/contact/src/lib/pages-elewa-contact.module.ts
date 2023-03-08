import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';

import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({

  imports: [CommonModule, ContactRoutingModule, LayoutModule,ReactiveFormsModule,ButtonsModule],
  declarations: [ContactPageComponent, ContactBannerComponent,
    ContactFormComponent],

})
export class ContactPageModule {}