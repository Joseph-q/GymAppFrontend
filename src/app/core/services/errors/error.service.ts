import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ErrorResponse } from '../../models/errors/error.response';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorRests: BehaviorSubject<string>;

  constructor() {
    this.errorRests = new BehaviorSubject<string>('');
  }

  get Error(): Observable<string> {
    return this.errorRests.asObservable();
  }

  public handleError = (err: HttpErrorResponse) => {
    let errorResponse: ErrorResponse = err.error;

    if (Array.isArray(errorResponse.message)) {
      this.errorRests.next(errorResponse.message[0]);
    } else {
      this.errorRests.next(errorResponse.message);
    }

    return throwError(() => new Error('Something goes wrong'));
  };
}
