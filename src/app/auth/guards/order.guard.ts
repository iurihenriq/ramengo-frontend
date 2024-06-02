import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Observable, catchError, map, of } from 'rxjs';
import { SnackBarService } from '../../shared/services/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class OrderGuard implements CanActivate {
  constructor(
    private orderService: OrderService,
    private router: Router,
    private snackService: SnackBarService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    const order = this.orderService.getOrderForm();
    if (!!order?.brothId && !!order?.proteinId) {
      return this.orderService.placeOrder(order).pipe(
        map((response) => {
          this.orderService.setOrderResponse(response);
          return true;
        }),
        catchError((error) => {
          if (error.status === 400) {
            this.snackService.openSnackBar('both and protein are required');
          } else {
            this.snackService.openSnackBar('could not place order');
          }
          return of(this.router.createUrlTree(['']));
        })
      );
    }

    return of(this.router.createUrlTree(['']));
  }
}
