import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  @Output() user:EventEmitter<User> = new EventEmitter();
  
  getCurrentUser()
  {
    return JSON.parse(localStorage.getItem("user"));
  }
  
  dispatchCurrentUser()
  {
    this.user.emit(this.getCurrentUser());
  }
  
  blancoUser():User
  {
    return {_id: null, email: ''};
  }
}
