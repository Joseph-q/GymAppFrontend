import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sideBarChangeValue: boolean;
  private sideBarChangeSizeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  constructor() {
    this.sideBarChangeValue = true;
  }

  public get isActivate(): Observable<boolean> {
    return this.sideBarChangeSizeSubject.asObservable();
  }

  public setSideBarChangeSize() {
    this.sideBarChangeSizeSubject.next(this.sideBarChangeValue);
    this.sideBarChangeValue=!this.sideBarChangeValue
  }
}
