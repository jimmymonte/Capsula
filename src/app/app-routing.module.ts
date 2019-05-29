import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelainicialComponent } from './telasCapsula/telaInicial/telainicial.component';
import { DadosDestinatariosComponent } from './telasCapsula/dados-destinatarios/dados-destinatarios.component';
import { DadosCapsulaComponent } from './telasCapsula/dados-capsula/dados-capsula.component';
import { CategoriasCapsulaComponent } from './telasCapsula/caminhoCarol/categorias-capsula/categorias-capsula.component';
import { MelhoresMomentosComponent } from './telasCapsula/caminhoCarol/melhores-momentos/melhores-momentos.component';
import { CategoriasCapsulaGrupoComponent } from './telasCapsula/caminhoGrupo/categorias-capsula-grupo/categorias-capsula-grupo.component';
import { MelhoresMomentosBetaComponent} from './telasCapsula/caminhoCarol/melhores-momentos-beta/melhores-momentos-beta.component';
import { MelhoresMomentosAlfaComponent } from './telasCapsula/caminhoCarol/melhores-momentos-alfa/melhores-momentos-alfa.component';
import { MelhoresMomentosBetaGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-beta-grupo/melhores-momentos-beta-grupo.component';
import { MelhoresMomentosAlfaGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-alfa-grupo/melhores-momentos-alfa-grupo.component';
import { MelhoresMomentosGrupoComponent } from './telasCapsula/caminhoGrupo/melhores-momentos-grupo/melhores-momentos-grupo.component';
import { TelaboasvindasComponent } from './telasCapsula/telaboasvindas/telaboasvindas.component';



const routes: Routes = [
	{ path: 'telainicial', component: TelainicialComponent },
	{ path: '', redirectTo: '/telaboasvindas', pathMatch: 'full'},
	{ path: 'edicaodestinatarios', component: DadosDestinatariosComponent},
	{ path: 'edicaocapsula', component: DadosCapsulaComponent },
	{ path: 'categoriascapsula', component: CategoriasCapsulaComponent},
	{ path: 'melhoresmomentos', component: MelhoresMomentosComponent},
	{ path: 'categoriascapsulagrupo', component: CategoriasCapsulaGrupoComponent},
	{ path: 'melhoresmomentosbeta', component: MelhoresMomentosBetaComponent},
	{ path: 'melhoresmomentosalfa', component: MelhoresMomentosAlfaComponent},
	{ path: 'melhoresmomentosbetagrupo', component: MelhoresMomentosBetaGrupoComponent},
	{ path: 'melhoresmomentosalfagrupo', component: MelhoresMomentosAlfaGrupoComponent},
	{ path: 'melhoresmomentosgrupo', component: MelhoresMomentosGrupoComponent},
	{ path: 'telaboasvindas', component: TelaboasvindasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
