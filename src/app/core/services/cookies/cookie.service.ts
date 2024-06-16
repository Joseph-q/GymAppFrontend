import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor() {}

  getCookieValue(name: string) {
    let cookies = document.cookie;

    let cookiesArray = cookies.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();

      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }

    return null;
  }

  checkCookieValue(name: string): boolean {
    const cookieExist = this.getCookieValue(name);
    if (cookieExist) {
      return true;
    }
    return false;
  }
}
