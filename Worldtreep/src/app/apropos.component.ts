import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-apropos',
  template: `
    <wtp-navbar></wtp-navbar>

    <h1 style="margin-top: 80px;">A propos de nous</h1>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
