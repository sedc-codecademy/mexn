import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService
{

  constructor(private _http: Http) { }

  dummyData()
  {
    return 'Service'
  }

  getData(): Observable<any>
  {
    return this._http.get('https://jsonplaceholder.typicode.com/todos')
      .pipe(map(response => response.json()));
  }
}
