import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { Color, ColorMap, Hero } from '../../interfaces/hero.interfaces';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [
    CommonModule,
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    HeroSortByPipe
  ],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent { 
  name = signal('Joel A.');
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero|null>(null);
  update = () => {
    this.upperCase.update((prev: any) => !prev)
  }

}
