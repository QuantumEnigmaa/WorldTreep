import { Component } from '@angular/core';

@Component({
  selector: 'wtp-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">WorldTreep</a>
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
              <a class="dropdown-item" href="#">Europe</a>
              <a class="dropdown-item" href="#">Asie</a>
              <a class="dropdown-item" href="#">Afrique</a>
              <a class="dropdown-item" href="#">Amérique</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Jardinage</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">A propos</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
      </div>
    </nav>
    <wtp-continent></wtp-continent>
    <mat-card class="top-card">

      <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>

    <mat-card class="mid1-card">
      <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>

    <mat-card class="mid2-card">
      <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>

    <mat-card class="bottom-card">

      <mat-card-content>

        The Shiba Inu is the smallest of the six original and distinct
        <button mat-button>LIKE</button>


        <button mat-button>SHARE</button>
      </mat-card-content>
    </mat-card>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Worldtreep';

}
