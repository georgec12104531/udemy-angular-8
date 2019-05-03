import { UsersService } from './user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService:UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe()
  }
}
