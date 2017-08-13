import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeComponent} from "./pipe.component";
import {PipeRoutingModuleModule} from "./pipe-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PipeRoutingModuleModule
  ],
  declarations: [PipeComponent ]
})
export class PipeModule { }
