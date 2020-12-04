import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-jardinage',
  template: `
  <wtp-navbar></wtp-navbar>

  <div style=" position: relative;">
    <img src="../assets/jardin2.jpg" alt="photo de jardin" style="width: 100%; height: 100%;">
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
