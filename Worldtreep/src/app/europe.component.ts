import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-europe',
  template: `
    <wtp-navbar></wtp-navbar>

    <p>
      europe works!
    </p>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class EuropeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
