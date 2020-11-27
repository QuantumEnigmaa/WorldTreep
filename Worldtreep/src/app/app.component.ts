import { Component } from '@angular/core';

@Component({
  selector: 'wtp-root',
  template: `
    <wtp-accueil></wtp-accueil>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'Worldtreep';

}
