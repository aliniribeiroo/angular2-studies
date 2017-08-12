import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module";
import {ValidationContactsComponent} from "./validation-contacts.component";
import {ValidationContactsRoutingModule} from "./validation-contacts-routing.module";
import {ValidationContactsService} from "./validation-contacts.service";

@NgModule({
  imports: [
    ShareModule,
    ValidationContactsRoutingModule
  ],
  exports:[ ValidationContactsComponent ],
  declarations: [ ValidationContactsComponent ],
  providers: [ ValidationContactsService ]
})
export class ValidationContactsModule { }
