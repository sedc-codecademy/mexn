import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  genericTextVar = 'Someting generic here';
  
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  
  onFormSubmit(formData)
  {
    if(formData.valid)
    {
      this.auth.login(formData.value).subscribe((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/']);
      })
    }
  }
  
  genericChange()
  {
    console.log(this.genericTextVar);
  }

}
