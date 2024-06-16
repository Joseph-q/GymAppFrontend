import { HttpClient } from '@angular/common/http';
import { Injectable, afterRender } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import User from '../../models/users/user.get';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userCached$: BehaviorSubject<User | null>;
  constructor(private httpClient: HttpClient) {
    this.userCached$ = new BehaviorSubject<User | null>(null);
  }

  public GetUserInformation(): Observable<User | null> {
    if (this.userCached$.value!==null) {
      debugger
      return of(this.userCached$.value);
    }
    return this.httpClient
      .get<User>(`http://localhost:8000/api/user`, {
        withCredentials: true,
      })
      .pipe(
        tap({
          next: (response) => {
            this.userCached$.next(response);
          },
        }),
        catchError(() => of(null))
      );
  }
}
