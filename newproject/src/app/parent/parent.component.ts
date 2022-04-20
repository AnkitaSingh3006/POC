import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <h1>parent</h1>
  <app-child [message]="message"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message = "hello world"
  constructor() { }

  ngOnInit(): void {
  }

}
