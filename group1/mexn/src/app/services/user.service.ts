import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  getCurrentUser()
  {
    return localStorage.getItem("user");
  }
  
  blancoUser():User
  {
    return {_id: null, email: ''};
  }
}
