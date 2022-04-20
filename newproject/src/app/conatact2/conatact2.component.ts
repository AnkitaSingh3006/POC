import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-conatact2',
  templateUrl: './conatact2.component.html',
  styleUrls: ['./conatact2.component.css']
})
export class Conatact2Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });


  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form);
  }

}
