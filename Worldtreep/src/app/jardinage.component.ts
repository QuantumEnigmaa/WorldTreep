import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-jardinage',
  template: `
  <div style=" position: relative;">
    <div style="position: absolute">
      <img src="../assets/jardin.jpg" style="width: 100%; height: 100%;">
    </div>
    <div style="position: absolute; top: 50%; bottom: 50% transform: translate(-50%, -50%);">
      <h1>Page en cours de développement</h1>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class JardinageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
