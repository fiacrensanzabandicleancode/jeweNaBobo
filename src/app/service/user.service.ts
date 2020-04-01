import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { element } from 'protractor';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    "name": '',
    "password": "",
    "debt": null,
    "interest": null,
    "payedDebtsAmount": null,
    "payedDebtHistory": null
  }

  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getUserByName(logedUser: User): Observable<User> {
    return this.httpClient.post<User>("http://localhost:8080/getUserByName", logedUser, this.options).pipe(
      tap(data => console.log('Sent data from DB: ', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    console.log("An error occured: ", err)
    return throwError("An error occured " + err.message)
  }

  verifyIfUserExists(typedUser: User): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/verifyIfUserExists", typedUser, this.options).pipe(
      tap(data => console.log('Sent data from DB: ', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
}