//apipe -> snippet jhon papa
import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interfaces';

@Pipe({
    name: 'heroTextColor'
})

export class HeroTextColorPipe implements PipeTransform {
    // se ejecuta cada vez que cambie nuestros datas 
    // asociados a nuestro pipe
    transform(color: Color): string {
        const value = ColorMap[color];
        return value;
    }
}