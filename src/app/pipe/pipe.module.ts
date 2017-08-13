import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeComponent} from "./pipe.component";
import {PipeRoutingModuleModule} from "./pipe-routing.module";
import {PersonTypePipe} from "../share/pipe/type-person.pipe";
import {CapitalizePipe} from "../share/pipe/capitalize.pipe";

@NgModule({
  imports: [
    CommonModule,
    PipeRoutingModuleModule
  ],
  declarations: [PipeComponent, PersonTypePipe, CapitalizePipe ]
})
export class PipeModule { }
