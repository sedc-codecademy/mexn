import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserRegister } from '../interfaces/IUserRegister';
import { ServiceConfig } from 'src/app/config/service-config';

@Injectable({ providedIn: 'root' })
export class AuthService
{
    private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    public currentUser: Observable<any> = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient)
    {
    }

    public get currentUserValue()
    {
        return this.currentUserSubject.value;
    }

    get isTokenActive()
    {
        return localStorage.getItem("TOKEN");
    }

    editUser(email)
    {
        const cuurentValue = this.currentUserValue;
        this.currentUserSubject.next({ ...cuurentValue, ...email })
    }

    login(email: string, password: string)
    {
        return this.http.post<any>(ServiceConfig.LOGIN, { email, password })
            .pipe(map(user =>
            {
                if (user && user.token)
                {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('TOKEN', JSON.stringify(user.token));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    register(registerBody: IUserRegister)
    {
        return this.http.post(ServiceConfig.REGISTER, registerBody)
    }

    logout()
    {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('TOKEN');
        this.currentUserSubject.next(null);
    }
}
