import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from '../services/order.service';
import { IOrderResponse } from '../models/order.model';

@Component({
  selector: 'app-request-order',
  standalone: true,
  imports: [ToolbarComponent, SharedModule],
  templateUrl: './request-order.component.html',
  styleUrl: './request-order.component.scss',
})
export class RequestOrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  orderResponse!: IOrderResponse;
  ngOnInit(): void {
    this.orderResponse = this.orderService.getOrderResponse()();
    this.orderResponse.image =
      'url(' + this.orderResponse.image.replace(/\s/g, '%20') + ')';
  }
}
