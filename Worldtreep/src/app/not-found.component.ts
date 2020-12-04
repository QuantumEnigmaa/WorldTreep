import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-not-found',
  template: `
    <h1 style="text-align: center">Erreur 404</h1>
    <h3 style="text-align: center">Nous sommes navré, cette page n'existe pas</h3>
    <div style="display: flex; justify-content: center;">
      <img src="../assets/404-plant.jpg" alt="Image de plante dessinée">
    </div>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
