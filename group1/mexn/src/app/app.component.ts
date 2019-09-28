import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  currentUser:any;
  
  constructor(
    private us:UserService,
    private router:Router
  ){
    
  }
  
  ngOnInit()
  {
    this.currentUser = this.us.getCurrentUser();
    
    if( ! this.currentUser )
    this.router.navigate(['login']);
    
    this._subscribeToUser();
    
  }
  
  private _subscribeToUser()
  {
    this.us.user.subscribe((data) => {
      
      this.currentUser = data;
      if(data)
      this.router.navigate(['/']);
      if( ! data)
      this.router.navigate(['/login']);
    })
  }
}
