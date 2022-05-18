import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: '#df8f01',
        width: '35px',
        height: '35px'
      })),
      state('final', style({
        backgroundColor: '#df8f01',
        width: '35px',
        height: '35px'
      })),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms'))
    ]),
  ]
})

export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentState1 = 'initial';
  currentState2 = 'final';
  accountOrAmount = 'By Accounts';
  account: boolean = true;
  amount: boolean = false;

  showMe: boolean = false;

  changeState() {
    this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
    this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'final';
    this.accountOrAmount = this.accountOrAmount === 'By Accounts' ? 'By Amount' : 'By Accounts';
    if (this.accountOrAmount === 'By Accounts') {
      this.account = true;
    }
    else {
      this.account = false;
    }
    if (this.accountOrAmount === 'By Amount') {
      this.amount = true;
    }
    else {
      this.amount = false;
    }
  }

  toogleTag() {
    this.showMe = !this.showMe
  }


}








