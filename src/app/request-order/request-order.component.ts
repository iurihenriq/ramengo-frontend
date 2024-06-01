import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-request-order',
  standalone: true,
  imports: [ToolbarComponent, SharedModule],
  templateUrl: './request-order.component.html',
  styleUrl: './request-order.component.scss',
})
export class RequestOrderComponent implements OnInit {
  teste: string = ''
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    const order = this.orderService.getOrder()!;
    this.orderService.placeOrder(order).subscribe({
      next: (response) => {
        this.teste = response.image
        console.log(response);
      },
      error: (err) => {
        // Trate os erros adequadamente
      },
    });
  }
}
