import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  genericTextVar = 'Someting generic here';
  
  constructor(
    private auth:AuthService,
    private router:Router,
    private user:UserService
  ) { }

  ngOnInit() {
  }
  
  onFormSubmit(formData)
  {
    if(formData.valid)
    {
      this.auth.login(formData.value).subscribe((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.user.dispatchCurrentUser();
      })
    }
  }
  
  genericChange()
  {
    console.log(this.genericTextVar);
  }

}
