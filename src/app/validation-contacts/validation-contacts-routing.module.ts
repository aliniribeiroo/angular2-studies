import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ValidationContactsComponent} from "./validation-contacts.component";


const routes: Routes = [
  {path: 'validation-contact', component: ValidationContactsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationContactsRoutingModule {
}
