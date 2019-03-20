import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  .online {
    color: white;
  }
  `]
})

export class ServersComponent implements OnInit {
  bleep = 'bitches';
  serverName = '';
  serverCreated = false;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit() {
  }
  onClick() {
    this.serverCreated = true;
    this.serverStatus = 'the server ' + this.serverName + '  has been created!!! toodalooo mother fuckerssss!!!';
  }
  onReset() {
    this.serverName = '';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
