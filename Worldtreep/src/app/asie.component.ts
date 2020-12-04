import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtp-asie',
  template: `
    <wtp-navbar></wtp-navbar>

    <p>
      asie works!
    </p>

    <wtp-footer></wtp-footer>
  `,
  styles: [
  ]
})
export class AsieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
