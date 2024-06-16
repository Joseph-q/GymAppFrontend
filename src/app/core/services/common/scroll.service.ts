import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  handleScroll() {
    // Lógica para detectar el scroll y cambiar la ruta
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
      // Cambiar la ruta
      this.router.navigate(['/user/subscription']);
    }
  }
}
