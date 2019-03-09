import { Component } from '@angular/core';

@Component({
  selector: 'asdf-root',
  template: `
    <div>
      <app-servers></app-servers>
      <app-warning-alert></app-warning-alert> 
      <app-success-alert></app-success-alert> 
    </div>
  `
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
