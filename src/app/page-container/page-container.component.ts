import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [SharedModule, ToolbarComponent, HomeComponent, OrderComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss',
})
export class PageContainerComponent {}
