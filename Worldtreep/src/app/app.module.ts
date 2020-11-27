import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContinentComponent } from './continent.component';
import { SidenavComponent } from './sidenav.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { JardinageComponent } from './jardinage.component';
import { AccueilComponent } from './accueil.component';
import { AProposComponent } from './apropos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContinentComponent,
    SidenavComponent,
    FooterComponent,
    NavbarComponent,
    JardinageComponent,
    AccueilComponent,
    AProposComponent
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
