import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {ChangeDetectionComponent} from "./change-detection.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ChangeDetectionComponent }
    ])
  ]
})
export class PipeRoutingModuleModule {
}
