import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredcopComponent } from './components/credcop/credcop.component';
import { ListComponent } from './components/credcop/list/list.component';
import { CreateComponent } from './components/credcop/create/create.component';
import { EscolhasComponent } from './components/credcop/escolhas/escolhas.component';

@NgModule({
  declarations: [
    AppComponent,
    CredcopComponent,
    ListComponent,
    CreateComponent,
    EscolhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
