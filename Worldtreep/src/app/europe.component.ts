import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-europe',
  template: `
    <wtp-navbar></wtp-navbar>

    <div style=" position: relative;">
      <img src="../assets/Europe-paysage.jpg" alt="photo de paysage européen commun" style="width: 100%; height: 100%;">
      <div *ngFor="let content of id" style="position: absolute; top: 10%; bottom: 90%;">
        <h1 style="margin-left: 70%;">
          <a [routerLink]='"."' [fragment]="content" class="learn-btn animated fadeInUp" style="color: white; font-size: 60px; text-decoration: none;">
          Page en cours de développement</a>
        </h1>
        <div style="position: absolute; display: flex; flex-direction: row; justify-content: space-around">
          <p style="background-color: white; border: thin solid black justify-content: justify; margin-left: 30%; margin-right: 20px;">
            L'Europe, terre des forêts celtes, des fjord vikings et des montagnes helvètes. La nature y est imprégnée d'une énergie
            ancienne, puissante. Que ce soit les vastes plaines du centre de la France, les profondes forêts polonaises, les terres
            arides d'Andalousie ou encore les hautes montagnes alpines, une grande variété de paysage s'offre à quicquonque y prette
            attention.
            <br><br>
            Vous pourrez donc à la fois observer conifères, chênes, pins et une multitude de magnifiques fleurs où que vous alliez !
          </p>
          <aside style="background-color: lightgrey; border: thin solid black margin-left: 20px;">
            <h2>Statistiques du continent</h2>
            <p>Types de climat : tempéré</p>
            <p>Espèce la plus abondante : </p>
            <p>Plante la plus abondante : </p>
          </aside>
        </div>
      </div>
    </div>

    <div *ngFor="let content of id" [attr.id]='content' style="background-image: url(../assets/Europe-amanite.jpg)">
      <h1 id="toxic" style="text-align: center;">Les plantes les plus toxiques</h1>
      <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 20px;">
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
      </div>
    </div>

    <wtp-footer></wtp-footer>
  `,
  styles: [
    'a { transition-timing-function: ease-in-out; transition-duration: 300ms; }',
    '@keyframes fadeIn { 0% {opacity: 0; transform: translateY(20px);} 100% {opacity: 1; transform: translateY(0);} }'
  ]
})
export class EuropeComponent implements OnInit {
  id: Array<string> = ['toxic'];

  constructor() { }

  ngOnInit(): void {
  }

}
