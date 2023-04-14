
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as AOS from 'aos';

import { ContactMailService } from '../../services/contact-mail.service';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  url = "contact";
  message = "Send Message";

  contactDetailsForm: FormGroup;

  sendingEmail: boolean = false;

  constructor(private _fb: FormBuilder,
              private _contactMailService: ContactMailService
  ) {}

  ngOnInit(){
    AOS.init({once: true});
    this.buildContactForm();
  }

  buildContactForm(){
    this.contactDetailsForm = this._fb.group({ 
      name: [''],
      companyName: [''],
      email: [''],
      message: [''],
    })
  }

  sendContactEmail() {
    this.sendingEmail = true;
    const formData = this.contactDetailsForm.value;
    this._contactMailService.createEmailDoc(formData)
                              .then(() => this.completeMailTo(true))
                              .catch(() => this.completeMailTo(false));
  }

  completeMailTo(success: boolean) {
    this.sendingEmail = false;
  }

  goToSocial(url: string) {
    window.open(url, '_blank');
  }
}