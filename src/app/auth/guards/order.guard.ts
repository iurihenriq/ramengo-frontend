import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Injectable({
  providedIn: 'root',
})
export class OrderGuard implements CanActivate {
  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const order = this.orderService.getOrder();
    if (!!order?.brothId && !!order?.proteinId) {
      return true;
    }

    return this.router.createUrlTree(['']);
  }
}
