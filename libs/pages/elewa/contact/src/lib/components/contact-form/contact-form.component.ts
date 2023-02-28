import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  message = "Send Message"
  url = "contact"
  contactData = new FormGroup({ 
    name: new FormControl(''),
    company_name: new FormControl(''),
    email: new FormControl(''),
    option: new FormControl(''),
    message: new FormControl(''),
  })
  handleSubmit(){
    this.contactData.value
  }
}
