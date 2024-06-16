import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { map, of } from 'rxjs';

export const isAuthenticadeGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userService: UserService = inject(UserService);

  return userService.GetUserInformation().pipe(
    map((value) => {
      if (value != null) {
        return true;
      }
      router.navigate(['/auth/login']);
      return false;
    })
  );
};
