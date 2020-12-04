import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-amerique',
  template: `
    <wtp-navbar></wtp-navbar>

    <p>
      amerique works!
    </p>

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
