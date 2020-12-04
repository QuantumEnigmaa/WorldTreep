import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-navbar',
  template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/accueil"  routerLinkActive="active">WorldTreep</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Continents
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" routerLink="/europe"  routerLinkActive="active">Europe</a>
              <a class="dropdown-item" routerLink="/asie"  routerLinkActive="active">Asie</a>
              <a class="dropdown-item" routerLink="/afrique"  routerLinkActive="active">Afrique</a>
              <a class="dropdown-item" routerLink="/amerique"  routerLinkActive="active">Amérique</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="/jardinage"  routerLinkActive="active">Jardinage</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="/about"  routerLinkActive="active">A propos</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search">
          <button class="btn btn btn-outline-light my-2 my-sm-0" type="submit">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </button>
        </form>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
