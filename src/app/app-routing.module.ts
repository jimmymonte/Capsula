import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { DadosDestinatariosComponent } from './telasCapsula/dados-destinatarios/dados-destinatarios.component';
import { DadosCapsulaComponent } from './telasCapsula/dados-capsula/dados-capsula.component';
import { CategoriasCapsulaComponent } from './telasCapsula/categorias-capsula/categorias-capsula.component';
import { MelhoresMomentosComponent } from './telasCapsula/melhores-momentos/melhores-momentos.component';
import { CategoriasCapsulaGrupoComponent } from './telasCapsula/categorias-capsula-grupo/categorias-capsula-grupo.component';
import { MelhoresMomentosBetaComponent} from './telasCapsula/melhores-momentos-beta/melhores-momentos-beta.component';
import { MelhoresMomentosAlfaComponent } from './telasCapsula/melhores-momentos-alfa/melhores-momentos-alfa.component';

const routes: Routes = [
	{ path: 'telainicial', component: TelainicialComponent },
	{ path: '', redirectTo: '/telainicial', pathMatch: 'full'},
	{ path: 'edicaodestinatarios', component: DadosDestinatariosComponent},
	{ path: 'edicaocapsula', component: DadosCapsulaComponent },
	{ path: 'categoriascapsula', component: CategoriasCapsulaComponent},
	{ path: 'melhoresmomentos', component: MelhoresMomentosComponent},
	{ path: 'categoriascapsulagrupo', component: CategoriasCapsulaGrupoComponent},
	{ path: 'melhoresmomentosbeta', component: MelhoresMomentosBetaComponent},
	{ path: 'melhoresmomentosalfa', component: MelhoresMomentosAlfaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
