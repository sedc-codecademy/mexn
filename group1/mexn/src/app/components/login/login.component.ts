import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  genericTextVar = 'Someting generic here';
  
  constructor() { }

  ngOnInit() {
  }
  
  onFormSubmit(formData)
  {
    if(formData.valid)
    {
      //call service
    }
  }
  
  genericChange()
  {
    console.log(this.genericTextVar);
  }

}
