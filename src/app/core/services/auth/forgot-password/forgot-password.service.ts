import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../../../models/errors/error.response';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  private errorRests: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private httpClient: HttpClient) {}

  get Error(): Observable<string> {
    return this.errorRests.asObservable();
  }

  private handleError = (err: HttpErrorResponse) => {
    let errorResponse: ErrorResponse = err.error;

    if (Array.isArray(errorResponse.message)) {
      this.errorRests.next(errorResponse.message[0]);
    } else {
      this.errorRests.next(errorResponse.message);
    }

    return throwError(() => new Error('Something goes wrong'));
  };

  forgotPassword(email: string) {
    return this.httpClient
      .post(`${environment.api}/auth/forgot-password`, { email })
      .pipe(catchError(this.handleError));
  }
}
