import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, Input, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy
{
  @ViewChild('childComp') childComp: ChildComponent
  @Input() uuid: string
  inputvalue: string = 'STARTING VALUE';
  title = 'life-cycle';

  constructor()
  {
    console.log('CTOR')
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    console.log('changes')
  }

  ngOnInit(): void
  {
    console.log('INIT')
  }

  ngOnDestroy(): void
  {
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit(): void
  {
    console.log("AFTER VIEW INIT")
    console.log(this.childComp,"childComp")
  }

  ngAfterContentInit(): void
  {
    console.log('AFTER CONTENT INIT')
    console.log(this.childComp,"childComp")
  }

}
