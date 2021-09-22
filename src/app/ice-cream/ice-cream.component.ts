import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  //template: `
  //<app-ice></app-ice>
  //<app-ice></app-ice>`,
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.css']
})
export class IceCreamComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Ice Cream was added.';
  serverName ='';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Ice Cream was Added!' + this.serverName;
  }

  onUpateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
