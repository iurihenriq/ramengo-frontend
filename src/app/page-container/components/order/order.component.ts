import { BrothService } from '../../../services/broth.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { IProtein } from '../../../models/protein.model';
import { ProteinService } from '../../../services/protein.service';
import { IBroth } from '../../../models/broth.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { IOrderForm } from '../../../models/order.model';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

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
  proteinsFetched: boolean = false;
  brothsFetched: boolean = false;
  sendingRequest: boolean = false;
  orderForm = this.formBuilder.group({
    broth: [new FormControl(), Validators.required],
    protein: [new FormControl(), Validators.required],
  });

  constructor(
    private proteinService: ProteinService,
    private brothService: BrothService,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    private snackService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getAllProteins();
    this.getAllBroths();
  }

  private getAllProteins() {
    this.proteinService
      .getAllProteins()
      .pipe(finalize(() => (this.proteinsFetched = true)))
      .subscribe({
        next: (response) => {
          this.proteins = response;
        },
        error: (error) => {
          this.snackService.openSnackBar('error when searching for proteins');
        },
      });
  }

  private getAllBroths() {
    this.brothService
      .getAllBroths()
      .pipe(finalize(() => (this.brothsFetched = true)))
      .subscribe({
        next: (response) => {
          this.broths = response;
        },
        error: (error) => {
          this.snackService.openSnackBar('error when searching for broths');
        },
      });
  }

  setOrder() {
    this.sendingRequest = true;

    const selectedProtein = this.getSelectedProtein();
    const selectedBroth = this.getSelectedBroth();
    const orderFormValue = {
      brothId: selectedBroth.id,
      proteinId: selectedProtein.id,
    } as IOrderForm;

    this.orderService.setOrderForm(orderFormValue);
    this.router.navigate(['/order']);
  }

  getSelectedBroth() {
    return this.orderForm.controls['broth'].value as IBroth;
  }

  getSelectedProtein() {
    return this.orderForm.controls['protein'].value as IProtein;
  }

  selectProtein(protein: IProtein) {
    this.orderForm.controls['protein'].patchValue(protein);
  }

  selectedProtein(protein: IProtein) {
    const selectedProtein = this.getSelectedProtein();
    return selectedProtein.id === protein.id;
  }

  selectBroth(broth: IBroth) {
    this.orderForm.controls['broth'].patchValue(broth);
  }

  selectedBroth(broth: IBroth) {
    const selectedBroth = this.getSelectedBroth();
    return selectedBroth.id === broth.id;
  }
}
