import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'qr-code',
        loadComponent: () =>
          import('./qr-section/qr-section.component').then(
            (c) => c.QrSectionComponent
          ),
      },

      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.component').then((c) => c.AccountComponent),
      },
      {
        path: 'subcription',
        loadComponent: () =>
          import('./subcription/subcription.component').then(
            (c) => c.SubcriptionComponent
          ),
      },
    ],
  },
];
