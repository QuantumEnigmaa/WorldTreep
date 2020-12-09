import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { plant } from './plant';
import { TrefleService } from './trefle.service';

@Component({
  selector: 'wtp-accueil',
  template: `
    <wtp-navbar></wtp-navbar>

    <mat-card class="top-card" id="test">

      <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
      </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="displayElement(false, 'test')">LIKE</button>
        <button mat-button (click)="getAllElement()">SHARE</button>
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
    <wtp-footer></wtp-footer>

  `,
  styles: [
    '.example-card { max-width: 400px; }',

    'example-header-image { background-image: url(https://material.angular.io/assets/img/examples/shiba1.jpg); background-size: cover; }'
  ]
})
export class AccueilComponent implements OnInit {

  constructor( private Trefleservice: TrefleService) { }

  ngOnInit(): void { }

  getAllElement(): void {

    this.Trefleservice.getPlantdata().subscribe(plants => {
      for (let i = 0; i < plants.length; i++){
        console.log(plants[i]);
        console.log('nb' + i);
      }
    });
  }

  displayElement(a: boolean, b: string): void {
    let targetElement;
    targetElement = document.getElementById(b);
    if (a === false) {
      targetElement.hide();
    }
  }

}
