import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit
{
  currentUser$: Observable<any> = this._authService.currentUser;

  constructor(private _authService: AuthService) { }

  ngOnInit()
  {
  }

}
