import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-afrique',
  template: `
    <wtp-navbar></wtp-navbar>

    <div style=" position: relative;">
      <img src="../assets/Africa-paysage.jpg" alt="photo de paysage africain commun" style="width: 100%; height: 100%;">
      <div style="position: absolute; top: 50%; bottom: 50%;  margin-left: 35%;">
        <h1 style="color: white; font-size: xx-large;">Page en cours de développement</h1>
      </div>
    </div>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class AfriqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
