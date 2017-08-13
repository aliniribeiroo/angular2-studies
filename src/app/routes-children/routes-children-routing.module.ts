import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoNestedComponent } from './child-two-nested.component';
import { ComponentOneComponent } from './component-one.component';
import { ComponentTwoComponent } from './component-two.component';
import {RoutesChildrenComponent} from "./routes-children.component";
import {ChildTwoComponent} from "./children-two.component";

const routes: Routes = [

  {
    path: 'routes-children', component: RoutesChildrenComponent,
    children: [
      { path: '', redirectTo: 'component-one', pathMatch: 'full' },
      { path: 'component-one', component: ComponentOneComponent },
      {
        path: 'component-two/:id', component: ComponentTwoComponent,
        children: [
          { path: '', redirectTo: 'child-one', pathMatch: 'full' },
          { path: 'child-one', component: ChildOneComponent },
          {
            path: 'child-two', component: ChildTwoComponent,
            children: [
              { path: '', redirectTo: 'child-one', pathMatch: 'full' },
              { path: 'child-one', component: ChildOneComponent },
              { path: 'child-two-nested', component: ChildTwoNestedComponent }
            ]
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class RoutesChildrenRoutingModule {
}
