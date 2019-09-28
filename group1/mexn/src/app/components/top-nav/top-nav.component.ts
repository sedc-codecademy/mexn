import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TopNavService } from '../../services/top-nav.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { User, UserRoles } from '../../interfaces/user';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  
  @Input() user:User;
  @Input() showMenu:boolean = true;
  
  items:Array<any> = [];
  classes:Array<string> = ["valid"];
  
  eUser = UserRoles;
  
  constructor(
    private topNavService:TopNavService,
    private auth:AuthService,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    console.log(this.eUser);
    this.items = this.topNavService.getNavLinks();
  }
  
  printItem(item)
  {
    console.log(item);
  }
  
  logout()
  {
    this.auth.logout().subscribe((data) => {
      localStorage.removeItem("user");
      this.userService.dispatchCurrentUser();
    });
  }
}
