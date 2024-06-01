import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [SharedModule, ToolbarComponent, HomeComponent, OrderComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss',
})
export class PageContainerComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.resetOrder();
  }

  scrollToOrder(): void {
    const elemento = document.getElementById('order');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
