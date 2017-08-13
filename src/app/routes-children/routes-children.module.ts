import { NgModule } from '@angular/core';
import { ComponentTwoComponent } from './component-two.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one.component';
import { ChildTwoNestedComponent } from './child-two-nested.component';
import { ChildOneComponent } from './child-one.component';
import {RoutesChildrenComponent} from "./routes-children.component";
import {RoutesChildrenRoutingModule} from "./routes-children-routing.module";
import {ChildTwoComponent} from "./children-two.component";


@NgModule({
  imports: [ RoutesChildrenRoutingModule, CommonModule, RouterModule ],
  exports: [],
  declarations: [ RoutesChildrenComponent, ComponentTwoComponent, ComponentTwoComponent, ComponentOneComponent,
    ChildTwoNestedComponent, ChildTwoComponent, ChildOneComponent ],
  providers: [],
})
export class RoutesChildrenModule{
}
