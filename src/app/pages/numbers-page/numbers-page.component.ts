import { CommonModule, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css',
})
export default class NumbersPageComponent { 
  totalSells = signal(2_433_232.5567);
}
