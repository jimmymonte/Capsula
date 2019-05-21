import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { DadosDestinatariosComponent } from './telasCapsula/dados-destinatarios/dados-destinatarios.component';
import { DadosCapsulaComponent } from './telasCapsula/dados-capsula/dados-capsula.component';
import { CategoriasCapsulaComponent } from './telasCapsula/categorias-capsula/categorias-capsula.component';


const routes: Routes = [
	{ path: 'telainicial', component: TelainicialComponent },
	{ path: '', redirectTo: '/telainicial', pathMatch: 'full'},
	{ path: 'edicaodestinatarios', component: DadosDestinatariosComponent},
	{ path: 'edicaocapsula', component: DadosCapsulaComponent },
	{ path: 'categoriascapsula', component: CategoriasCapsulaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
