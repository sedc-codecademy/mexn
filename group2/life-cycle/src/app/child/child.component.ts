import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterContentChecked, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges
{
  @Input() childInput: string;
  testProperty:string = 'I am test'
  constructor() {
    console.log(this.childInput,"child input")
   }

  ngOnChanges(changes: SimpleChanges): void
  {
    console.log(changes)
  }

  ngOnInit()
  {
    this.testProperty = 'This is changed now'
    console.log(this.childInput,"from ON INIT")
  }

}
