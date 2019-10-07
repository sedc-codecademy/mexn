import { Injectable } from '@angular/core';
import { IButton } from './button.service';
import { Store } from '../classes/store';

interface ICalculator
{
  firstValue: string,
  secodnValue: string,
  operator: string | number,
  display: string
}

const initialState = {
  firstValue: '',
  secodnValue: '',
  operator: null,
  display: '0'
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService extends Store<ICalculator>{

  constructor()
  {
    super()
    this.store(initialState);
  }

  handleDisplay(button: IButton)
  {
    if (button.reset)
    {
      this.store(initialState);
      return;
    }

    const currentState = this.getAll();

    if (button.isOperator)
    {
      if (!currentState.firstValue)
      {
        const newState = {
          firstValue: currentState.display,
          secodnValue: '',
          operator: button.value,
          display: currentState.display + button.value
        }

        this.store(newState);
        return
      }
      const secodnValue = currentState.display.split(currentState.operator.toString())[1];
      const firstValue = this.evaluate(+currentState.firstValue, currentState.operator, +secodnValue)
      const newState = {
        firstValue,
        secodnValue,
        operator: button.value,
        display: firstValue + button.value
      }

      this.store(newState)
      return
    }

    if (currentState.display === '0')
    {
      const newState = {
        ...currentState,
        display: button.value.toString()
      }
      this.store(newState);
      return
    }

    const newState = {
      ...currentState,
      display: currentState.display + button.value.toString()
    }

    this.store(newState)
  }

  private _operations(firstValue, secondValue)
  {
    return {
      '+': () => firstValue + secondValue,
      '-': () => firstValue - secondValue,
      '*': () => firstValue * secondValue,
      '/': () => firstValue / secondValue
    }
  }

  evaluate(firstValue, operator, secondValue): string
  {
    const operation = this._operations(firstValue, secondValue);
    const calucalte = operation[operator]
    return calucalte(firstValue, secondValue).toString()
  }

}
