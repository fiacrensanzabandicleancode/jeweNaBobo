import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { element } from 'protractor';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://35.195.105.182:8443/jewenabobo-0.0.1-SNAPSHOT';

  user: User = {
    name: '',
    password: '',
    debt: null,
    interest: null,
    payedDebtsAmount: null,
    payedDebtHistory: null
  };

  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getUserByName(logedUser: User): Observable<User> {
    return this.httpClient.post<User>(this.url + '/getUserByName', logedUser, this.options).pipe(
      tap(data => console.log('Sent data from DB: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('An error occured: ', err);
    return throwError('An error occured ' + err.message);
  }

  verifyIfUserExists(typedUser: User): Observable<boolean> {
    return this.httpClient.post<boolean>(this.url + '/verifyIfUserExists', typedUser, this.options).pipe(
      tap(data => console.log('Sent data from DB: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
