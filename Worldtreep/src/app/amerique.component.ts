import { Component, OnInit } from '@angular/core';
import { plant } from './plant';
import { TrefleService } from './trefle.service';

@Component({
  selector: 'wtp-amerique',
  template: `
    <wtp-navbar></wtp-navbar>

    <div style="position: relative;">
      <img src="../assets/America-paysage.jpg" alt="photo de paysage americain commun" style="width: 100%; height: 100%;">
      <div *ngFor="let content of id" style="position: absolute; top: 10%; bottom: 90%;">
        <h1 style="margin-left: 70%;">
          <a [routerLink]='"."' [fragment]="content" style="color: white; font-size: 60px; text-decoration: none;">
          Le continent américain</a>
        </h1>
        <div style="position: absolute; display: flex; flex-direction: row; justify-content: space-around">
          <p style="background-color: white; border: thin solid black justify-content: justify; margin-left: 30%; margin-right: 20px;">
            Bienvenue en Amérique ! Le continent américain pourrait en réalité être découpé en plusieurs sous-continents :
            Amérique du sud, centrale et du nord. Chacun de ces sous-continents possèdent leur propre climat et donc leur
            propre flore : tropical au sud, tempéré au centre et arctique au nord.

            Ainsi, il est possible d'observer une grande diversité de plantes sur le sol américain, pour notre plus grand plaisir !
          </p>
          <aside style="background-color: lightgrey; border: thin solid black margin-left: 20px;">
            <h2>Statistiques du continent</h2>
            <p>Types de climat : </p>
            <p>Espèce la plus abondante : </p>
            <p>Plante la plus abondante : </p>
          </aside>
        </div>
      </div>
    </div>

    <div *ngFor="let content of id" [attr.id]='content' style="background-image: url(../assets/America-sequoia.jpg)">
      <h1 id="tallest" style="text-align: center;">Les plus grands arbres d'Amérique</h1>
      <div style="display: flex; flex-direction: row; justify-content: space-around; padding: 20px;">
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
  tallestTrees: plant[];
  id: Array<string> = ['tallest'];
  continent = 'america';

  constructor(private trefleService: TrefleService) { }

  ngOnInit(): plant[] {
    return this.trefleService.getTallestTrees(this.continent)
      .subscribe(data => this.tallestTrees = data);
  }

}
