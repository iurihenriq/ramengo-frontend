import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule];

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [modules, materialModules],
  exports: [modules, materialModules],
  providers: [],
})
export class SharedModule {}
