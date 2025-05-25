import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { 
  title = input.required<string>();
}
