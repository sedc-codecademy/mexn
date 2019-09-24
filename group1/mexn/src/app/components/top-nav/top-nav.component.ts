import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { TopNavService } from '../../services/top-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  
  items:Array<any> = [];
  
  constructor(
    private topNavService:TopNavService
  ) { }

  ngOnInit() {
    
    this.items = this.topNavService.getNavLinks();
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
