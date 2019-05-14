import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { EdicaoCapsulasComponent } from './telasCapsula/edicao-capsulas/edicao-capsulas.component';


const routes: Routes = [
	{ path: 'telainicial', component: TelainicialComponent },
	{ path: '', redirectTo: '/telainicial', pathMatch: 'full'},
	{ path: 'edicaocapsulas', component: EdicaoCapsulasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
