import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendData() {
    this.parentFunction.emit("Say this message is from child")
  }

}
