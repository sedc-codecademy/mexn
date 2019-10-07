import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserRegister } from '../../interfaces/IUserRegister';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{

  registerForm: FormGroup;
  errorMessage: string;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit()
  {
    this.registerForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  register()
  {
    const registerBody: IUserRegister = this.registerForm.value;
    this._authService.register(registerBody)
      .subscribe(
        response =>
        {
          this._router.navigate(["/auth/login"])
        },
        err =>
        {
          this.errorMessage = err.error.errors[0].msg
        }
      )
  }

}
