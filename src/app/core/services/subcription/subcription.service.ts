import { HttpClient } from '@angular/common/http';
import { Injectable, afterRender } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Subcription } from '../../models/subcription/subcription.interface';

@Injectable({ providedIn: 'root' })
export class SubcriptionService {
  private subcriptionCache$: BehaviorSubject<Subcription | null>;

  constructor(private httpClient: HttpClient) {
    this.subcriptionCache$ = new BehaviorSubject<Subcription | null>(null);
  }

  getSubcriptionUser(): Observable<Subcription | null> {
    if (this.subcriptionCache$.value !== null) {
      debugger;
      return of(this.subcriptionCache$.value);
    }
    return this.httpClient
      .get<Subcription>(`${environment.api}/user/subcription`, {
        withCredentials: true,
      })
      .pipe(
        tap({
          next: (response) => {
            this.subcriptionCache$.next(response);
          },
        }),
        catchError((err) => {
          return of(null);
        })
      );
  }

  getSubcriptionUserNoCache(): Observable<Subcription | null> {
    return this.httpClient
      .get<Subcription>(`${environment.api}/user/subcription`, {
        withCredentials: true,
      })
      .pipe(
        tap({
          next: (response) => {
            this.subcriptionCache$.next(response);
          },
        }),
        catchError((err) => {
          return of(null);
        })
      );
  }

  cancelSubcription() {
    return this.httpClient.delete(
      `${environment.api}/user/subscription/cancel`,
      {
        withCredentials: true,
      }
    );
  }
}
