import { IOrderForm, IOrderResponse } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = `${environment.apiUrl}/orders`;
  orderForm = signal<IOrderForm | null>(null);

  constructor(private http: HttpClient) {}

  placeOrder(order: IOrderForm) {
    return this.http.post<IOrderResponse>(this.url, order);
  }

  resetOrder() {
    this.orderForm.set(null);
  }

  setOrder(order: IOrderForm) {
    this.orderForm.set(order);
  }

  getOrder() {
    return this.orderForm();
  }
}
