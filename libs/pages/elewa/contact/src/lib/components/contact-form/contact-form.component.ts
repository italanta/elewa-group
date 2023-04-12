
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as AOS from 'aos';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  url = "contact";
  message = "Send Message";

  contactData: FormGroup;

  constructor () {}

  ngOnInit(){
    AOS.init({once: true});
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