import { BrothService } from '../../../services/broth.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { IProtein } from '../../../models/protein.model';
import { ProteinService } from '../../../services/protein.service';
import { IBroth } from '../../../models/broth.model';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { IOrderForm } from '../../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  proteins: IProtein[] = [];
  broths: IBroth[] = [];
  orderForm = this.formBuilder.group({
    brothId: ['', Validators.required],
    proteinId: ['', Validators.required],
  });

  constructor(
    private proteinService: ProteinService,
    private brothService: BrothService,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProteins();
    this.getAllBroths();
  }

  private getAllProteins() {
    this.proteinService.getAllProteins().subscribe({
      next: (response) => {
        this.proteins = response;
      },
      error: (error) => {},
    });
  }

  private getAllBroths() {
    this.brothService.getAllBroths().subscribe({
      next: (response) => {
        this.broths = response;
      },
      error: (error) => {},
    });
  }

  setOrder() {
    const orderFormValue = this.orderForm.value as IOrderForm;
    this.orderService.setOrder(orderFormValue);
    this.router.navigate(['/order']);
  }

  selectProtein(protein: IProtein) {
    this.orderForm.controls['proteinId'].patchValue(protein.id);
  }

  selectedProtein(protein: IProtein) {
    return this.orderForm.controls['proteinId'].value === protein.id;
  }

  selectBroth(broth: IBroth) {
    this.orderForm.controls['brothId'].patchValue(broth.id);
  }

  selectedBroth(broth: IBroth) {
    return this.orderForm.controls['brothId'].value === broth.id;
  }
}
