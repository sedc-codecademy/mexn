import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http:HttpClient
  ) { }
  
  getUserDir()
  {
    return this.http.get('http://localhost:3000/file/byuser', {withCredentials: true});
  }
}
