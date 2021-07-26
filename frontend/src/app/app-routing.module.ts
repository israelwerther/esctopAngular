import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/credcop/create/create.component';
import { CredcopComponent } from './components/credcop/credcop.component';
import { EscolhasComponent } from './components/credcop/escolhas/escolhas.component';
import { ListComponent } from './components/credcop/list/list.component';

const routes: Routes = [
  {
    path: 'credcoop', component: CredcopComponent,
    children: [
      {
        path: '', component: EscolhasComponent,
      },
      {
        path: 'create', component: CreateComponent,
      },
      {
        path: 'list', component: ListComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
