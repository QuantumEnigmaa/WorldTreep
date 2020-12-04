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
