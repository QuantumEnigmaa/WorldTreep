import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-amerique',
  template: `
    <wtp-navbar></wtp-navbar>

    <div style="position: relative;">
      <img src="../assets/America-paysage.jpg" alt="photo de paysage americain commun" style="width: 100%; height: 100%;">
      <div style="position: absolute; top: 50%; bottom: 50%;">
        <h1 style="color: white;">Page en cours de développement</h1>
      </div>
    </div>

    <div style="background-image: url(../assets/America-sequoia.jpg)">
      <h1 style="text-align: center;">Les plus grands arbres d'Amérique</h1>
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
  ]
})
export class AmeriqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}