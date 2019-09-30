import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, from, interval } from 'rxjs';
import { map, filter, take, publish } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy
{

  constructor(
    private _activatedRoute: ActivatedRoute,
    private loginService: LoginService)
  {

  }

  ngOnInit()
  {
    this.loginService.getData()
      .subscribe(data => console.log(data))
    // this._activatedRoute.params.subscribe(result =>
    // {
    //   console.log(result)
    // })

    // let stream$ = Observable.create((observer) =>
    // {
    //   observer.next('1');
    //   observer.next('1');
    //   observer.next('1');
    //   observer.next('1');
    //   observer.next('1');
    //   observer.next('1');
    //   observer.next('1');
    // });

    // stream$.subscribe(
    //   (data) =>
    //   {
    //     console.log('Data', data);
    //   },
    //   err =>
    //   {
    //     console.log(err)
    //   })

    const dummyData = this.loginService.dummyData();
    console.log(dummyData)
    let stream$ = from([1, 2, 3])
      .pipe(filter(value => value !== 1))

    stream$.subscribe((value) =>
    {
      console.log('Value', value);
    })


    let promise = new Promise((resolve, reject) =>
    {
      setTimeout(() =>
      {
        resolve([1, 2, 3])
        console.log('in PROMISE')
      })
    })

    promise.then((value) =>
    {
      console.log('Value', value)
    })

  }

  ngOnDestroy()
  {

  }

}
