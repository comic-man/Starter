import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice',
  templateUrl: './ice.component.html',
  styles: [`
    .online {
      color: white;
    }  
  `]
})
export class IceComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    
    getServerStatus () {
      return this.serverStatus;
    }
    getColor(){
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
  ngOnInit(): void {
  }
}
