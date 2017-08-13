import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from "./welcome.component";
import {ShareModule} from "../share/share.module";
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
