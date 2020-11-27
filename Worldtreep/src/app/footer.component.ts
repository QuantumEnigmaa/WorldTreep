import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-footer',
  template: `
    <footer>
      <div class="container">
        <div class="row" style="padding: 50px;">
          <div class="col-md-4">
            <h3>Nos Partenaires</h3>
            <a>Insérer logo</a>
          </div>
          <div class="col-md-4">
            <h3>Plan du site</h3>
            <a routerLink="/accueil"  routerLinkActive="active">Accueil</a>
            <br>
            <a>Continents</a>
            <br>
            <a routerLink="/jardinage"  routerLinkActive="active">Jardinage</a>
            <br>
            <a routerLink="/about"  routerLinkActive="active">A propos</a>
          </div>
          <div class="col-md-4">
            <h3>Nous contacter</h3>
            <a>Vous pouvez contacter les créateurs du site grâce à leurs e-mail :</a>
            <br>
            <a href="mailto:thibaud.vaisseau@isen.yncrea.fr">Thibaud</a><FONT color="black"> | </FONT>
            <a href="mailto:aurelien.leclere@isen.yncrea.fr">Aurélien</a>
            <br>
            <a>Retrouvez-nous aussi sur les réseaux sociaux :</a>
            <br>
            <a href="https://www.facebook.com">
              <img src="../assets/Facebook-logo.png" alt="logo de facebook" style="width: 70px; height: 50px;">
            </a>
            <a href="https://www.twitter.com">
              <img src="../assets/twitter-logo.png" alt="logo de twitter" style="width: 50px; height: 50px;">
            </a>
            <a href="https://www.instagram.com">
              <img src="../assets/instagram-logo.png" alt="logo d'instagram" style="width: 65px; height: 50px; padding-left: 15px;">
            </a>
            <a href="https://www.linkedin.com">
              <img src="../assets/linkedin-logo.png" alt="logo de linkedin" style="width: 65px; height: 50px; padding-left: 15px;">
            </a>
          </div>
        </div>
      </div>
      <div style="width: 100%; background-color:#2d2d2d;">
        <p style="color: lightgray; text-align: center; padding-top: 4px;">&copy;2020 Worldtreep - Créé par VAISSEAU Thibaud, LECLERE Aurélien<p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
