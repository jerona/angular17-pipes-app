//apipe -> snippet jhon papa
import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap, Creator } from '../interfaces/hero.interfaces';

@Pipe({
    name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
    // se ejecuta cada vez que cambie nuestros datas 
    // asociados a nuestro pipe
    transform(valueCreator: Creator): string {
        const value = Creator[valueCreator];
        return value;
    }
}