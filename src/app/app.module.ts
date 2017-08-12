import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GiphySearchManualComponentModule} from "./giphy/giphy-search-manual/giphy-search-manual.module";
import {AppRoutingModule} from "./app-routing-module";
import {ValidationContactsModule} from "./validation-contacts/validation-contacts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GiphySearchManualComponentModule,
    AppRoutingModule,
    ValidationContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
