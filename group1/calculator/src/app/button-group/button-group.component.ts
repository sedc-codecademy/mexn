import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  
  buttons:any;
  @Input() data:Array<any> = [];
  @Output() values:EventEmitter<any> = new EventEmitter();
  @Output() equation:EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private components:ComponentsService
  ) { }

  ngOnInit() {
    this.buttons = this.components.getComponents();
  }
  
  newValue(value)
  { console.log(this.data);
    if(value !== "=" && value !== "CL" && value !== "M")
    {
      if(typeof this.data[this.data.length - 1] === "number" && typeof value === "number")
      this.data[this.data.length - 1] = parseInt([this.data[this.data.length - 1], value].join(""));
      else
      this.data.push(value);
      
      this.values.emit(this.data);
    }
    else if(value === "=")
    {
      this.equation.emit(true);
    }
    else
    {
      console.log(value);
    }
    
  }
}
