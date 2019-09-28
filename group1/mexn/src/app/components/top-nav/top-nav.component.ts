import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

import { TopNavService } from '../../services/top-nav.service';
import { AuthService } from '../../services/auth.service';

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
    private auth:AuthService
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
      
    });
  }
}
