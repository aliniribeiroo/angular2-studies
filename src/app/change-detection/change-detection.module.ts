import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeDetectionComponent} from "./change-detection.component";
import {PipeRoutingModuleModule} from "./change-detection-routing.module";
import {MovieComponent} from "./movie.component";

@NgModule({
  imports: [
    CommonModule,
    PipeRoutingModuleModule
  ],
  declarations: [  ChangeDetectionComponent, MovieComponent ]
})
export class ChangeDetectionModule { }
