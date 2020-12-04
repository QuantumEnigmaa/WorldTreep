import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { JardinageComponent } from './jardinage.component';
import { AccueilComponent } from './accueil.component';
import { AProposComponent } from './apropos.component';
import { EuropeComponent } from './europe.component';
import { AsieComponent } from './asie.component';
import { AfriqueComponent } from './afrique.component';
import { AmeriqueComponent } from './amerique.component';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    JardinageComponent,
    AccueilComponent,
    AProposComponent,
    EuropeComponent,
    AsieComponent,
    AfriqueComponent,
    AmeriqueComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
