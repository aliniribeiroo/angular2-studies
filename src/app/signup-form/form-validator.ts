import { ValidatorFn } from '@angular/forms';
import { FormControl, AbstractControl } from '../../../node_modules/@angular/forms/src/model';

export class FormValidator {

  static sameValue(formControlReference: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      const isSame = formControlReference.value === control.value;

      return isSame ? null : { 'sameValue': formControlReference.value + ' diferente de ' + control.value };
    };
  }

}
