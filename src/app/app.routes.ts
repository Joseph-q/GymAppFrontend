import { Routes } from '@angular/router';
import { isAuthenticadeGuard } from './core/guards/is-authenticade.guard';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.routes').then((m) => m.USER_ROUTES),
    canActivate: [isAuthenticadeGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/principalHome/principal.routes').then(
        (m) => m.PRINCIPAL_ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
