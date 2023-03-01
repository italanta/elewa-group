import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ButtonsModule } from '@elewa-group/features/components/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ButtonsModule, FormsModule, ReactiveFormsModule],
  declarations: [ContactPageComponent, ContactFormComponent],
})
export class ContactPageModule {}
