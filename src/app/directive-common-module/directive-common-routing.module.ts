import {DirectiveCommonComponent} from "./directive-common.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgswitchExampleComponent} from "./ngswitch-example/ngswitch-example.component";
import {NgclassExampleComponent} from "./ngclass-example/ngclass-example.component";
import {NgstyleExampleComponent} from "./ngstyle-example/ngstyle-example.component";

const routes: Routes = [
  {path: '', component: DirectiveCommonComponent},
  {path: 'ngstyle', component: NgstyleExampleComponent},
  {path: 'ngclass', component: NgclassExampleComponent},
  {path: 'ngswitch', component: NgswitchExampleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveCommonRoutingModule {
}
