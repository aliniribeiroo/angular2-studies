import { NgModule } from '@angular/core';
import {GiphySearchListComponent} from "./giphy-search-list.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
  imports: [ ShareModule ],
  exports : [ GiphySearchListComponent ],
  declarations: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
