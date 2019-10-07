import { Injectable } from '@angular/core';
import { Store } from '../classes/store';

export interface IButton
{
  value: number | string,
  isOperator: boolean,
  reset?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ButtonService extends Store<IButton[]>{

  constructor()
  {
    super();

    this.loadButtons()
  }

  loadButtons()
  {
    const buttons: IButton[] = [
      {
        value: 0,
        isOperator: false
      },
      {
        value: 1,
        isOperator: false
      },
      {
        value: 2,
        isOperator: false
      },
      {
        value: 3,
        isOperator: false
      },
      {
        value: 4,
        isOperator: false
      },
      {
        value: 5,
        isOperator: false
      },
      {
        value: 6,
        isOperator: false
      },
      {
        value: 7,
        isOperator: false
      },
      {
        value: 8,
        isOperator: false
      },
      {
        value: 9,
        isOperator: false
      },
      {
        value: '+',
        isOperator: true
      },
      {
        value: '-',
        isOperator: true
      },
      {
        value: '*',
        isOperator: true
      },
      {
        value: '/',
        isOperator: true
      },
      {
        value: '=',
        isOperator: false
      },
      {
        value: 'C',
        isOperator: false,
        reset: true
      }
    ]
    this.store(buttons)
  }

}
