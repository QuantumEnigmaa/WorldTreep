import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { JardinageComponent } from './jardinage.component';
import { AccueilComponent } from './accueil.component';
import { AProposComponent } from './apropos.component';
import { EuropeComponent } from './europe.component';
import { AsieComponent } from './asie.component';
import { AfriqueComponent } from './afrique.component';
import { AmeriqueComponent } from './amerique.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'jardinage', component: JardinageComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'asie', component: AsieComponent },
  { path: 'afrique', component: AfriqueComponent },
  { path: 'amerique', component: AmeriqueComponent },
  { path: 'about', component: AProposComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
