import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public message: string = "";
  parentFunction(data: string) {
    this.message = data;
  }
}
