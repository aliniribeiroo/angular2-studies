import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module";
import {ValidationContactsComponent} from "./validation-contacts.component";
import {ValidationContactsRoutingModule} from "./validation-contacts-routing.module";
import {ValidationContactsService} from "./validation-contacts.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    ShareModule,
    ValidationContactsRoutingModule,
    HttpModule
  ],
  declarations: [ ValidationContactsComponent ],
  providers: [ ValidationContactsService ]
})
export class ValidationContactsModule { }
