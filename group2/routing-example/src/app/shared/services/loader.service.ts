import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService
{

  isActive$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { }

  show()
  {
    this.isActive$.next(true)
  }

  hide()
  {
    this.isActive$.next(false)
  }
}
