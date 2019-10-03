import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() btnValue;
  @Output() cmdClicked:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  command(value)
  {
    this.cmdClicked.emit(value);
  }

}
