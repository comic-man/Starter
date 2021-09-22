import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice',
  templateUrl: './ice.component.html',
  styleUrls: ['./ice.component.css']
})
export class IceComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = 'offline';
    
    getServerStatus (){
      return this.serverStatus;
    }
  ngOnInit(): void {
  }
}
