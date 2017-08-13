import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.interface";
import {FormValidator} from "./form-validator";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  user: FormGroup;
  constructor() { }

  ngOnInit() {
    let emailFormcontrol = new FormControl('', Validators.required);

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),

      account: new FormGroup({
        email: emailFormcontrol,
        confirm: new FormControl('', [Validators.required, FormValidator.sameValue(emailFormcontrol)])
      })
    });
  }

  // destructuring  ele destrincha o retorno e retorna apenas o que pedimos, queremos apenas o value e o valid que retorna do html.
  onSubmit({ value, valid} : { value: User, valid: boolean}){
    console.log(value, valid);
  }

}
