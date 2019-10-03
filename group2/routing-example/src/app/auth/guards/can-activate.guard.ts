import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate
{
  constructor(private _route: Router, private _authService: AuthService)
  {

  }
  canActivate(): boolean
  {
    const isActive = this._authService.isTokenActive;

    if (isActive)
    {
      return true;
    }

    this._route.navigate(['/auth']);
    return false;
  }
}
