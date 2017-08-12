import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ValidationContactsService} from "./validation-contacts.service";

@Component({
  selector: 'app-validation-contacts',
  templateUrl: './validation-contacts.component.html',
  styleUrls: ['./validation-contacts.component.css']
})
export class ValidationContactsComponent implements OnInit {

  constructor(private contactService: ValidationContactsService) { }

  ngOnInit() {
  }

  sendContactToServer(contactForm: NgForm){
    console.log(contactForm.value);

    this.contactService.sendContactToServer(contactForm.value).subscribe((response) => {
      console.log('Response: ', response);
      console.log('Fim');
    });
  }
}
