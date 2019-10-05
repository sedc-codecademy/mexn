import { Component, OnInit } from '@angular/core';
import { ButtonService, IButton } from '../button.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit
{
  buttons$: Observable<IButton[]> = this._buttonService.store$
    .pipe(tap(buttons => console.log(buttons)));

  constructor(private _buttonService: ButtonService) { }

  ngOnInit()
  {
  }

  onButton(button:IButton)
  {
    console.log(button)
  }

}
