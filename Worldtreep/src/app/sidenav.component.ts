import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-sidenav',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <p>Auto-resizing sidenav</p>
        <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
        <button (click)="showFiller = !showFiller" mat-raised-button>
          Toggle extra text
        </button>
      </mat-drawer>

      <div class="example-sidenav-content">
        <button type="button" mat-button (click)="drawer.toggle()">
          WorldTreep
        </button>
      </div>

    </mat-drawer-container>
  `,
  styles: [
    'example-container { width: 500px; height: 100%; border: 1px solid rgba(0, 0, 0, 0.5);}',

    '.example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: left}',

    '.example-sidenav { padding: 20px; }'
  ]
})
export class SidenavComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
