import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpModule
  ],
  declarations: [LoginComponent, AuthLayoutComponent],
  providers: [LoginService]
})
export class AuthModule { }
