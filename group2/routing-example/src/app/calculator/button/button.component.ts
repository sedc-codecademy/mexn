import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IButton } from 'src/app/button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit
{
  @Output() onButton: EventEmitter<IButton> = new EventEmitter();
  @Input() button: IButton
  constructor() { }

  ngOnInit()
  {
  }

}
