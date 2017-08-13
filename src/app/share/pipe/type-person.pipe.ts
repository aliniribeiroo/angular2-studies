import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'typePerson'
})

export class PersonTypePipe implements PipeTransform {
  transform(type: string): string {
    if ('F'=== type){
      return 'Pessoa Física';
    }
    if ('J'=== type){
      return 'Pessoa Jurídica';
    }
    return '';
  }

}

