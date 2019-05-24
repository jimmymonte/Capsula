import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { DadosDestinatariosComponent } from './telasCapsula/dados-destinatarios/dados-destinatarios.component';
import { DadosCapsulaComponent } from './telasCapsula/dados-capsula/dados-capsula.component';
import { CategoriasCapsulaComponent } from './telasCapsula/categorias-capsula/categorias-capsula.component';
import { MelhoresMomentosComponent } from './telasCapsula/melhores-momentos/melhores-momentos.component';
import { CategoriasCapsulaGrupoComponent } from './telasCapsula/categorias-capsula-grupo/categorias-capsula-grupo.component';
import { MelhoresMomentosBetaComponent } from './telasCapsula/melhores-momentos-beta/melhores-momentos-beta.component';
import { MelhoresMomentosAlfaComponent } from './telasCapsula/melhores-momentos-alfa/melhores-momentos-alfa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TelainicialComponent,
    DadosDestinatariosComponent,
    DadosCapsulaComponent,
    CategoriasCapsulaComponent,
    MelhoresMomentosComponent,
    CategoriasCapsulaGrupoComponent,
    MelhoresMomentosBetaComponent,
    MelhoresMomentosAlfaComponent
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
