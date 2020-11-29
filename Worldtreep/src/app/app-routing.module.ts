import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JardinageComponent } from './jardinage.component';
import { AccueilComponent } from './accueil.component';
import { AProposComponent } from './apropos.component';

const routes: Routes = [
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'jardinage', component: JardinageComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
