import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  bleep = 'bitches';
  serverName = '';
  serverCreated = false;
  serverStatus = '';
  constructor() {
  }
  ngOnInit() {
  }

  onClick() {
    this.serverCreated = true;
    this.serverStatus = 'the server ' + this.serverName + '  has been created!!! toodalooo mother fuckerssss!!!';
  }
  // onUpdateServerName(event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }


}
