import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import Plan from '../../models/plans/plan.interface';

@Injectable({ providedIn: 'root' })
export class PlansService {
  plansCached$: BehaviorSubject<Plan[] | null>;
  planCached$: BehaviorSubject<Plan | null>;

  constructor(private httpClient: HttpClient) {
    this.plansCached$ = new BehaviorSubject<Plan[] | null>(null);
    this.planCached$ = new BehaviorSubject<Plan | null>(null);
  }

  GetPlans(): Observable<Plan[] | null> {
    if (this.plansCached$.value) {
      return of(this.plansCached$.value);
    }
    return this.httpClient.get<Plan[]>(`${environment.api}/plans`).pipe(
      tap({
        next: (response) => {
          this.plansCached$.next(response);
        },
      }),
      catchError(() => of(null))
    );
  }

  GetPlanById(planId: string): Observable<Plan | null> {
    if (this.planCached$.value) {
      return of(this.planCached$.value);
    }

    if (this.plansCached$.value) {
      const plan = this.plansCached$.value.filter(
        (plan) => (plan.id = planId)
      )[0];
      this.planCached$.next(plan);
      return of(plan);
    }

    return this.httpClient
      .get<Plan>(`${environment.api}/plans/${planId}`, {
        withCredentials: true,
      })
      .pipe(
        tap({
          next: (response) => {
            this.planCached$.next(response);
          },
        }),
        catchError(() => {
          return of(null);
        })
      );
  }

  subcribeToPlan(planId: string) {
    return this.httpClient
      .post(
        `${environment.api}/plans/create-checkout-session`,
        { id: planId },
        { withCredentials: true }
      )
      .pipe(catchError(() => of(null)));
  }
}
