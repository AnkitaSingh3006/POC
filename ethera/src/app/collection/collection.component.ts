import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: '#df8f01',
        width:'35px',
        height:'35px'
      })),
      state('final', style({
        backgroundColor: '#df8f01',
        width:'35px',
        height:'35px'
      })),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms'))
    ]),
  ]
})

export class CollectionComponent implements OnInit {

  currentState1 = 'initial';
  currentState2 = 'final';

changeState() {
  this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
  this.currentState2 = this.currentState2 === 'final' ? 'initial' : 'final';
 
}

  constructor() { }

  ngOnInit(): void {
  }

}
