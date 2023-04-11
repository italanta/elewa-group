
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {

  url = "contact";
  message = "Send Message";

  contactData: FormGroup;

  constructor () {}

  ngOnInit(){
    this.buildContactForm()
  }

  handleSubmit(){
    console.log(this.contactData.value)
  }

  buildContactForm(){
    this.contactData = new FormGroup({ 
      name: new FormControl(''),
      company_name: new FormControl(''),
      email: new FormControl(''),
      option: new FormControl(''),
      message: new FormControl(''),
    })
  }

  sendContactEmail() {
    
  }

  goToSocial(url: string) {
    window.open(url, '_blank');
  }
}