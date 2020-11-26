import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-footer',
  template: `
    <footer>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 50px;">
        <div>
          <h3>Nos Partenaires</h3>
          <a>Insérer logo</a>
        </div>
        <div>
          <h3>Plan du site</h3>
          <a>Continents</a>
          <br>
          <a>Jardinage</a>
          <br>
          <a>A propos</a>
        </div>
        <div>
          <h3>Nous contacter</h3>
          <a>Vous pouvez contacter les créateurs du site grâce à leurs e-mail :</a>
          <br>
          <a href="mailto:thibaud.vaisseau@isen.yncrea.fr">Thibaud</a><FONT color="black"> | </FONT>
          <a href="mailto:aurelien.leclere@isen.yncrea.fr">Aurélien</a>
          <br>
          <a>Retrouvez-nous aussi sur les réseaux sociaux :</a>
          <br>
          <a href="https://www.facebook.com">
            <img src="../assets/Facebook-logo.png" style="width: 70px; height: 50px;">
          </a>
          <a href="https://www.twitter.com">
            <img src=".../assets/twitter-logo.png" style="width: 70px; height: 50px;">
          </a>
          <a href="https://www.instagram.com">
            <img src=".../assets/instagram-logo.png" style="width: 70px; height: 50px;">
          </a>
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
