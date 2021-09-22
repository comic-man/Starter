import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  template: `
  <app-ice></app-ice>
  <app-ice></app-ice>`,
  styleUrls: ['./ice-cream.component.css']
})
export class IceCreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
