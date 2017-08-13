import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'capitalizePipe'
})

export class CapitalizePipe implements PipeTransform {
  transform(text: string): string {
    text = text.trim();
    return text.charAt(0).toUpperCase() + text.substr(1).toLocaleLowerCase();
  }

}
