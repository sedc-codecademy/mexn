import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

import { TopNavService } from '../../services/top-nav.service';
import { User, UserRoles } from '../../interfaces/user';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() user:User;
  @Input() showMenu:boolean = true;
  
  items:Array<any> = [];
  classes:Array<string> = ["valid"];
  
  eUser = UserRoles;
  
  constructor(
    private topNavService:TopNavService
  ) { }

  ngOnInit() {
    console.log(this.eUser);
    this.items = this.topNavService.getNavLinks();
  }
  
  printItem(item)
  {
    console.log(item);
  }
  
  ngDoCheck(){
    console.log("Do Check")
  }
  
  ngAfterViewInit(){
    console.log("After View init")
  }
  
  ngAfterViewChecked(){
    console.log("After View Checked")
  }
  
  ngOnDestroy(){
    console.log("Destroy");
  }

}
