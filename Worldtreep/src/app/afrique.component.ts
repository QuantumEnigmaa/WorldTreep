import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-afrique',
  template: `
    <wtp-navbar></wtp-navbar>

    <p>
      afrique works!
    </p>

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
