import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
  
  login(params)
  {
    
    return this.http.post('http://localhost:3000/auth/login', params, {withCredentials:true});
  }
  
  register(params)
  {
    
    return this.http.post('http://localhost:3000/auth/register', params, {withCredentials:true});
  }
  
  logout()
  {
    return this.http.get('http://localhost:3000/auth/logout', {withCredentials: true});
  }
}
