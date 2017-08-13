import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectiveCommonComponent} from "./directive-common.component";
import {DirectiveCommonRoutingModule} from "./directive-common-routing.module";
import {NgswitchExampleComponent} from "./ngswitch-example/ngswitch-example.component";
import {NgclassExampleComponent} from "./ngclass-example/ngclass-example.component";
import {NgstyleExampleComponent} from "./ngstyle-example/ngstyle-example.component";

@NgModule({
  imports: [
    CommonModule,
    DirectiveCommonRoutingModule,
  ],
  declarations: [
    DirectiveCommonComponent,
    NgstyleExampleComponent,
    NgclassExampleComponent,
    NgswitchExampleComponent

  ]
})
export class DirectiveCommonModule { }
