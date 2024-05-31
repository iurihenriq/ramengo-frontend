import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page-container/page-container.component').then((m) => m.PageContainerComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
