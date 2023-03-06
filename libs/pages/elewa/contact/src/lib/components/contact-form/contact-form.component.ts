// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// @Component({
//   selector: 'elewa-group-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.scss'],
// })
// export class ContactFormComponent {

//   contactForm: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required]
//     })
//   }

//   onSubmit() {
//     console.log(this.contactForm.value)
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'elewa-group-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {  contactForm : FormGroup;
  contactUsForm : FormGroup;
  message = "Send Message"

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'yourName': new FormControl(),
      'companyName': new FormControl(),
      'e-mail' : new FormControl(),
      'selectOption': new FormControl(),
      'message': new FormControl(),
  })
}
}