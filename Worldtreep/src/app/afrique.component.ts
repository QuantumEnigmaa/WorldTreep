import { Component, OnInit, Renderer2 } from '@angular/core';
import { TrefleService } from './trefle.service';
import { Observable } from 'rxjs';
import { plant } from './plant';

@Component({
  selector: 'wtp-afrique',
  template: `
    <wtp-navbar></wtp-navbar>

    <div style=" position: relative;">
      <img src="../assets/Africa-paysage.jpg" alt="photo de paysage africain commun" style="width: 100%; height: 100%;">
      <div style="position: absolute; top: 10%; bottom: 90%;">
        <h1 style="margin-left: 70%; color: white; font-size: 60px;">
          Le Continent africain
        </h1>
        <div style="position: absolute; display: flex; flex-direction: row; justify-content: space-around">
          <p style="background-color: white; border: thin solid black justify-content: justify; margin-left: 30%; margin-right: 20px;">
            Sous un chaud soleil, le continent africain, berceau de l'humanité voit se côtoyer terres arides et forêts verdoyantes selon
            l'emplacement sur le continent. En allant des baobabs, véritables emblèmes du territoire africain, jusqu'au profonde forêts
            du Kenya, il y en a pour tous les goûts !
            <br><br>
            Si vous êtes prêt à aller à l'encontre d'une nature sauvage et indomptée alors n'hésitez plus ! L'Afrique vous attend !
          </p>
          <aside style="background-color: lightgrey; border: thin solid black margin-left: 20px;">
            <h2>Statistiques du continent</h2>
            <p>Types de climat : tempéré, aride</p>
            <p>Espèce la plus abondante : </p>
            <p>Plante la plus abondante : </p>
          </aside>
        </div>
        <a (click)="first()"  id="discover" style="position: absolute; color: white;cursor: pointer; font-size: x-large;
        margin-left: 30%; border: solid white; padding: 5px; margin-top: 80%;">
          Découvrir les plantes africaine
          <img src="../assets/arrow-down.png" alt="image d'une flèche vers le bas" style="height: 30px; width: 45px;">
        </a>
      </div>
    </div>

    <div style="background-image: url(../assets/Africa-tree.jpg);
    background-repeat: no-repeat; background-size: 100%;">
      <p id="tallest" style="margin-top: -12px;"></p>
      <h1 style="text-align: center; color: white;">Les plus grands arbres d'Afrique</h1>
      <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 20px;">
        <mat-card class="top-card">

          <mat-card-content>
            <div *ngFor="let plant of listTallest">
              <p>{{ plant.common_name }}</p>
            </div>
          </mat-card-content>
        </mat-card>
        <mat-card class="top-card">

          <mat-card-content>
            <p>
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.
            </p>
          </mat-card-content>
        </mat-card>
        <mat-card class="top-card">

          <mat-card-content>
            <p>
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
              bred for hunting.
            </p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class AfriqueComponent implements OnInit {
  listTallest: plant[];
  continent = 'africa';

  constructor(private trefleService: TrefleService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.listTallest = this.fillList();
  }

  fillList(): plant[] {
    const list: plant[] = [];
    this.trefleService.getTallestTrees(this.continent).subscribe((data: plant[]) => {
      Object.assign(list, data);
    });
    return list;
  }

  first(): void{
          try {
        const errorField = this.renderer.selectRootElement('#tallest');
        errorField.scrollIntoView();
      } catch (err) {

      }
  }

  second(): void{
          try {
        const errorField = this.renderer.selectRootElement('#toxic');
        errorField.scrollIntoView();
      } catch (err) {

      }
  }

}
