import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactPageComponent, ContactFormComponent],

})
export class ContactPageModule {}
