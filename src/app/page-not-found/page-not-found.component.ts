import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  template:'<P>Página não encontrada</P> <img src="https://media.giphy.com/media/FCRVwQ2oF1Bmg/giphy.gif" (click)="back()">'
})
export class PageNotFoundComponent {

  constructor(private location: Location) { }

  back(): void{
    this.location.back();
  }
}
