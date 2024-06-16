import { Routes } from '@angular/router';
import { HeaderComponent } from '../../section/principalHome/header/header.component';
import { HomeComponent } from './home/home.component';

export const PRINCIPAL_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
    ],
  },
];
