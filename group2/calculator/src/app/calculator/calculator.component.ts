import { Component, OnInit } from '@angular/core';
import { ButtonService, IButton } from '../services/button.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit
{
  buttons$: Observable<IButton[]> = this._buttonService.store$
    .pipe(tap(buttons => console.log(buttons)));

  calculator$: Observable<any> = this._calculatorService.store$;

  constructor(
    private _buttonService: ButtonService,
    private _calculatorService: CalculatorService) { }

  ngOnInit()
  {
  }

  onButton(button: IButton)
  {
    this._calculatorService.handleDisplay(button)
  }

}
