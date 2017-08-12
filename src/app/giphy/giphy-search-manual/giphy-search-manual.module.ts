import {NgModule} from '@angular/core';

import {GiphySearchManualComponent} from './giphy-search-manual.component';
import {GiphySearchService} from "../giphy-search.service";
import {HttpModule} from "@angular/http";
import {ShareModule} from "../../share/share.module";
import {GiphySearchListModule} from "../giphy-search-list/giphy-search-list.module";
import {GiphySearchManualComponentRoutingModule} from "./giphy-search-routing.moule";

@NgModule({
  imports: [
    ShareModule,
    GiphySearchListModule,
    GiphySearchManualComponentRoutingModule
  ],
  exports: [
    GiphySearchManualComponent,
    HttpModule
  ],
  declarations: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchManualComponentModule {
}
