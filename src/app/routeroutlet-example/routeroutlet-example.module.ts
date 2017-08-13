import {NgModule} from '@angular/core';
import {RouteroutletExampleComponent} from "./routeroutlet-example.component";
import {RouterModule} from "@angular/router";
import {PessoaComponent} from "./pessoa/pessoa.component";
import {EnderecoComponent} from "./endereco/endereco.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'routeroutlet', component: RouteroutletExampleComponent, children: [
        { path: 'pessoa', component:PessoaComponent, outlet:'mestre'},
        { path: 'endereco', component:EnderecoComponent, outlet:'detalhe'},
      ]}
    ])
  ],
  declarations: [ RouteroutletExampleComponent, EnderecoComponent, PessoaComponent ],
  exports: [ RouteroutletExampleComponent ]
})
export class RouteroutletExampleModule { }
