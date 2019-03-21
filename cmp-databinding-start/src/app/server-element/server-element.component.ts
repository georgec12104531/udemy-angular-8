import { Component,
         OnInit,
         Input,
         ViewEncapsulation,
         OnChanges,
         SimpleChanges
          } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, onChanges {

  @Input('svrElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('Im in the constructor');
  }

  ngOnInit() {
    console.log('Im in init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Im in ngonChanges');
  }

  ngOnChanges(changes) {
    console.log('ngOnChanges');
    console.log(changes);
  }
}
