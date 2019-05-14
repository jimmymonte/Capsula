import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { EdicaoCapsulasComponent } from './telasCapsula/edicao-capsulas/edicao-capsulas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EdicaoCapsulasComponent,
    TelainicialComponent,
    EdicaoCapsulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
