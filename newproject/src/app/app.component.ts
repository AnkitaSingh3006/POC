import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newproject';
  users: any;
  constructor(private userData: UsersDataService) {
    this.userData.user().subscribe((data) => {
      console.warn("data", data);
      this.users=data;

    })
  }
}


