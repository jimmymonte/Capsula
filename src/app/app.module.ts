import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { DadosDestinatariosComponent } from './telasCapsula/dados-destinatarios/dados-destinatarios.component';
import { DadosCapsulaComponent } from './telasCapsula/dados-capsula/dados-capsula.component';
import { CategoriasCapsulaComponent } from './telasCapsula/caminhoCarol/categorias-capsula/categorias-capsula.component';
import { MelhoresMomentosComponent } from './telasCapsula/caminhoCarol/melhores-momentos/melhores-momentos.component';
import { CategoriasCapsulaGrupoComponent } from './telasCapsula/caminhoGrupo/categorias-capsula-grupo/categorias-capsula-grupo.component';
import { MelhoresMomentosBetaComponent } from './telasCapsula/caminhoCarol/melhores-momentos-beta/melhores-momentos-beta.component';
import { MelhoresMomentosAlfaComponent } from './telasCapsula/caminhoCarol/melhores-momentos-alfa/melhores-momentos-alfa.component';
import { MelhoresMomentosBetaGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-beta-grupo/melhores-momentos-beta-grupo.component';
import { MelhoresMomentosAlfaGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-alfa-grupo/melhores-momentos-alfa-grupo.component';
import { MelhoresMomentosGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-grupo/melhores-momentos-grupo.component';
import { TelaboasvindasComponent } from './telasCapsula/telaboasvindas/telaboasvindas.component';


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
    MelhoresMomentosAlfaComponent,
    MelhoresMomentosBetaGrupoComponent,
    MelhoresMomentosAlfaGrupoComponent,
    MelhoresMomentosGrupoComponent,
    TelaboasvindasComponent
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
