import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public constStep1: string = "step1";
  public constStep2 = "step2";
  public constStep3 = "step3";
  public constStep4 = "step4";

  public selectedBlock: string = "";

  constructor() {
    this.selectedBlock = this.constStep1
  }

  set(step: string) {
    console.log('set', step);
    this.selectedBlock = step;
  }


  ngOnInit(): void {

  }


}
