import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId = 10;
  serverStatus = 'The server has not been created';
  bleep = 'bitches';
  serverName = '';
  

  constructor() {
    setTimeout(() => {
      this.serverStatus = !this.serverStatus;
      }
      , 2000);
  }

  onClick() {
    this.serverStatus = 'the server ' + this.serverName + '  has been created!!! toodalooo mother fuckerssss!!!';
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
