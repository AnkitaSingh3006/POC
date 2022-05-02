import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace';
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
}
