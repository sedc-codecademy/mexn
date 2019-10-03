import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }
  
  getComponents()
  {
    return {
      operations: ['+', '-', '*', '/', '='],
      numbers: [1,2,3,4,5,6,7,8,9,0],
      special: ['CL', 'M']
    }
  }
}
