import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth: BehaviorSubject<boolean>;

  constructor() {
    this.isAuth = new BehaviorSubject<boolean>(true);
  }

  get IsAuthenticade(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  setIsAuthenticade(isAuth: boolean) {
    this.isAuth.next(isAuth);
  }
}
