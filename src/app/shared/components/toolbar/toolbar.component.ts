import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [SharedModule],
  template: `
    <mat-toolbar class="toolbar">
      <p class="logo">ramenGO!</p>
    </mat-toolbar>
  `,
  styles: `
  @import "variables";

.toolbar {
  background-color: transparent;
  padding: 40px 0;

  .logo {
    color: $warn;
    font-size: 1.5rem;
  }
}

@media (max-width: 1140px) {
  .toolbar {
    .logo {
      padding: 0 35px;
    }
  }
}

  `,
})
export class ToolbarComponent {}
