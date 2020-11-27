import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-jardinage',
  template: `
  <div style=" position: relative;">
    <div style="position: absolute">
      <img src="../assets/jardin.jpg" alt="photo de jardin" style="width: 100%; height: 100%;">
    </div>
    <div style="position: absolute; top: 50%; bottom: 50%; transform: translate(-50%, -50%);">
      <h1>Page en cours de développement</h1>
    </div>
  </div>
  <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class JardinageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
