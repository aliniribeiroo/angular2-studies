import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngstyle-example',
  templateUrl: './ngstyle-example.component.html'
})
export class NgstyleExampleComponent {

  borderStyle = '1px solid black';

  cor: string = 'brown';

  alertStyles = {
    'color': 'orange',
    'font-weight': 'bold',
    'borderBottom': this.borderStyle
  };

}
