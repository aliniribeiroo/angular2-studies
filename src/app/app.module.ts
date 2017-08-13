import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing-module";
import {ValidationContactsModule} from "./validation-contacts/validation-contacts.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {ShareModule} from "./share/share.module";
import {BrowserModule} from "@angular/platform-browser";
import {PipeComponent} from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AppRoutingModule,
    ValidationContactsModule,

    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
