import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserDataLogin } from '../../../models/auth/userLogin.interface';
import { environment } from '../../../../../environments/environment.development';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.log(error);
      if (error.status === 401) {
        return throwError(() => new Error('Email or password incorrect'));
      }
      console.log(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(() => new Error('Try again in another moment'));
  }

  login(userData: UserDataLogin): Observable<UserDataLogin> {
    return this.http
      .post<UserDataLogin>(
        `${environment.api}/auth/login`,
        { email: userData.email, password: userData.password },
        { withCredentials: true }
      )
      .pipe(catchError(this.handleError));
  }
}
