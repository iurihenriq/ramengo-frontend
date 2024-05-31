import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
