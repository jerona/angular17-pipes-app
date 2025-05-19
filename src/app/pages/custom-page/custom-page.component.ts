import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent { }
