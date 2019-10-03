import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, AuthLayoutComponent, RegisterComponent],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
