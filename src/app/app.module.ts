import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing-module";
import {ValidationContactsModule} from "./validation-contacts/validation-contacts.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {WelcomeModule} from "./welcome/welcome.module";
import {ShareModule} from "./share/share.module";
import {GiphySearchManualComponentModule} from "./giphy/giphy-search-manual/giphy-search-manual.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    AppRoutingModule,
    ValidationContactsModule,
    WelcomeModule,
    GiphySearchManualComponentModule,

    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
