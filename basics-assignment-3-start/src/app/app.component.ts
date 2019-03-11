import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .fivePlus {
    color: white;
  }
  `]
})
export class AppComponent {
  displayStatus = false;
  history = [];
  count = 0;

  handleToggle() {
    this.displayStatus = !this.displayStatus;
    this.count += 1;
    this.history.push(this.count);
  }

  
}
