import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  message = "Send Message"
  url = "contact"
  contactData:FormGroup

  handleSubmit(){
    console.log(this.contactData.value)
  }
 
}
