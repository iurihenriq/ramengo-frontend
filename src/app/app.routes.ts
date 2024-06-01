import { Routes, ActivatedRoute } from '@angular/router';
import { OrderGuard } from './auth/guards/order.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page-container/page-container.component').then((m) => m.PageContainerComponent),
  },
  {
    path: 'order',
    canActivate: [OrderGuard],
    loadComponent: () =>
      import('./request-order/request-order.component').then((m) => m.RequestOrderComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
