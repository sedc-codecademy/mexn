import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'prefix' },
        { path: "login", component: LoginComponent },
        { path: "register", component: RegisterComponent },
        { path: '**', redirectTo: 'login' }
      ]
  }
];
// localhost/auth
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
