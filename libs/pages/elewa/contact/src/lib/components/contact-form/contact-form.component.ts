import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit{
  message1 = 'Send message';

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildContactForm();
  }

  buildContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      companyName: '',
      category: '',
      message: '',
    });
  }
}
