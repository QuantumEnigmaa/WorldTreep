import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { plant } from './plant';
import { TrefleService } from './trefle.service';

@Component({
  selector: 'wtp-amerique',
  template: `
    <wtp-navbar></wtp-navbar>

    <!--div style="position: relative;"!-->
    <div style="background-image: url(../assets/America-paysage.jpg); margin-top: 3%;">
      <!--img src="../assets/America-paysage.jpg" alt="photo de paysage americain commun" style="width: 100%; height: 100%;"!-->
      <!--div *ngFor="let content of id" style="position: absolute; top: 10%; bottom: 90%;"!-->
      <div style="padding: 2%;">
        <!--h1 style="margin-left: 90%;"!-->
        <h1 style="margin-left: 30%; color: white; font-size: 60px;">
          Le continent américain
        </h1>
        <!--div style="position: absolute; display: flex; flex-direction: row; justify-content: space-around; margin-top: 2%;"!-->
        <div style="display: flex; flex-direction: row; justify-content: space-around; margin-top: 2%; margin-bottom: 2%">
          <p style="background-color: white; border: thin solid black; text-align: justify;
          margin-left: 30%; margin-right: 20px; padding: 2%; font-size: xx-large;">
            Bienvenue en Amérique ! Le continent américain pourrait en réalité être découpé en plusieurs sous-continents :
            Amérique du sud, centrale et du nord. Chacun de ces sous-continents possèdent leur propre climat et donc leur
            propre flore : tropical au sud, tempéré au centre et arctique au nord.
            <br><br>
            Ainsi, il est possible d'observer une grande diversité de plantes sur le sol américain, pour notre plus grand plaisir !
          </p>
          <aside style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2%;
          background-color: lightgrey; border: thin solid black margin-left: 20px;">
            <h2>Statistiques du continent</h2>
            <p>Types de climat : </p>
            <p>Espèce la plus abondante : </p>
            <p>Plante la plus abondante : </p>
          </aside>
        </div>
        <a (click)="first()"  id="discover" style="color: white;cursor: pointer; font-size: x-large; margin-left: 30%;
        border: solid white; padding: 5px">
          Découvrir les plantes américaines
          <img src="../assets/arrow-down.png" alt="image d'une flèche vers le bas" style="height: 30px; width: 45px;">
        </a>
      </div>
    </div>

    <div style="background-image: url(../assets/America-sequoia.jpg);">
      <p id="tallest" style="margin-top: -12px;"></p>
      <h1 style="text-align: center; color: black;">Les plus grands arbres d'Amérique</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm" *ngFor="let plant of listTallest; let i= index">
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
      <a (click)="second()"  id="discover" style="color: white;cursor: pointer; font-size: x-large; margin-left: 45%;
        border: solid white; padding: 5px;">
          Suite
          <img src="../assets/arrow-down.png" alt="image d'une flèche vers le bas" style="height: 30px; width: 45px;">
      </a>
    </div>
    <div style="background-image: url(../assets/America-mushroom.jpg)">
      <p id="toxic" style="margin-top: -12px;"></p>
      <h1 id="toxic" style="text-align: center; color: white;">Les plantes comestibles d'Amérique</h1>
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
    '#discover:hover { color: blue; }'
  ]
})
export class AmeriqueComponent implements OnInit {
  listTallest: plant[];
  listEdible: plant[];
  continent = 'america';

  constructor(private trefleService: TrefleService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.listTallest = this.fillListTallest();
    this.listEdible = this.fillListEdible();
  }

  // Function that fills the list of the tallest trees
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
