import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  Step1 = "1";
  Step2 = "2";
  Step3 = "3";
  Step4 = "4";

  selectedBlock: string = "";

  constructor() {
    this.selectedBlock = this.Step1
  }
  set(step: string) {
    console.log(step);
    this.selectedBlock = step;
  }

  ngOnInit(): void {
  }

  

}
