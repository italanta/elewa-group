import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-contact-banner',
  templateUrl: './contact-banner.component.html',
  styleUrls: ['./contact-banner.component.scss'],
})
export class ContactBannerComponent {
@Input() title = 'Contact';
@Input() questionEmail = 'info@elewagroup.com';
@Input() pressEmail = 'press@elewa.com';
@Input() mobile = '+254 78 92 27 755'
}
