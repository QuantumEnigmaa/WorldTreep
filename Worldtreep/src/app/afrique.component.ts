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
          <p style="background-color: white; border: thin solid black justify-content: justify; margin-left: 30%; margin-right: 20px;
          padding: 2%;">
            Sous un chaud soleil, le continent africain, berceau de l'humanité voit se côtoyer terres arides et forêts verdoyantes selon
            l'emplacement sur le continent. En allant des baobabs, véritables emblèmes du territoire africain, jusqu'au profonde forêts
            du Kenya, il y en a pour tous les goûts !
            <br><br>
            Si vous êtes prêt à aller à l'encontre d'une nature sauvage et indomptée alors n'hésitez plus ! L'Afrique vous attend !
          </p>
          <aside style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2%;
          background-color: lightgrey; border: thin solid black margin-left: 20px;">
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
      <div class="container">
        <div class="row">
          <div class="col-sm" *ngFor="let plant of listTallest; let i= index">
            <div [ngSwitch]="i">
              <div *ngSwitchDefault ></div>
              <mat-card class="top-card" *ngSwitchCase="0" style="height: 620px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
              <mat-card class="top-card" *ngSwitchCase="6" style="height: 620px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
              <mat-card class="top-card" *ngSwitchCase="12" style="height: 620px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </div>
      </div>
      <a (click)="second()"  id="discover" style="color: white;cursor: pointer; font-size: x-large; margin-left: 45%;
        border: solid white; padding: 5px;">
          Suite
          <img src="../assets/arrow-down.png" alt="image d'une flèche vers le bas" style="height: 30px; width: 45px;">
      </a>
    </div>
    <div style="background-image: url(../assets/Africa-edible.jpg)">
      <p id="toxic" style="margin-top: -12px;"></p>
      <h1 id="toxic" style="text-align: center; color: white;">Les plantes comestibles d'Afrique</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm" *ngFor="let plant of listEdible; let i= index">
            <div [ngSwitch]="i">
              <div *ngSwitchDefault ></div>
              <mat-card class="top-card" *ngSwitchCase="0" style="height: 500px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
              <mat-card class="top-card" *ngSwitchCase="3" style="height: 500px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
              <mat-card class="top-card" *ngSwitchCase="12" style="height: 500px; margin-bottom: 10%">

                <mat-card-content>
                  <h1 style="text-align: center">{{ plant.common_name }}</h1>
                  <img src="{{ plant.image_url }}" style="width: 200px;">
                  <p style="margin-top: 4%;">Nom scientifique : {{ plant.scientific_name }}</p>
                  <p>Année de découverte : {{ plant.year }}</p>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class AfriqueComponent implements OnInit {
  listTallest: plant[];
  listEdible: plant[];
  continent = 'africa';

  constructor(private trefleService: TrefleService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.listTallest = this.fillListTallest();
    this.listEdible = this.fillListEdible();
  }

  fillListTallest(): plant[] {
    const list: plant[] = [];
    this.trefleService.getTallestTrees(this.continent).subscribe((data: plant[]) => {
      Object.assign(list, data);
    });
    return list;
  }

  fillListEdible(): plant[] {
    const list: plant[] = [];
    this.trefleService.getEdiblePlants(this.continent).subscribe((data: plant[]) => {
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
