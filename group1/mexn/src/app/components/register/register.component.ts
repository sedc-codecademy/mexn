import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      this.auth.register(formData.value).subscribe((response) => {
        this.router.navigate(['login']);
      })
    }
  }

}
