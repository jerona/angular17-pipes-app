import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent { }
