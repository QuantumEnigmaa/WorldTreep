import { Component } from '@angular/core';

@Component({
  selector: 'wtp-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
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
