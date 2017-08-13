import {NgModule} from '@angular/core';
import {WelcomeComponent} from "./welcome.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: WelcomeComponent }
    ])
  ],
  declarations: [ WelcomeComponent ]
})
export class WelcomeModule { }
