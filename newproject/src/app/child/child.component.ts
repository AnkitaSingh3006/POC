import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="notification is-primary">
  <h3>child</h3>
  Say{{message}}
  </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
