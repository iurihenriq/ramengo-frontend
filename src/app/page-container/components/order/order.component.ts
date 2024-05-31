import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Protein } from '../../models/protein.model';
import { ProteinService } from '../../services/protein.service';
import { Broth } from '../../models/broth.model';
import { BrothService } from '../../services/broth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit {
  proteins: Protein[] = [];
  broths: Broth[] = [];
  orderRequest = this.formBuilder.group({
    brothId: ['', Validators.required],
    proteinId: ['', Validators.required],
  });

  constructor(
    private proteinService: ProteinService,
    private brothService: BrothService,
    private formBuilder: FormBuilder
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

  selectProtein(protein: Protein) {
    this.orderRequest.controls['proteinId'].patchValue(protein.id);
  }

  selectedProtein(protein: Protein) {
    return this.orderRequest.controls['proteinId'].value === protein.id;
  }

  selectBroth(broth: Broth) {
    this.orderRequest.controls['brothId'].patchValue(broth.id);
  }

  selectedBroth(broth: Broth) {
    return this.orderRequest.controls['brothId'].value === broth.id;
  }

  isSelectionComplete() {
    return this.orderRequest.valid;
  }
}
