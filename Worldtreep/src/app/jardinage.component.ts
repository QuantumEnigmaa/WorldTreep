import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-jardinage',
  template: `
  <wtp-navbar></wtp-navbar>

  <div style=" position: relative;">
    <img src="../assets/jardin.jpg" alt="photo de jardin" style="width: 100%; height: 100%;">
    <div style="position: absolute; top: 50%; bottom: 50%; margin-left: 20%;">
      <h1 style="font-size: 60px;"><a href="#OUI" style="color: white; text-decoration: none;">Page en cours de développement</a></h1>
    </div>
  </div>

  <div style=" position: relative;">
    <h1 id="OUI">Ceci est un test</h1>
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
