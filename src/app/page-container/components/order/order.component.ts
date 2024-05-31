import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Protein } from '../../models/protein.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  proteins: Protein[] = []
}
