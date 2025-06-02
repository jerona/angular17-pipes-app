import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroShortBy',
  standalone: true,
})
export class HeroSortByPipe implements PipeTransform {

  transform(hero: Hero[], sortBy: keyof Hero|null): Hero[] {
    switch(sortBy){
      // Tratamiento como string.
      case 'name': hero.sort((a,b) => a.name.localeCompare(b.name));
      break;
      // Tratamiento como booleano.
      case 'canFly': hero.sort((a,b) => (a.canFly?1:-1) - (b.canFly?1:-1));
      break;
      // Tratamiento como enum.
      case 'color':  hero.sort((a,b) => a.color - b.color);
      break;
       // Tratamiento como enum.
      case 'creator': hero.sort((a,b) => a.creator - b.creator);
      break;
      default: hero;
    }
    return hero;
  }

}
