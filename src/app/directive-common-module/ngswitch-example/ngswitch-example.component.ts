import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngswitch-example',
  templateUrl: './ngswitch-example.component.html'
})
export class NgswitchExampleComponent{

  format: Number = 0;

  setFormatter(num: Number){
    this.format = num;
  }

}
