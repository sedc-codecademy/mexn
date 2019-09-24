import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopNavService {

  constructor() { }
  
  getNavLinks():Array<any>
  {
    return [
      {
        id: 1,
        url: "",
        title: "Home"
      },
      {
        id: 2,
        url: "",
        title: "Shared"
      },
      {
        id: 3,
        url: "",
        title: "Logout"
      }
    ];
  }
}
